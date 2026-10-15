/**
 * Pure locale/URL plumbing for the `/zh` + `/en` prefix scheme. Everything
 * here is string-in/string-out so the redirect policy is unit-testable in Node
 * and `hooks.server.ts` stays thin glue (same pattern as
 * `$lib/utils/redirects.ts` and `$lib/utils/route-family.ts`).
 */

import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from './messages';
import { resolveRetiredRedirect } from '$lib/utils/redirects';

export function isLocaleSegment(segment: string): segment is Locale {
	return (SUPPORTED_LOCALES as readonly string[]).includes(segment);
}

/**
 * Split a pathname into its locale prefix and the bare path. The prefix must
 * be an exact first segment — `/zhzh` or `/ZH` are NOT locales. `/zh` alone
 * maps to the bare `/`.
 */
export function stripLocalePrefix(pathname: string): { locale: Locale | null; path: string } {
	const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
	if (match && isLocaleSegment(match[1])) {
		return { locale: match[1], path: pathname.slice(match[0].length) || '/' };
	}
	return { locale: null, path: pathname };
}

/** `/products` + `zh` → `/zh/products`; `/` + `en` → `/en`. */
export function withLocale(path: string, locale: Locale): string {
	return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Href for the language switcher: same page, other locale. Works on unprefixed
 * paths too (a 404 outside the prefixes switches into the localized 404). The
 * query string (`?…` or '') is carried over untouched.
 */
export function switchLocalePath(pathname: string, search: string, target: Locale): string {
	const { path } = stripLocalePrefix(pathname);
	return `${withLocale(path, target)}${search}`;
}

/**
 * Pick a locale from the visitor's signals. A valid preference cookie wins;
 * otherwise only the FIRST Accept-Language tag counts (a later `zh;q=0.8`
 * must not outrank `en-US`), and when nothing is known we default to English
 * as the international fallback.
 */
export function negotiateLocale(
	cookieLocale: string | undefined,
	acceptLanguage: string | null | undefined
): Locale {
	if (cookieLocale && isLocaleSegment(cookieLocale)) return cookieLocale;
	const first = acceptLanguage?.split(',')[0]?.trim().toLowerCase() ?? '';
	return first.startsWith('zh') ? 'zh' : 'en';
}

/** Page URLs that existed before the locale prefixes and must not break. */
const LEGACY_PAGE_PATHS: ReadonlySet<string> = new Set([
	'/',
	'/products',
	'/products/yinyang',
	'/company',
	'/privacy',
	'/terms'
]);

export type LocaleRedirectDecision =
	{ kind: 'redirect'; status: 301 | 302; location: string } | { kind: 'render'; locale: Locale };

/**
 * The single redirect policy for every incoming request:
 *
 * - retired routes (matched on the prefix-stripped path) → **301** to their
 *   replacement under the URL locale when present, else the negotiated one.
 *   301 is safe here because the mapping is deterministic.
 * - legacy unprefixed page paths → **302** to the negotiated locale. 302, not
 *   301: the target varies per visitor (cookie / Accept-Language), and a
 *   permanent redirect would be cached by browsers and shared caches.
 * - everything else renders; the resolved locale feeds `locals.locale` so
 *   even 404s answer in the right language.
 *
 * Trailing slashes are normalized first; the query string survives every hop.
 */
export function decideLocaleRedirect(input: {
	pathname: string;
	search?: string;
	cookieLocale?: string;
	acceptLanguage?: string | null;
}): LocaleRedirectDecision {
	const search = input.search ?? '';
	const normalized =
		input.pathname.length > 1 ? input.pathname.replace(/\/+$/, '') : input.pathname;
	const { locale: urlLocale, path } = stripLocalePrefix(normalized);

	const retired = resolveRetiredRedirect(path);
	if (retired) {
		const locale = urlLocale ?? negotiateLocale(input.cookieLocale, input.acceptLanguage);
		return { kind: 'redirect', status: 301, location: withLocale(retired, locale) + search };
	}

	if (!urlLocale && LEGACY_PAGE_PATHS.has(path)) {
		const locale = negotiateLocale(input.cookieLocale, input.acceptLanguage);
		return { kind: 'redirect', status: 302, location: withLocale(path, locale) + search };
	}

	return {
		kind: 'render',
		locale: urlLocale ?? negotiateLocale(input.cookieLocale, input.acceptLanguage)
	};
}

export { DEFAULT_LOCALE };
