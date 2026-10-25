import { describe, expect, it } from 'vitest';
import {
	decideLocaleRedirect,
	negotiateLocale,
	resolveLanguageTag,
	stripLocalePrefix,
	switchLocalePath,
	withLocale
} from './locale-path';

describe('stripLocalePrefix', () => {
	it('strips a supported prefix', () => {
		expect(stripLocalePrefix('/zh/products')).toEqual({ locale: 'zh', path: '/products' });
		expect(stripLocalePrefix('/en/company')).toEqual({ locale: 'en', path: '/company' });
		expect(stripLocalePrefix('/zh-TW/products/yinyang')).toEqual({
			locale: 'zh-TW',
			path: '/products/yinyang'
		});
		expect(stripLocalePrefix('/ja/terms')).toEqual({ locale: 'ja', path: '/terms' });
	});

	it("maps a bare prefix to '/'", () => {
		expect(stripLocalePrefix('/zh')).toEqual({ locale: 'zh', path: '/' });
		expect(stripLocalePrefix('/en')).toEqual({ locale: 'en', path: '/' });
		expect(stripLocalePrefix('/zh-TW')).toEqual({ locale: 'zh-TW', path: '/' });
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
		expect(stripLocalePrefix('/zh-tw')).toEqual({ locale: null, path: '/zh-tw' });
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
		expect(switchLocalePath('/zh-TW', '', 'ko')).toBe('/ko');
	});

	it('swaps into and out of a hyphenated locale', () => {
		expect(switchLocalePath('/zh-TW/company', '', 'fr')).toBe('/fr/company');
		expect(switchLocalePath('/es/terms', '', 'zh-TW')).toBe('/zh-TW/terms');
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
		expect(negotiateLocale('zh-TW', 'ja-JP')).toBe('zh-TW');
	});

	it('ignores an invalid cookie', () => {
		expect(negotiateLocale('de', 'zh-CN')).toBe('zh');
		// Cookie values are exact: a case variant is not a stored preference.
		expect(negotiateLocale('zh-tw', 'ko-KR')).toBe('ko');
	});

	it('reads the first Accept-Language tag only', () => {
		expect(negotiateLocale(undefined, 'zh-CN,zh;q=0.9')).toBe('zh');
		// Regression: a naive includes("zh") would pick zh here.
		expect(negotiateLocale(undefined, 'en-US,en;q=0.9,zh;q=0.8')).toBe('en');
		expect(negotiateLocale(undefined, 'ja;q=0.9,en;q=0.8')).toBe('ja');
	});

	it('maps each supported language family', () => {
		expect(negotiateLocale(undefined, 'ja-JP')).toBe('ja');
		expect(negotiateLocale(undefined, 'ko-KR')).toBe('ko');
		expect(negotiateLocale(undefined, 'es-MX')).toBe('es');
		expect(negotiateLocale(undefined, 'fr-CA')).toBe('fr');
		expect(negotiateLocale(undefined, 'en-GB')).toBe('en');
	});

	it('routes Chinese by script first, then region', () => {
		expect(negotiateLocale(undefined, 'zh-TW')).toBe('zh-TW');
		expect(negotiateLocale(undefined, 'zh-HK')).toBe('zh-TW');
		expect(negotiateLocale(undefined, 'zh-MO')).toBe('zh-TW');
		expect(negotiateLocale(undefined, 'zh-Hant')).toBe('zh-TW');
		expect(negotiateLocale(undefined, 'zh-Hant-CN')).toBe('zh-TW');
		expect(negotiateLocale(undefined, 'zh-Hans-TW')).toBe('zh');
		expect(negotiateLocale(undefined, 'zh-SG')).toBe('zh');
		expect(negotiateLocale(undefined, 'zh')).toBe('zh');
	});

	it('falls back to en when nothing is known', () => {
		expect(negotiateLocale(undefined, undefined)).toBe('en');
		expect(negotiateLocale(undefined, '')).toBe('en');
		expect(negotiateLocale(undefined, 'de-DE')).toBe('en');
		expect(negotiateLocale(undefined, '*')).toBe('en');
	});
});

describe('resolveLanguageTag', () => {
	it('returns null for unsupported tags', () => {
		expect(resolveLanguageTag('pt-BR')).toBeNull();
		expect(resolveLanguageTag('')).toBeNull();
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
		expect(decideLocaleRedirect({ pathname: '/ja/products' })).toEqual({
			kind: 'render',
			locale: 'ja'
		});
		expect(decideLocaleRedirect({ pathname: '/zh-TW/products/yinyang' })).toEqual({
			kind: 'render',
			locale: 'zh-TW'
		});
	});

	it('301s a case-variant locale prefix to its canonical spelling', () => {
		expect(decideLocaleRedirect({ pathname: '/zh-tw/company' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/zh-TW/company'
		});
		expect(decideLocaleRedirect({ pathname: '/EN', search: '?ref=x' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/en?ref=x'
		});
		expect(decideLocaleRedirect({ pathname: '/ZH-TW/' })).toEqual({
			kind: 'redirect',
			status: 301,
			location: '/zh-TW'
		});
	});

	it('negotiates legacy redirects into the new locales', () => {
		expect(decideLocaleRedirect({ pathname: '/', acceptLanguage: 'ja-JP,ja;q=0.9' })).toEqual({
			kind: 'redirect',
			status: 302,
			location: '/ja'
		});
		expect(decideLocaleRedirect({ pathname: '/company', acceptLanguage: 'zh-HK' })).toEqual({
			kind: 'redirect',
			status: 302,
			location: '/zh-TW/company'
		});
	});

	it('renders unknown paths with the negotiated locale (404 downstream)', () => {
		expect(decideLocaleRedirect({ pathname: '/de/products' })).toEqual({
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
