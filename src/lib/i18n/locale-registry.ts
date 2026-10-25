/**
 * The single registry of supported locales. URL segments, `<html lang>`,
 * hreflang, `og:locale`, the language menu, and Yinyang app deep links all
 * derive from this table — nothing else may hard-code a locale list.
 *
 * The set and the URL segments mirror the sibling app (yinyang-agent-ui), so a
 * visitor's language survives the hop from memenow.xyz into the product.
 * Pure data with no dictionary imports: safe for client bundles.
 */

export const SUPPORTED_LOCALES = ['zh', 'zh-TW', 'en', 'ja', 'ko', 'es', 'fr'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh';

/** Fallback when no visitor signal maps to a supported locale. */
export const INTERNATIONAL_FALLBACK_LOCALE: Locale = 'en';

export interface LocaleMeta {
	/** Endonym shown in the language menu and footer. */
	nativeName: string;
	/** Compact label for the dock trigger. */
	shortLabel: string;
	/** Value written to `<html lang>` and the `lang` attribute of menu links. */
	htmlLang: string;
	/** BCP 47 value for hreflang; Chinese is script-qualified, as in yinyang-agent-ui. */
	hreflang: string;
	/** Open Graph locale (`language_TERRITORY`). */
	ogLocale: string;
	/** Path on yinyang.memenow.xyz for this locale; English lives at the root. */
	yinyangPath: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
	zh: {
		nativeName: '简体中文',
		shortLabel: '简',
		htmlLang: 'zh',
		hreflang: 'zh-Hans',
		ogLocale: 'zh_CN',
		yinyangPath: '/zh'
	},
	'zh-TW': {
		nativeName: '繁體中文',
		shortLabel: '繁',
		htmlLang: 'zh-TW',
		hreflang: 'zh-Hant',
		ogLocale: 'zh_TW',
		yinyangPath: '/zh-TW'
	},
	en: {
		nativeName: 'English',
		shortLabel: 'EN',
		htmlLang: 'en',
		hreflang: 'en',
		ogLocale: 'en_US',
		yinyangPath: '/'
	},
	ja: {
		nativeName: '日本語',
		shortLabel: '日',
		htmlLang: 'ja',
		hreflang: 'ja',
		ogLocale: 'ja_JP',
		yinyangPath: '/ja'
	},
	ko: {
		nativeName: '한국어',
		shortLabel: '한',
		htmlLang: 'ko',
		hreflang: 'ko',
		ogLocale: 'ko_KR',
		yinyangPath: '/ko'
	},
	es: {
		nativeName: 'Español',
		shortLabel: 'ES',
		htmlLang: 'es',
		hreflang: 'es',
		ogLocale: 'es_ES',
		yinyangPath: '/es'
	},
	fr: {
		nativeName: 'Français',
		shortLabel: 'FR',
		htmlLang: 'fr',
		hreflang: 'fr',
		ogLocale: 'fr_FR',
		yinyangPath: '/fr'
	}
};
