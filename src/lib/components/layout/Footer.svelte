<script lang="ts">
	import { page } from '$app/state';
	import MemenowMark from '$lib/components/brand/MemenowMark.svelte';
	import { getFooterSections } from '$lib/data/navigation';
	import {
		LOCALE_META,
		SUPPORTED_LOCALES,
		switchLocalePath,
		useLocale,
		useMessages
	} from '$lib/i18n';

	const year = new Date().getFullYear();
	const locale = useLocale();
	const messages = useMessages();
	const common = $derived(messages().common);
	const sections = $derived(getFooterSections(locale(), common));
	const legalCopy = $derived(common.rightsReserved.replace('{year}', String(year)));
	// Every language as a plain link: the no-JS path to switch languages and a
	// crawlable list of alternates for the current page.
	const languages = $derived(
		SUPPORTED_LOCALES.map((target) => ({
			locale: target,
			href: switchLocalePath(page.url.pathname, page.url.search, target),
			meta: LOCALE_META[target]
		}))
	);
</script>

<footer class="c-footer">
	<div class="l-content">
		<div class="c-footer__inner">
			<div class="c-footer__col c-footer__col--lead">
				<MemenowMark variant="lockup-horizontal" size="md" />
			</div>
			{#each sections as section (section.title)}
				<div class="c-footer__col">
					<span class="c-footer__title">{section.title}</span>
					{#each section.links as link (link.href)}
						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
						>
							{link.label}
						</a>
					{/each}
				</div>
			{/each}
			<div class="c-footer__col">
				<span class="c-footer__title">{common.language.footerTitle}</span>
				{#each languages as language (language.locale)}
					<a
						href={language.href}
						hreflang={language.meta.hreflang}
						lang={language.meta.htmlLang}
						aria-current={language.locale === locale() ? 'true' : undefined}
						data-sveltekit-noscroll
					>
						{language.meta.nativeName}
					</a>
				{/each}
			</div>
		</div>
		<div class="c-footer__legal">
			<span>{legalCopy}</span>
		</div>
	</div>
</footer>
