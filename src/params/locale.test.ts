import { describe, expect, it } from 'vitest';
import { match } from './locale';

describe('locale param matcher', () => {
	it('accepts the supported locales', () => {
		expect(match('zh')).toBe(true);
		expect(match('en')).toBe(true);
	});

	it('rejects anything else', () => {
		expect(match('ZH')).toBe(false);
		expect(match('fr')).toBe(false);
		expect(match('zhzh')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('zh-CN')).toBe(false);
	});
});
