<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Pullquote from '$lib/components/editorial/Pullquote.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].productYinyang);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-yinyang.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-yinyang.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft={t.hero.eyebrowLeft}
	eyebrowRight={t.hero.eyebrowRight}
	title={t.hero.title}
	lede={t.hero.lede}
	cue={t.hero.cue}
/>

<Chapter
	id="reading"
	number={t.reading.number}
	label={t.reading.label}
	align="left"
	title={t.reading.title}
>
	<p class="c-chapter__lede">{t.reading.lede}</p>
	<p class="c-chapter__prose">{t.reading.p1}</p>
	<p class="c-chapter__prose">{t.reading.p2}</p>
</Chapter>

<Pullquote quote={t.pullquote.quote} attribution={t.pullquote.attribution} />

<Chapter
	id="slow"
	number={t.discipline.number}
	label={t.discipline.label}
	headless
	title={t.discipline.title}
>
	<p class="c-chapter__lede">{t.discipline.lede}</p>
	<p class="c-chapter__prose">{t.discipline.p1}</p>

	{#snippet cta()}
		<ArtifactCta
			href="https://yinyang.memenow.xyz"
			palette="celestial"
			size="lg"
			rel="noopener noreferrer"
			target="_blank"
		>
			{t.discipline.cta}
		</ArtifactCta>
	{/snippet}
</Chapter>
