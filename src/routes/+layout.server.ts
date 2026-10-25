import type { LayoutServerLoad } from './$types';
import { DEFAULT_LOCALE, isLocaleSegment } from '$lib/i18n';
import { messages } from '$lib/i18n/messages.server';

export const load: LayoutServerLoad = ({ params, locals }) => {
	// Reading `params.locale` here is the invalidation contract, not a
	// convenience: SvelteKit re-runs a server load on SPA navigations only when
	// a param it actually used changed, and a `/zh/…` → `/ja/…` switch is
	// exactly such a change. Falling back to `locals` alone would leave this
	// data stuck on the previous language. URLs that match no `[locale]` route
	// (404s) carry no param, so they fall back to the negotiated locals value.
	const locale =
		params.locale && isLocaleSegment(params.locale)
			? params.locale
			: (locals.locale ?? DEFAULT_LOCALE);
	// Only the active dictionary crosses the wire; the client bundle carries none.
	return { locale, messages: messages[locale] };
};
