<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Pullquote from '$lib/components/editorial/Pullquote.svelte';
	import ComparisonTable from '$lib/components/editorial/ComparisonTable.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].productYinyang);
	const comparisonColumns = $derived([
		{ key: 'generic', label: t.discipline.comparison.genericLabel },
		{ key: 'yinyang', label: t.discipline.comparison.yinyangLabel, highlight: true }
	]);
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
>
	{#snippet cta()}
		<ArtifactCta
			href="https://yinyang.memenow.xyz"
			palette="celestial"
			size="lg"
			rel="noopener noreferrer"
			target="_blank"
		>
			{t.hero.primaryCta}
		</ArtifactCta>
	{/snippet}
</EditorialHero>

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

	<div class="c-stack-grid">
		{#each t.reading.highlights as item (item.num)}
			<div class="c-stack-grid__item">
				<span class="c-stack-grid__num">{item.num}</span>
				<h3 class="c-stack-grid__title">{item.title}</h3>
				<p class="c-stack-grid__body">{item.body}</p>
			</div>
		{/each}
	</div>
</Chapter>

<Pullquote quote={t.pullquote.quote} attribution={t.pullquote.attribution} />

<Chapter
	id="slow"
	number={t.discipline.number}
	label={t.discipline.label}
	align="left"
	title={t.discipline.title}
>
	<p class="c-chapter__lede">{t.discipline.lede}</p>
	<p class="c-chapter__prose">{t.discipline.p1}</p>

	<ComparisonTable
		caption={t.discipline.comparison.caption}
		columns={comparisonColumns}
		rows={t.discipline.comparison.rows}
	/>

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
