/**
 * Map a URL pathname to the narrative family that drives `data-route-family`
 * on `<html>`. Editorial routes ('threshold') get the celestial fog; the
 * privacy / terms pair ('legal') get a quieter, near-flat veil.
 *
 * Locale prefixes (`/zh`, `/en`) are stripped first, so `/zh/privacy` and
 * `/privacy` classify identically. Used by `hooks.server.ts` for SSR and by
 * the root layout's `$effect` for SPA navigations — the two paths must
 * produce identical results.
 */

import { stripLocalePrefix } from '$lib/i18n/locale-path';

export type RouteFamily = 'threshold' | 'legal';

const LEGAL_PREFIXES = ['/privacy', '/terms'];

export function resolveRouteFamily(pathname: string): RouteFamily {
	const { path } = stripLocalePrefix(pathname);
	const isLegal = LEGAL_PREFIXES.some(
		// Equality + segment boundary; bare `startsWith` would mis-classify
		// `/privacy-mode` etc. (covered by route-family.test.ts).
		(prefix) => path === prefix || path.startsWith(`${prefix}/`)
	);
	return isLegal ? 'legal' : 'threshold';
}
