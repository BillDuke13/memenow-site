/**
 * Locale and dictionary as component-tree context. The root layout provides
 * getters bound to its `data`; every consumer reads through them inside
 * `$derived`, so a cross-language navigation (which re-runs the layout load)
 * re-renders all copy without a full reload.
 *
 * This is deliberately context, not module state: context is per
 * component-tree (per request during SSR), so two concurrent visitors with
 * different languages can never see each other's copy — the failure mode of a
 * module-level `$state` on a shared Worker isolate.
 */

import { getContext, setContext } from 'svelte';
import type { MessageSchema } from './dictionaries/zh';
import type { Locale } from './locale-registry';

const I18N_CONTEXT = Symbol('memenow.i18n');

export type LocaleGetter = () => Locale;
export type MessagesGetter = () => MessageSchema;

export interface I18nContext {
	locale: LocaleGetter;
	messages: MessagesGetter;
}

export function provideI18n(context: I18nContext): void {
	setContext(I18N_CONTEXT, context);
}

/**
 * Context map for mounting a component outside the root layout (component
 * tests): `render(Component, { context: createI18nContext({ … }) })`.
 */
export function createI18nContext(context: I18nContext): Map<symbol, I18nContext> {
	// A one-shot mount option consumed by Svelte's `mount({ context })`, never
	// mutated or observed — SvelteMap reactivity would be meaningless here.
	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	return new Map([[I18N_CONTEXT, context]]);
}

function readI18n(): I18nContext {
	const context = getContext<I18nContext | undefined>(I18N_CONTEXT);
	if (!context) {
		throw new Error(
			'i18n context is missing: provideI18n() must run in an ancestor (the root layout), or mount with createI18nContext().'
		);
	}
	return context;
}

export function useLocale(): LocaleGetter {
	return readI18n().locale;
}

export function useMessages(): MessagesGetter {
	return readI18n().messages;
}
