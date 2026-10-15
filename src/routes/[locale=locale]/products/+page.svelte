<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].products);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft={t.hero.eyebrowLeft}
	eyebrowRight={t.hero.eyebrowRight}
	title={t.hero.title}
	lede={t.hero.lede}
	cue={t.hero.cue}
/>

<Chapter
	id="yinyang"
	number={t.yinyang.number}
	label={t.yinyang.label}
	align="left"
	title={t.yinyang.title}
>
	<p class="c-chapter__lede">{t.yinyang.lede}</p>

	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta
				href="https://yinyang.memenow.xyz"
				palette="celestial"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.yinyang.cta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.yinyang.detailLink} →
			</a>
		</div>
	{/snippet}
</Chapter>

<style>
	.c-chapter__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--spacing-6);
	}

	.c-chapter__more-link {
		font-family: var(--font-body);
		font-size: var(--type-small);
		color: var(--text-secondary);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.c-chapter__more-link:hover {
		color: var(--accent);
	}
</style>
