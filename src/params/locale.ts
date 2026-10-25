import { isLocaleSegment } from '$lib/i18n/locale-path';
import type { Locale } from '$lib/i18n/locale-registry';

/**
 * SvelteKit param matcher for the `[locale=locale]` route segment. Exact,
 * case-sensitive — `/ZH`, `/zh-tw`, `/zhzh` and `/de/…` never match here
 * (case variants are 301-redirected by `hooks.server.ts`; the rest 404).
 */
export function match(param: string): param is Locale {
	return isLocaleSegment(param);
}
