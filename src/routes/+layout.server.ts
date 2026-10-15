import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params, locals }) => {
	// Reading `params.locale` here is the invalidation contract, not a
	// convenience: SvelteKit re-runs a server load on SPA navigations only when
	// a param it actually used changed, and a `/zh/…` → `/en/…` switch is
	// exactly such a change. Falling back to `locals` alone would leave this
	// data stuck on the previous language. URLs that match no `[locale]` route
	// (404s) carry no param, so they fall back to the negotiated locals value.
	return {
		locale:
			params.locale === 'zh' || params.locale === 'en' ? params.locale : (locals.locale ?? 'zh')
	};
};
