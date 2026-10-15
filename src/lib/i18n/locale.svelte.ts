/**
 * Locale as component-tree context. The root layout provides a getter bound
 * to its `data.locale`; every consumer below reads through that getter inside
 * `$derived`, so a cross-language navigation (which re-runs the layout load)
 * re-renders all copy without a full reload.
 *
 * This is deliberately context, not module state: context is per
 * component-tree (per request during SSR), so two concurrent visitors with
 * different languages can never see each other's locale — the failure mode of
 * a module-level `$state` on a shared Worker isolate.
 */

import { getContext, setContext } from 'svelte';
import { DEFAULT_LOCALE, type Locale } from './messages';

const LOCALE_CONTEXT = Symbol('memenow.locale');

export type LocaleGetter = () => Locale;

export function provideLocale(get: LocaleGetter): void {
	setContext(LOCALE_CONTEXT, get);
}

/**
 * Returns the locale getter. The DEFAULT_LOCALE fallback keeps isolated
 * component tests (vitest-browser-svelte, no layout ancestor) mountable.
 */
export function useLocale(): LocaleGetter {
	return getContext<LocaleGetter | undefined>(LOCALE_CONTEXT) ?? (() => DEFAULT_LOCALE);
}
