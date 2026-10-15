<script lang="ts">
	import { page } from '$app/state';
	import { getHomeLink, getPrimaryNav, type NavLink } from '$lib/data/navigation';
	import { messages, switchLocalePath, useLocale, type Locale } from '$lib/i18n';
	import ThemeSwitch from '$lib/components/ui/ThemeSwitch.svelte';
	import MotionSwitch from '$lib/components/ui/MotionSwitch.svelte';
	import LocaleSwitch from '$lib/components/ui/LocaleSwitch.svelte';

	const locale = useLocale();
	const current = $derived(locale());
	const home = $derived(getHomeLink(current));
	const nav = $derived(getPrimaryNav(current));
	const common = $derived(messages[current].common);

	const switchTarget: Locale = $derived(current === 'zh' ? 'en' : 'zh');
	const switchHref = $derived(switchLocalePath(page.url.pathname, page.url.search, switchTarget));
	const switchLabel = $derived(
		switchTarget === 'en' ? common.locale.switchToEnglish : common.locale.switchToChinese
	);

	function matches(path: string, pathname: string): boolean {
		// The locale root is the home link — exact match only, or it would be
		// "current" on every page of that locale.
		if (path === home.href) return pathname === path;
		return pathname === path || pathname.startsWith(`${path}/`);
	}

	function isCurrent(link: NavLink): boolean {
		const candidates = link.match ?? [link.href];
		return candidates.some((p) => matches(p, page.url.pathname));
	}
</script>

<nav class="c-dock" aria-label={common.navAriaLabel}>
	<a class="c-dock__brand" href={home.href} aria-label={common.brandHomeAriaLabel}>
		<picture>
			<source type="image/avif" srcset="/brand/mark.avif 1x, /brand/mark@2x.avif 2x" />
			<source type="image/webp" srcset="/brand/mark.webp 1x, /brand/mark@2x.webp 2x" />
			<img
				src="/brand/mark.png"
				srcset="/brand/mark@2x.png 2x"
				alt=""
				width="24"
				height="24"
				loading="eager"
				decoding="async"
			/>
		</picture>
	</a>

	<span class="c-dock__divider" aria-hidden="true"></span>

	<a class="c-dock__item" href={home.href} aria-current={isCurrent(home) ? 'page' : undefined}>
		{home.label}
	</a>
	{#each nav as link (link.href)}
		<a class="c-dock__item" href={link.href} aria-current={isCurrent(link) ? 'page' : undefined}>
			{link.label}
		</a>
	{/each}

	<span class="c-dock__divider" aria-hidden="true"></span>

	<LocaleSwitch href={switchHref} label={switchLabel} text={switchTarget === 'en' ? 'EN' : '中'} />
	<ThemeSwitch />
	<MotionSwitch />
</nav>
