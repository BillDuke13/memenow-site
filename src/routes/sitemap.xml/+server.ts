import type { RequestHandler } from './$types';
import { SITEMAP_ROUTES } from '$lib/data/sitemap';
import { SITE_ORIGIN } from '$lib/data/site';
import { LOCALE_META, SUPPORTED_LOCALES, withLocale } from '$lib/i18n';

// Every logical route is emitted once per locale, with mutual hreflang
// alternates (BCP 47 values from the locale registry). x-default points at the
// negotiating root (`/` redirects by cookie / Accept-Language), matching the
// layout's <head> annotations.
export const GET: RequestHandler = () => {
	const urls = SITEMAP_ROUTES.map(([path, lastmod]) => {
		const alternates =
			SUPPORTED_LOCALES.map(
				(locale) =>
					`\t\t\t<xhtml:link rel="alternate" hreflang="${LOCALE_META[locale].hreflang}" href="${SITE_ORIGIN}${withLocale(path, locale)}" />`
			).join('\n') +
			`\n\t\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/" />`;
		return SUPPORTED_LOCALES.map(
			(locale) =>
				`\t<url>\n\t\t<loc>${SITE_ORIGIN}${withLocale(path, locale)}</loc>\n${alternates}\n\t\t<lastmod>${lastmod}</lastmod>\n\t</url>`
		).join('\n');
	}).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};

export const prerender = true;
