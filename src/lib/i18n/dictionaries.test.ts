import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from './locale-registry';
import { messages } from './messages.server';

// Structural key parity is enforced at compile time by `MessageSchema`; these
// checks cover what types cannot: empty translations, dropped placeholders, and
// markup drift in the trusted legal strings rendered through TrustedHtml.

type Entry = { path: string; value: string };

function collectStrings(node: unknown, path: string, out: Entry[]): Entry[] {
	if (typeof node === 'string') {
		out.push({ path, value: node });
	} else if (Array.isArray(node)) {
		node.forEach((item, i) => collectStrings(item, `${path}[${i}]`, out));
	} else if (node && typeof node === 'object') {
		for (const [key, value] of Object.entries(node)) {
			collectStrings(value, path ? `${path}.${key}` : key, out);
		}
	}
	return out;
}

const reference = new Map(collectStrings(messages.zh, '', []).map((e) => [e.path, e.value]));

/** Tags (with attributes) in order, e.g. `<a href="mailto:…">`, `</a>`. */
function tagsOf(value: string): string[] {
	return value.match(/<\/?[a-z][^>]*>/g) ?? [];
}

describe.each(SUPPORTED_LOCALES)('dictionary %s', (locale) => {
	const entries = collectStrings(messages[locale], '', []);

	it('has the same string paths as the zh schema owner', () => {
		expect(entries.map((e) => e.path).sort()).toEqual([...reference.keys()].sort());
	});

	it('has no empty strings', () => {
		const empty = entries.filter((e) => e.value.trim() === '').map((e) => e.path);
		// `ledeEnd` may legitimately be empty when the sentence ends at the link.
		expect(empty.filter((path) => !path.endsWith('.ledeEnd'))).toEqual([]);
	});

	it('preserves runtime placeholders', () => {
		for (const { path, value } of entries) {
			for (const token of ['{year}', '{status}']) {
				if (reference.get(path)?.includes(token)) expect(value, path).toContain(token);
			}
		}
	});

	it('keeps trusted markup identical to the zh reference', () => {
		for (const { path, value } of entries) {
			expect(tagsOf(value).sort(), path).toEqual(tagsOf(reference.get(path) ?? '').sort());
		}
	});

	it('never translates the brand', () => {
		expect(messages[locale].common.brand).toBe('memenow');
	});
});
