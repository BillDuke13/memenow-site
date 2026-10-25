import { LOCALE_META, type Locale } from '$lib/i18n/locale-registry';

/** Canonical production origin. Used to build absolute URLs for canonical,
 * hreflang, and og: tags (crawlers require absolute og:image). */
export const SITE_ORIGIN = 'https://memenow.xyz';

/** Origin of the Yinyang Agent web app (a separate deployment). */
export const YINYANG_APP_ORIGIN = 'https://yinyang.memenow.xyz';

/**
 * Deep link into the Yinyang Agent app in the visitor's language, so the
 * product opens in the same locale the visitor was reading here. The app
 * serves English at its root and every other locale under `/<locale>`.
 */
export function yinyangAppHref(locale: Locale): string {
	const path = LOCALE_META[locale].yinyangPath;
	return path === '/' ? YINYANG_APP_ORIGIN : `${YINYANG_APP_ORIGIN}${path}`;
}
