<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Timeline from '$lib/components/editorial/Timeline.svelte';
	import StatCard from '$lib/components/editorial/StatCard.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].company);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-company.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-company.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft={t.hero.eyebrowLeft}
	eyebrowRight={t.hero.eyebrowRight}
	title={t.hero.title}
	lede={t.hero.lede}
	cue={t.hero.cue}
/>

<Chapter
	id="studio"
	number={t.studio.number}
	label={t.studio.label}
	headless
	title={t.studio.title}
>
	<p class="c-chapter__lede">{t.studio.lede}</p>
	<p class="c-chapter__prose">{t.studio.p1}</p>
	<div class="c-stat-grid">
		<StatCard
			value={t.studio.stats.foundedYear}
			label={t.studio.stats.foundedLabel}
			description={t.studio.stats.foundedDesc}
		/>
		<StatCard
			value={t.studio.stats.productCount}
			label={t.studio.stats.productLabel}
			description={t.studio.stats.productDesc}
		/>
		<StatCard
			value={t.studio.stats.teamRegion}
			label={t.studio.stats.teamLabel}
			description={t.studio.stats.teamDesc}
		/>
	</div>
</Chapter>

<Chapter id="how" number={t.work.number} label={t.work.label} align="left" title={t.work.title}>
	<p class="c-chapter__lede">{t.work.lede}</p>
	<p class="c-chapter__prose">{t.work.p1}</p>
	<p class="c-chapter__prose">{t.work.p2}</p>
	<Timeline items={t.work.timeline} />
</Chapter>

<Chapter
	id="contact"
	number={t.contact.number}
	label={t.contact.label}
	align="split"
	title={t.contact.title}
>
	<p class="c-chapter__lede">
		{t.contact.lede}<a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>{t.contact.ledeEnd}
	</p>
	<p class="c-chapter__prose">{t.contact.p1}</p>

	{#snippet cta()}
		<ArtifactCta href="mailto:hello@memenow.xyz" palette="celestial" size="lg">
			{t.contact.cta}
		</ArtifactCta>
	{/snippet}
</Chapter>
