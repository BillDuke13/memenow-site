import { describe, expect, it } from 'vitest';
import {
	decideLocaleRedirect,
	negotiateLocale,
	stripLocalePrefix,
	switchLocalePath,
	withLocale
} from './locale-path';

describe('stripLocalePrefix', () => {
	it('strips a supported prefix', () => {
		expect(stripLocalePrefix('/zh/products')).toEqual({ locale: 'zh', path: '/products' });
		expect(stripLocalePrefix('/en/company')).toEqual({ locale: 'en', path: '/company' });
	});

	it("maps a bare prefix to '/'", () => {
		expect(stripLocalePrefix('/zh')).toEqual({ locale: 'zh', path: '/' });
		expect(stripLocalePrefix('/en')).toEqual({ locale: 'en', path: '/' });
	});

	it('leaves unprefixed paths untouched', () => {
		expect(stripLocalePrefix('/products')).toEqual({ locale: null, path: '/products' });
		expect(stripLocalePrefix('/')).toEqual({ locale: null, path: '/' });
	});

	it('requires an exact segment match', () => {
		expect(stripLocalePrefix('/zhzh')).toEqual({ locale: null, path: '/zhzh' });
		expect(stripLocalePrefix('/zhuan')).toEqual({ locale: null, path: '/zhuan' });
	});

	it('is case-sensitive', () => {
		expect(stripLocalePrefix('/ZH')).toEqual({ locale: null, path: '/ZH' });
	});
});

describe('withLocale', () => {
	it('prefixes a bare path', () => {
		expect(withLocale('/products', 'zh')).toBe('/zh/products');
	});

	it("maps '/' to the locale root", () => {
		expect(withLocale('/', 'en')).toBe('/en');
	});
});

describe('switchLocalePath', () => {
	it('swaps an existing prefix', () => {
		expect(switchLocalePath('/zh/products', '', 'en')).toBe('/en/products');
	});

	it('swaps the locale root', () => {
		expect(switchLocalePath('/zh', '', 'en')).toBe('/en');
	});

	it('prefixes an unprefixed path (error pages outside a locale)', () => {
		expect(switchLocalePath('/nonexistent', '', 'zh')).toBe('/zh/nonexistent');
	});

	it('preserves the query string', () => {
		expect(switchLocalePath('/en/products', '?utm=x', 'zh')).toBe('/zh/products?utm=x');
	});
});

describe('negotiateLocale', () => {
	it('prefers a valid cookie over the header', () => {
		expect(negotiateLocale('zh', 'en-US')).toBe('zh');
		expect(negotiateLocale('en', 'zh-CN')).toBe('en');
	});

	it('ignores an invalid cookie', () => {
		expect(negotiateLocale('fr', 'zh-CN')).toBe('zh');
	});

	it('reads the first Accept-Language tag only', () => {
		expect(negotiateLocale(undefined, 'zh-CN,zh;q=0.9')).toBe('zh');
		// Regression: a naive includes("zh") would pick zh here.
		expect(negotiateLocale(undefined, 'en-US,en;q=0.9,zh;q=0.8')).toBe('en');
	});

	it('falls back to en when nothing is known', () => {
		expect(negotiateLocale(undefined, undefined)).toBe('en');
		expect(negotiateLocale(undefined, '')).toBe('en');
		expect(negotiateLocale(undefined, 'fr-FR')).toBe('en');
	});
});

describe('decideLocaleRedirect', () => {
	it('redirects retired routes permanently, composing the negotiated locale', () => {
		expect(decideLocaleRedirect({ pathname: '/products/quant' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/en/products'
		});
		expect(decideLocaleRedirect({ pathname: '/disclaimer', cookieLocale: 'zh' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/zh/terms'
		});
	});

	it('redirects retired routes under a locale prefix, keeping that locale', () => {
		expect(decideLocaleRedirect({ pathname: '/zh/products/quant' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/zh/products'
		});
	});

	it('keeps the query string on retired redirects', () => {
		expect(decideLocaleRedirect({ pathname: '/disclaimer', search: '?utm=x' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/en/terms?utm=x'
		});
	});

	it('redirects legacy page paths with a (negotiated, uncacheable) 302', () => {
		expect(decideLocaleRedirect({ pathname: '/' })).toEqual({
			kind: 'redirect',
			status: 302,
			location: '/en'
		});
		expect(
			decideLocaleRedirect({ pathname: '/products', acceptLanguage: 'zh-CN,zh;q=0.9' })
		).toEqual({ kind: 'redirect', status: 302, location: '/zh/products' });
		expect(decideLocaleRedirect({ pathname: '/', cookieLocale: 'zh' })).toEqual({
			kind: 'redirect',
			status: 302,
			location: '/zh'
		});
	});

	it('normalizes a trailing slash before legacy matching', () => {
		const decision = decideLocaleRedirect({ pathname: '/products/', cookieLocale: 'en' });
		expect(decision).toEqual({ kind: 'redirect', status: 302, location: '/en/products' });
	});

	it('keeps the query string on legacy redirects', () => {
		expect(decideLocaleRedirect({ pathname: '/', search: '?ref=x', cookieLocale: 'zh' })).toEqual({
			kind: 'redirect',
			status: 302,
			location: '/zh?ref=x'
		});
	});

	it('renders locale-prefixed pages with the URL locale', () => {
		expect(decideLocaleRedirect({ pathname: '/zh/products' })).toEqual({
			kind: 'render',
			locale: 'zh'
		});
		expect(decideLocaleRedirect({ pathname: '/en' })).toEqual({ kind: 'render', locale: 'en' });
	});

	it('renders unknown paths with the negotiated locale (404 downstream)', () => {
		expect(decideLocaleRedirect({ pathname: '/fr/products' })).toEqual({
			kind: 'render',
			locale: 'en'
		});
		expect(decideLocaleRedirect({ pathname: '/nonexistent', acceptLanguage: 'zh-Hans' })).toEqual({
			kind: 'render',
			locale: 'zh'
		});
	});

	it('renders 404s under a locale prefix in that locale', () => {
		expect(decideLocaleRedirect({ pathname: '/zh/nonexistent' })).toEqual({
			kind: 'render',
			locale: 'zh'
		});
	});

	it('leaves static assets alone', () => {
		expect(decideLocaleRedirect({ pathname: '/brand/mark.png' })).toEqual({
			kind: 'render',
			locale: 'en'
		});
		expect(decideLocaleRedirect({ pathname: '/sitemap.xml' })).toEqual({
			kind: 'render',
			locale: 'en'
		});
	});
});
