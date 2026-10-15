import { isLocaleSegment } from '$lib/i18n/locale-path';
import type { Locale } from '$lib/i18n/messages';

/**
 * SvelteKit param matcher for the `[locale=locale]` route segment. Exact,
 * case-sensitive — `/ZH`, `/zhzh` and `/fr/…` fall through to the 404 page.
 */
export function match(param: string): param is Locale {
	return isLocaleSegment(param);
}
