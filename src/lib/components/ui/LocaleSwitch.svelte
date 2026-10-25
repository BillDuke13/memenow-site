<script lang="ts" module>
	export interface LocaleOption {
		locale: string;
		href: string;
		/** Endonym, e.g. 日本語. */
		name: string;
		hreflang: string;
		lang: string;
	}
</script>

<script lang="ts">
	/**
	 * Language menu as a native disclosure of plain links. `<details>` works
	 * without JavaScript and every option is an ordinary `<a>` in the SSR HTML,
	 * so crawlers discover each alternate. Script only adds polish: Escape and
	 * an outside click close the menu, and choosing a language closes it.
	 * Hrefs are computed by the parent from the current URL;
	 * `data-sveltekit-noscroll` keeps the reading position across the switch.
	 */
	let {
		current,
		currentLabel,
		label,
		options
	}: {
		/** Active locale code; marks its option with aria-current. */
		current: string;
		/** Compact label rendered on the trigger (e.g. EN, 日). */
		currentLabel: string;
		/** Accessible name of the trigger, in the active language. */
		label: string;
		options: LocaleOption[];
	} = $props();

	let details: HTMLDetailsElement | undefined = $state();
	let summary: HTMLElement | undefined = $state();

	function close(restoreFocus: boolean): void {
		if (!details?.open) return;
		details.open = false;
		if (restoreFocus) summary?.focus();
	}

	function onWindowKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && details?.open) {
			event.preventDefault();
			close(true);
		}
	}

	function onWindowPointerdown(event: PointerEvent): void {
		if (details?.open && event.target instanceof Node && !details.contains(event.target)) {
			close(false);
		}
	}
</script>

<svelte:window onkeydown={onWindowKeydown} onpointerdown={onWindowPointerdown} />

<details class="c-locale-menu" bind:this={details}>
	<summary class="c-icon-switch c-locale-menu__trigger" bind:this={summary} aria-label={label}>
		<span class="c-locale-menu__current" aria-hidden="true">{currentLabel}</span>
	</summary>
	<ul class="c-locale-menu__list">
		{#each options as option (option.locale)}
			<li>
				<a
					class="c-locale-menu__option"
					href={option.href}
					hreflang={option.hreflang}
					lang={option.lang}
					aria-current={option.locale === current ? 'true' : undefined}
					data-sveltekit-noscroll
					onclick={() => close(false)}
				>
					{option.name}
				</a>
			</li>
		{/each}
	</ul>
</details>

<style>
	.c-locale-menu {
		position: relative;
		display: inline-flex;
	}

	.c-locale-menu__trigger {
		list-style: none;
		user-select: none;
	}

	.c-locale-menu__trigger::-webkit-details-marker {
		display: none;
	}

	.c-locale-menu__current {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.04em;
		line-height: 1;
	}

	/* Opens upward: the dock sits at the bottom of the viewport. Same ink finish
	   as the dock; cut corners and hairlines per DESIGN.md, no animation. */
	.c-locale-menu__list {
		position: absolute;
		bottom: calc(100% + var(--spacing-4));
		right: calc(-1 * var(--spacing-2));
		z-index: var(--z-dropdown);
		min-width: 10rem;
		margin: 0;
		padding: var(--spacing-1);
		list-style: none;
		background: var(--surface-ink);
		border: 1px solid var(--border-dock);
		border-radius: 2px;
		box-shadow: var(--shadow-dock);
	}

	.c-locale-menu__option {
		display: flex;
		align-items: center;
		min-height: 44px;
		padding: 0 var(--spacing-4);
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: var(--type-small);
		color: var(--text-dock-muted);
		text-decoration: none;
		white-space: nowrap;
	}

	.c-locale-menu__option:hover {
		color: var(--text-dock-hover);
		background: var(--surface-dock-item-hover);
	}

	.c-locale-menu__option:focus-visible {
		outline: 2px solid var(--accent-on-dark);
		outline-offset: -2px;
	}

	.c-locale-menu__option[aria-current='true'] {
		color: var(--accent-on-dark);
		background: var(--surface-dock-active);
	}

	@media (forced-colors: active) {
		.c-locale-menu__list {
			background: Canvas;
			border-color: CanvasText;
		}
	}
</style>
