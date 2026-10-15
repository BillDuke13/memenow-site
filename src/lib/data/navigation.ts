import { messages, type Locale } from '$lib/i18n';

export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
	/**
	 * Extra path prefixes that should also mark this link as the current page.
	 * Useful when one nav entry represents a group of routes (e.g. "Legal"
	 * covers /privacy, /terms).
	 */
	match?: string[];
}

// Single source of truth for site navigation. `getPrimaryNav` feeds the
// floating dock; `getFooterSections` feeds the bottom-of-page navigation.
// Add new top-level routes here, not by editing the components. All hrefs
// carry the locale prefix — the locale is an explicit parameter because
// there is no ambient "current locale" outside the component tree.
export function getHomeLink(locale: Locale): NavLink {
	return { label: messages[locale].common.home, href: `/${locale}` };
}

export function getPrimaryNav(locale: Locale): NavLink[] {
	const t = messages[locale].common;
	return [
		{ label: t.products, href: `/${locale}/products` },
		{ label: t.company, href: `/${locale}/company` },
		{
			label: t.legal,
			href: `/${locale}/terms`,
			match: [`/${locale}/privacy`, `/${locale}/terms`]
		}
	];
}

export interface FooterSection {
	title: string;
	links: NavLink[];
}

export function getFooterSections(locale: Locale): FooterSection[] {
	const t = messages[locale].common;
	return [
		{
			title: t.brand,
			links: [
				{ label: t.products, href: `/${locale}/products` },
				{ label: t.company, href: `/${locale}/company` }
			]
		},
		{
			title: t.legal,
			links: [
				{ label: t.privacy, href: `/${locale}/privacy` },
				{ label: t.terms, href: `/${locale}/terms` },
				{ label: 'GitHub', href: 'https://github.com/memenow', external: true }
			]
		}
	];
}
