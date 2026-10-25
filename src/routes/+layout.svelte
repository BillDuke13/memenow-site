<script lang="ts">
	// Variable fonts carrying the optical-size (opsz) axis, activated by
	// `font-optical-sizing: auto` in tokens.css. Newsreader is the display face,
	// Inter the body face; one import per family covers the full weight range.
	import '@fontsource-variable/newsreader/opsz.css';
	import '@fontsource-variable/inter/opsz.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import './layout.css';
	import AppShell from '$lib/components/layout/AppShell.svelte';
	import {
		startLenis,
		stopLenis,
		pauseLenis,
		resumeLenis,
		prefersReducedMotion,
		setViewTransitionUpdating
	} from '$lib/utils/motion';
	import { resolveRouteFamily } from '$lib/utils/route-family';
	import {
		LOCALE_META,
		SUPPORTED_LOCALES,
		provideI18n,
		stripLocalePrefix,
		withLocale
	} from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	let { data, children } = $props();

	// Locale and dictionary live in per-tree context getters (never module
	// state): SSR requests stay isolated, and SPA language switches re-run the
	// layout load (see +layout.server.ts), which every consumer reacts to via
	// useLocale() / useMessages().
	provideI18n({ locale: () => data.locale, messages: () => data.messages });

	// Absolute canonical URL for the current path (pathname only — query and hash
	// are never canonical here). Also feeds og:url so shared cards resolve back to
	// the page. noindex routes still get a canonical, which is valid.
	const canonical = $derived(new URL(page.url.pathname, SITE_ORIGIN).href);

	// hreflang/og:locale sets, emitted only on locale-prefixed URLs — a
	// prefix-less 404 must not claim alternates. x-default points at the
	// negotiating root (`/` redirects by cookie / Accept-Language).
	const barePath = $derived(stripLocalePrefix(page.url.pathname).path);
	const isLocalizedUrl = $derived(stripLocalePrefix(page.url.pathname).locale !== null);
	const alternates = $derived(
		SUPPORTED_LOCALES.map((locale) => ({
			hreflang: LOCALE_META[locale].hreflang,
			href: new URL(withLocale(barePath, locale), SITE_ORIGIN).href
		}))
	);
	const ogLocale = $derived(LOCALE_META[data.locale].ogLocale);
	const ogLocaleAlternates = $derived(
		SUPPORTED_LOCALES.filter((locale) => locale !== data.locale).map(
			(locale) => LOCALE_META[locale].ogLocale
		)
	);

	let scrollProgress = $state(0);

	onMount(() => {
		startLenis();

		// Reading-progress hairline. rAF-throttled so Lenis's per-frame scroll
		// updates don't thrash; reads real document scrollTop so it works with or
		// without Lenis (reduced-motion users get native scroll).
		let raf = 0;
		const measure = () => {
			raf = 0;
			const el = document.documentElement;
			const max = el.scrollHeight - el.clientHeight;
			scrollProgress = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
			// Drive the persistent world layer's parallax drift on the same tick;
			// world-layer.css reads --world-scroll and reduced motion ignores it.
			el.style.setProperty('--world-scroll', scrollProgress.toFixed(4));
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		return () => {
			stopLenis();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	});

	// Cross-page View Transitions. Same-document (SPA) navigations crossfade via
	// the View Transitions API; unsupported browsers fall through to an instant
	// swap. Lenis is paused around the transition so its native-scroll rAF can't
	// shift the before/after snapshots, then resumed once the transition settles.
	// Reduced motion (the OS setting or the in-page toggle) short-circuits to an
	// instant swap below, so no transition is started in the first place.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		// Honor reduced motion: skip the transition entirely (instant DOM swap),
		// which also means no ::view-transition snapshot or animation to undo.
		if (prefersReducedMotion()) return;
		// Same-path / hash-only navigation changes nothing visible — skip it.
		if (navigation.to?.url.pathname === navigation.from?.url.pathname) return;

		pauseLenis();
		// Flag the in-flight transition so the hero title presents at rest (its
		// entrance is suppressed) and the shared-element morph captures real text.
		setViewTransitionUpdating(true);
		return new Promise<void>((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			// Resume Lenis and clear the nav flag on success OR an aborted
			// transition (rapid re-navigation rejects .finished); one settle
			// handler for both also avoids an unhandled rejection.
			const settle = () => {
				resumeLenis();
				setViewTransitionUpdating(false);
			};
			transition.finished.then(settle, settle);
		});
	});

	$effect(() => {
		if (typeof document === 'undefined') return;
		// SSR seeds both attributes via hooks.server.ts; this effect is the SPA
		// navigation fallback (hooks don't run on client-side transitions).
		document.documentElement.lang = LOCALE_META[data.locale].htmlLang;
		const family = resolveRouteFamily(page.url.pathname);
		document.documentElement.setAttribute('data-route-family', family);
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	{#if isLocalizedUrl}
		{#each alternates as alternate (alternate.hreflang)}
			<link rel="alternate" hreflang={alternate.hreflang} href={alternate.href} />
		{/each}
		<link rel="alternate" hreflang="x-default" href="{SITE_ORIGIN}/" />
		<meta property="og:locale" content={ogLocale} />
		{#each ogLocaleAlternates as alternate (alternate)}
			<meta property="og:locale:alternate" content={alternate} />
		{/each}
	{/if}
</svelte:head>

<!-- Reading-progress hairline: informational wayfinding, hidden from assistive
     tech. Its width transition collapses to instant under reduced motion via the
     global motion reset. -->
<div class="c-progress" aria-hidden="true">
	<div class="c-progress__bar" style="width: {scrollProgress * 100}%"></div>
</div>

<AppShell>
	{@render children()}
</AppShell>
