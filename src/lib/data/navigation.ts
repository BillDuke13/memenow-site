import type { Locale, MessageSchema } from '$lib/i18n';

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

type CommonCopy = MessageSchema['common'];

// Single source of truth for site navigation. `getPrimaryNav` feeds the
// floating dock; `getFooterSections` feeds the bottom-of-page navigation.
// Add new top-level routes here, not by editing the components. All hrefs
// carry the locale prefix; labels come from the active dictionary the caller
// already holds (only that dictionary exists on the client).
export function getHomeLink(locale: Locale, common: CommonCopy): NavLink {
	return { label: common.home, href: `/${locale}` };
}

export function getPrimaryNav(locale: Locale, common: CommonCopy): NavLink[] {
	return [
		{ label: common.products, href: `/${locale}/products` },
		{ label: common.company, href: `/${locale}/company` },
		{
			label: common.legal,
			href: `/${locale}/terms`,
			match: [`/${locale}/privacy`, `/${locale}/terms`]
		}
	];
}

export interface FooterSection {
	title: string;
	links: NavLink[];
}

export function getFooterSections(locale: Locale, common: CommonCopy): FooterSection[] {
	return [
		{
			title: common.brand,
			links: [
				{ label: common.products, href: `/${locale}/products` },
				{ label: common.company, href: `/${locale}/company` }
			]
		},
		{
			title: common.legal,
			links: [
				{ label: common.privacy, href: `/${locale}/privacy` },
				{ label: common.terms, href: `/${locale}/terms` },
				{ label: 'GitHub', href: 'https://github.com/memenow', external: true }
			]
		}
	];
}
