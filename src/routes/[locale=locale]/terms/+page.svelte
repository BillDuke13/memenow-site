<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import TrustedHtml from '$lib/components/ui/TrustedHtml.svelte';
	import { messages, useLocale } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const locale = useLocale();
	const t = $derived(messages[locale()].terms);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
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

<Chapter id="scope" number={t.scope.number} label={t.scope.label} title={t.scope.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.scope.body} />
	</p>
</Chapter>

<Chapter
	id="disclaimer"
	number={t.disclaimer.number}
	label={t.disclaimer.label}
	title={t.disclaimer.title}
>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.disclaimer.p1} />
	</p>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.disclaimer.p2} />
	</p>
</Chapter>

<Chapter id="warranty" number={t.warranty.number} label={t.warranty.label} title={t.warranty.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.warranty.body} />
	</p>
</Chapter>

<Chapter id="offer" number={t.offer.number} label={t.offer.label} title={t.offer.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.offer.body} />
	</p>
</Chapter>

<Chapter id="ip" number={t.ip.number} label={t.ip.label} title={t.ip.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.ip.p1} />
	</p>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.ip.p2} />
	</p>
</Chapter>

<Chapter id="law" number={t.law.number} label={t.law.label} title={t.law.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.law.p1} />
	</p>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.law.p2} />
	</p>
</Chapter>
