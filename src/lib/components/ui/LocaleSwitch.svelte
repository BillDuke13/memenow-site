<script lang="ts">
	/**
	 * Language switcher as a plain link: the target href is computed by the
	 * parent (FloatingDock) from the current URL, so SSR renders the correct
	 * destination with zero client state, crawlers can discover the other
	 * locale, and `data-sveltekit-noscroll` keeps the reader's scroll position
	 * across the switch (same content, other language).
	 */
	let { href, label, text }: { href: string; label: string; text: string } = $props();
</script>

<a
	class="c-icon-switch c-locale-switch"
	{href}
	aria-label={label}
	title={label}
	data-sveltekit-noscroll
>
	<span class="c-locale-switch__text">{text}</span>
</a>

<style>
	.c-locale-switch {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}

	.c-locale-switch__text {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.04em;
		line-height: 1;
		user-select: none;
	}
</style>
