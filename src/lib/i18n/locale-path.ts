/**
 * Pure locale/URL plumbing for the `/<locale>` prefix scheme. Everything here
 * is string-in/string-out so the redirect policy is unit-testable in Node and
 * `hooks.server.ts` stays thin glue (same pattern as `$lib/utils/redirects.ts`
 * and `$lib/utils/route-family.ts`).
 */

import {
	DEFAULT_LOCALE,
	INTERNATIONAL_FALLBACK_LOCALE,
	SUPPORTED_LOCALES,
	type Locale
} from './locale-registry';
import { resolveRetiredRedirect } from '$lib/utils/redirects';

/** Exact, case-sensitive membership test — `ZH` and `zh-tw` are NOT locales. */
export function isLocaleSegment(segment: string): segment is Locale {
	return (SUPPORTED_LOCALES as readonly string[]).includes(segment);
}

/** Canonical spelling of a case-variant segment (`zh-tw` → `zh-TW`), else null. */
function canonicalizeLocaleSegment(segment: string): Locale | null {
	const lowered = segment.toLowerCase();
	return SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === lowered) ?? null;
}

function firstSegment(pathname: string): string {
	return pathname.split('/')[1] ?? '';
}

/**
 * Split a pathname into its locale prefix and the bare path. The prefix must
 * be an exact first segment — `/zhzh` or `/ZH` are NOT locales. `/zh` alone
 * maps to the bare `/`.
 */
export function stripLocalePrefix(pathname: string): { locale: Locale | null; path: string } {
	const segment = firstSegment(pathname);
	if (isLocaleSegment(segment)) {
		return { locale: segment, path: pathname.slice(segment.length + 1) || '/' };
	}
	return { locale: null, path: pathname };
}

/** `/products` + `zh` → `/zh/products`; `/` + `en` → `/en`. */
export function withLocale(path: string, locale: Locale): string {
	return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Href for the language menu: same page, other locale. Works on unprefixed
 * paths too (a 404 outside the prefixes switches into the localized 404). The
 * query string (`?…` or '') is carried over untouched.
 */
export function switchLocalePath(pathname: string, search: string, target: Locale): string {
	const { path } = stripLocalePrefix(pathname);
	return `${withLocale(path, target)}${search}`;
}

/**
 * Map one BCP 47 language tag to a supported locale, or null. Chinese follows
 * the script first (an explicit `Hans` wins, even in Taiwan), then the region
 * (`TW` / `HK` / `MO` → Traditional) — the same rule as yinyang-agent-ui.
 */
export function resolveLanguageTag(tag: string): Locale | null {
	const [base = '', ...subtags] = tag.trim().toLowerCase().split('-');
	if (base === 'zh') {
		if (subtags.includes('hans')) return 'zh';
		if (subtags.includes('hant') || subtags.some((sub) => ['tw', 'hk', 'mo'].includes(sub))) {
			return 'zh-TW';
		}
		return 'zh';
	}
	return isLocaleSegment(base) ? base : null;
}

/**
 * Pick a locale from the visitor's signals. A valid preference cookie wins;
 * otherwise only the FIRST Accept-Language tag counts (a later `zh;q=0.8`
 * must not outrank `en-US`), and an unknown or missing tag falls back to
 * English as the international default.
 */
export function negotiateLocale(
	cookieLocale: string | undefined,
	acceptLanguage: string | null | undefined
): Locale {
	if (cookieLocale && isLocaleSegment(cookieLocale)) return cookieLocale;
	const first = acceptLanguage?.split(',')[0]?.split(';')[0] ?? '';
	return resolveLanguageTag(first) ?? INTERNATIONAL_FALLBACK_LOCALE;
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
 * - a case-variant locale prefix (`/zh-tw/…`, `/EN`) → **301** to the
 *   canonical spelling; the mapping is deterministic, so permanent is safe.
 * - retired routes (matched on the prefix-stripped path) → **301** to their
 *   replacement under the URL locale when present, else the negotiated one.
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

	const segment = firstSegment(normalized);
	const canonical = isLocaleSegment(segment) ? null : canonicalizeLocaleSegment(segment);
	if (canonical) {
		const rest = normalized.slice(segment.length + 1);
		return { kind: 'redirect', status: 301, location: `/${canonical}${rest}${search}` };
	}

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
