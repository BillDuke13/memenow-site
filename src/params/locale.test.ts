import { describe, expect, it } from 'vitest';
import { match } from './locale';

describe('locale param matcher', () => {
	it('accepts every supported locale', () => {
		for (const locale of ['zh', 'zh-TW', 'en', 'ja', 'ko', 'es', 'fr']) {
			expect(match(locale), locale).toBe(true);
		}
	});

	it('rejects anything else', () => {
		expect(match('ZH')).toBe(false);
		expect(match('zh-tw')).toBe(false);
		expect(match('de')).toBe(false);
		expect(match('zhzh')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('zh-CN')).toBe(false);
	});
});
