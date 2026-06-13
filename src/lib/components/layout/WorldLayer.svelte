<!--
	Persistent atmosphere behind every route: the per-route fog (scene.css, via
	--scene-fog-active), a faint Tai Chi geometry watermark, and a static film
	grain that gives flat surfaces a printed tooth. Decorative and
	non-interactive — hidden from assistive tech. Mounted once in AppShell so the
	whole site reads as one continuous world; the root layout drives the Tai
	Chi's parallax drift through the --world-scroll custom property (reduced
	motion zeroes it). The grain is static and sits below all text.
-->
<div class="world-layer" aria-hidden="true">
	<div class="world-layer__taichi">
		<svg
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			stroke-width="0.5"
			focusable="false"
		>
			<circle cx="50" cy="50" r="48" />
			<path d="M50 2 A24 24 0 0 1 50 50 A24 24 0 0 0 50 98" />
			<circle cx="50" cy="26" r="4.5" />
			<circle cx="50" cy="74" r="4.5" />
		</svg>
	</div>
	<div class="world-layer__grain"></div>
</div>
