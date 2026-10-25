/**
 * i18n public surface, safe for client bundles. `locale-registry.ts` owns the
 * locale list and per-locale metadata; `dictionaries/` hold the copy (the
 * aggregate lives in the server-only `messages.server.ts`); `locale.svelte.ts`
 * owns the component-tree context; `locale-path.ts` owns URL/redirect
 * plumbing. No module-level mutable state lives here — locale is per-request
 * (URL-driven) by design.
 */

export {
	DEFAULT_LOCALE,
	INTERNATIONAL_FALLBACK_LOCALE,
	LOCALE_META,
	SUPPORTED_LOCALES
} from './locale-registry';
export type { Locale, LocaleMeta } from './locale-registry';
export type { MessageSchema } from './dictionaries/zh';
export { createI18nContext, provideI18n, useLocale, useMessages } from './locale.svelte';
export type { I18nContext, LocaleGetter, MessagesGetter } from './locale.svelte';
export {
	decideLocaleRedirect,
	isLocaleSegment,
	negotiateLocale,
	resolveLanguageTag,
	stripLocalePrefix,
	switchLocalePath,
	withLocale
} from './locale-path';
export type { LocaleRedirectDecision } from './locale-path';
