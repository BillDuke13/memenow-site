<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Pullquote from '$lib/components/editorial/Pullquote.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].home);
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
>
	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta
				href="https://yinyang.memenow.xyz"
				palette="celestial"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.hero.primaryCta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.hero.secondaryCta} →
			</a>
		</div>
	{/snippet}
</EditorialHero>

<Chapter
	id="yinyang"
	number={t.yinyang.number}
	label={t.yinyang.label}
	align="left"
	title={t.yinyang.title}
>
	<p class="c-chapter__lede">{t.yinyang.lede}</p>
	<p class="c-chapter__prose">{t.yinyang.p1}</p>
	<p class="c-chapter__prose">{t.yinyang.p2}</p>

	<div class="c-stack-grid">
		{#each t.yinyang.pillars as pillar (pillar.num)}
			<div class="c-stack-grid__item">
				<span class="c-stack-grid__num">{pillar.num}</span>
				<h3 class="c-stack-grid__title">{pillar.title}</h3>
				<p class="c-stack-grid__body">{pillar.body}</p>
			</div>
		{/each}
	</div>

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

<Pullquote quote={t.pullquote.quote} attribution={t.pullquote.attribution} />

<Chapter
	id="studio"
	number={t.studio.number}
	label={t.studio.label}
	align="left"
	title={t.studio.title}
>
	<p class="c-chapter__lede">{t.studio.lede}</p>
	<p class="c-chapter__prose">{t.studio.p1}</p>
	<p class="c-chapter__prose">{t.studio.p2}</p>
</Chapter>

<Chapter
	id="contact"
	number={t.contact.number}
	label={t.contact.label}
	align="left"
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
