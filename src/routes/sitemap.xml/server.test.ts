import { describe, expect, it } from 'vitest';
import { GET } from './+server';
import { SITEMAP_ROUTES as ROUTES } from '$lib/data/sitemap';
import { SUPPORTED_LOCALES, withLocale } from '$lib/i18n';

const BASE = 'https://memenow.xyz';

describe('GET /sitemap.xml', () => {
	it('returns XML with the correct content-type', async () => {
		const response = await invoke();
		expect(response.headers.get('content-type')).toBe('application/xml; charset=utf-8');
	});

	it('caches for one hour', async () => {
		const response = await invoke();
		expect(response.headers.get('cache-control')).toBe('public, max-age=3600');
	});

	it('lists every route in every supported locale exactly once', async () => {
		const response = await invoke();
		const body = await response.text();
		for (const [path] of ROUTES) {
			for (const locale of SUPPORTED_LOCALES) {
				const loc = `${BASE}${withLocale(path, locale)}`;
				const occurrences = body.split(`<loc>${loc}</loc>`).length - 1;
				expect(occurrences, `expected exactly one entry for ${loc}`).toBe(1);
			}
		}
	});

	it('emits ISO date stamps for lastmod', async () => {
		const response = await invoke();
		const body = await response.text();
		const lastmods = [...body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
		expect(lastmods.length).toBe(ROUTES.length * SUPPORTED_LOCALES.length);
		for (const value of lastmods) {
			expect(value).toMatch(/^\d{4}-\d{2}-\d{2}$/);
		}
	});

	it('pairs each localized path with its frozen lastmod from ROUTES', async () => {
		const response = await invoke();
		const body = await response.text();
		const urlBlocks = body.match(/<url>[\s\S]*?<\/url>/g) ?? [];
		for (const [path, lastmod] of ROUTES) {
			for (const locale of SUPPORTED_LOCALES) {
				const loc = `${BASE}${withLocale(path, locale)}`;
				const block = urlBlocks.find((b) => b.includes(`<loc>${loc}</loc>`));
				expect(block, `expected a <url> for ${loc}`).toBeDefined();
				expect(block).toContain(`<lastmod>${lastmod}</lastmod>`);
			}
		}
	});

	it('annotates every url with BCP 47 alternates for each locale plus x-default', async () => {
		const response = await invoke();
		const body = await response.text();
		const urlBlocks = body.match(/<url>[\s\S]*?<\/url>/g) ?? [];
		expect(urlBlocks.length).toBe(ROUTES.length * SUPPORTED_LOCALES.length);
		for (const block of urlBlocks) {
			expect(block.match(/<xhtml:link /g)?.length).toBe(SUPPORTED_LOCALES.length + 1);
			for (const hreflang of ['zh-Hans', 'zh-Hant', 'en', 'ja', 'ko', 'es', 'fr']) {
				expect(block).toContain(`hreflang="${hreflang}"`);
			}
			expect(block).toContain(`hreflang="zh-Hant" href="${BASE}/zh-TW`);
			expect(block).toContain(`hreflang="x-default" href="${BASE}/"`);
		}
	});

	it('produces well-formed urlset XML with the xhtml namespace', async () => {
		const response = await invoke();
		const body = await response.text();
		expect(body.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
		expect(body).toContain(
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
		);
		expect(body.trim().endsWith('</urlset>')).toBe(true);
	});
});

function invoke(): Response | Promise<Response> {
	// SvelteKit's RequestHandler signature is wider than what this handler uses;
	// the sitemap GET ignores its argument so an empty object is sufficient.
	const result = (GET as unknown as () => Response | Promise<Response>)();
	return result;
}
