<script lang="ts">
	import MemenowMark from '$lib/components/brand/MemenowMark.svelte';
	import { getFooterSections } from '$lib/data/navigation';
	import { messages, useLocale } from '$lib/i18n';

	const year = new Date().getFullYear();
	const locale = useLocale();
	const sections = $derived(getFooterSections(locale()));
	const legalCopy = $derived(
		messages[locale()].common.rightsReserved.replace('{year}', String(year))
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
		</div>
		<div class="c-footer__legal">
			<span>{legalCopy}</span>
		</div>
	</div>
</footer>
