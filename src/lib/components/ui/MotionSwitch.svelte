<script lang="ts">
	import { onMount } from 'svelte';
	import { startLenis, stopLenis } from '$lib/utils/motion';

	// `data-motion` on <html> is the single runtime source of truth: the app.html
	// boot script seeds it from localStorage('memenow.motion') or the OS
	// prefers-reduced-motion setting before first paint. This control flips it,
	// persists the choice, and starts/stops Lenis to match. The matching CSS
	// (tokens.css, components.css, world-layer.css, layout.css) settles reveals,
	// parallax, and transitions under `:root[data-motion='reduced']`; cross-page
	// View Transitions are gated in +layout.svelte. Because the attribute wins
	// over the OS query, this toggle can both honor and override the OS setting.
	let reduced = $state(false);

	onMount(() => {
		const pref = document.documentElement.getAttribute('data-motion');
		reduced =
			pref === 'reduced'
				? true
				: pref === 'full'
					? false
					: window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	function toggle(): void {
		reduced = !reduced;
		const value = reduced ? 'reduced' : 'full';
		document.documentElement.setAttribute('data-motion', value);
		try {
			localStorage.setItem('memenow.motion', value);
		} catch {
			// Ignore storage failures (private mode, blocked storage).
		}
		// Lenis is the one motion that lives outside CSS, so drive it directly.
		// startLenis re-checks the gate (now 'full') before booting; both are
		// idempotent on the shared singleton.
		if (reduced) {
			stopLenis();
		} else {
			void startLenis();
		}
	}
</script>

<button
	type="button"
	class="c-icon-switch"
	aria-label={reduced ? 'Allow motion' : 'Reduce motion'}
	onclick={toggle}
>
	{#if reduced}
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
			<path d="M1 8h14" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" />
		</svg>
	{:else}
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
			<path
				d="M1 8h4l2-4 2 8 2-4h4"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>
