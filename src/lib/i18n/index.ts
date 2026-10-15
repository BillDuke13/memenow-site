/**
 * i18n public surface. `messages.ts` owns the dictionary and the Locale type;
 * `locale.svelte.ts` owns the component-tree context; `locale-path.ts` owns
 * URL/redirect plumbing. No module-level mutable state lives here — locale is
 * per-request (URL-driven) by design.
 */

export { DEFAULT_LOCALE, messages, SUPPORTED_LOCALES } from './messages';
export type { Locale, MessageSchema } from './messages';
export { provideLocale, useLocale } from './locale.svelte';
export type { LocaleGetter } from './locale.svelte';
export {
	decideLocaleRedirect,
	isLocaleSegment,
	negotiateLocale,
	stripLocalePrefix,
	switchLocalePath,
	withLocale
} from './locale-path';
export type { LocaleRedirectDecision } from './locale-path';
