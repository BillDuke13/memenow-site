import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';
import { resolveRouteFamily } from '$lib/utils/route-family';
import { decideLocaleRedirect, LOCALE_META, stripLocalePrefix } from '$lib/i18n';

// app.html ships `data-route-family="pending"` as an explicit placeholder so a
// missed substitution is observable (no scene fog) instead of silently locked
// to one family. The client-side `$effect` in `+layout.svelte` is the SPA
// navigation fallback — hooks only run on full document loads.
const ROUTE_FAMILY_PLACEHOLDER = 'data-route-family="pending"';

export const handle: Handle = async ({ event, resolve }) => {
	// One pure decision for every request: retired URLs leave permanently (301),
	// legacy unprefixed page URLs get negotiated (302 — never 301, the target
	// varies per visitor and must not be cached), everything else renders with
	// a resolved locale. See lib/i18n/locale-path.ts and its tests.
	const decision = decideLocaleRedirect({
		pathname: event.url.pathname,
		search: building ? '' : event.url.search,
		cookieLocale: building ? undefined : event.cookies.get('memenow.locale'),
		acceptLanguage: building ? null : event.request.headers.get('accept-language')
	});
	if (decision.kind === 'redirect') {
		redirect(decision.status, decision.location);
	}
	event.locals.locale = decision.locale;

	// Persist the URL locale as the preference for the next `/` negotiation —
	// but never on data requests: hover-prefetching the other language's link
	// (data-sveltekit-preload-data="hover") must not rewrite the preference.
	const { locale: urlLocale } = stripLocalePrefix(event.url.pathname);
	if (urlLocale && !event.isDataRequest && !building) {
		event.cookies.set('memenow.locale', urlLocale, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax'
		});
	}

	const family = resolveRouteFamily(event.url.pathname);
	const htmlLang = LOCALE_META[decision.locale].htmlLang;
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace(ROUTE_FAMILY_PLACEHOLDER, `data-route-family="${family}"`)
				.replace(/lang="[a-zA-Z-]*"/, `lang="${htmlLang}"`)
	});
};
