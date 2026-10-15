import { describe, expect, it } from 'vitest';
import { resolveRouteFamily } from './route-family';

describe('resolveRouteFamily', () => {
	it("classifies '/privacy' as legal", () => {
		expect(resolveRouteFamily('/privacy')).toBe('legal');
	});

	it('classifies legal subpaths as legal', () => {
		expect(resolveRouteFamily('/terms')).toBe('legal');
		expect(resolveRouteFamily('/privacy/cookies')).toBe('legal');
	});

	it("classifies '/' as threshold", () => {
		expect(resolveRouteFamily('/')).toBe('threshold');
	});

	it('classifies marketing routes as threshold', () => {
		expect(resolveRouteFamily('/products')).toBe('threshold');
		expect(resolveRouteFamily('/products/yinyang')).toBe('threshold');
		expect(resolveRouteFamily('/company')).toBe('threshold');
	});

	it('does not match overlapping prefixes loosely', () => {
		// `/privacy-mode` would have matched a naive `startsWith('/privacy')`.
		expect(resolveRouteFamily('/privacy-mode')).toBe('threshold');
		expect(resolveRouteFamily('/privately-held')).toBe('threshold');
		expect(resolveRouteFamily('/terms-and-conditions')).toBe('threshold');
	});

	it('strips the locale prefix before classifying', () => {
		expect(resolveRouteFamily('/zh/privacy')).toBe('legal');
		expect(resolveRouteFamily('/en/terms')).toBe('legal');
		expect(resolveRouteFamily('/zh')).toBe('threshold');
		expect(resolveRouteFamily('/en/products')).toBe('threshold');
	});

	it('does not mistake a locale lookalike for a prefix', () => {
		expect(resolveRouteFamily('/zhzh/privacy')).toBe('threshold');
	});
});
