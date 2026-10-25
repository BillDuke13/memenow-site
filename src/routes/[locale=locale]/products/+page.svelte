<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import { useLocale, useMessages } from '$lib/i18n';
	import { SITE_ORIGIN, yinyangAppHref } from '$lib/data/site';

	const locale = useLocale();
	const messages = useMessages();
	const t = $derived(messages().products);
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

	<div class="c-stack-grid">
		{#each t.yinyang.steps as step (step.num)}
			<div class="c-stack-grid__item">
				<span class="c-stack-grid__num">{step.num}</span>
				<h3 class="c-stack-grid__title">{step.title}</h3>
				<p class="c-stack-grid__body">{step.body}</p>
			</div>
		{/each}
	</div>

	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta
				href={yinyangAppHref(locale())}
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
