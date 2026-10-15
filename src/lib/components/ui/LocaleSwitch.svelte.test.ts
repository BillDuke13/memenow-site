import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LocaleSwitch from './LocaleSwitch.svelte';

// LocaleSwitch is a dumb link — href/label/text arrive as props from
// FloatingDock, so it mounts without any routing or locale context.
describe('LocaleSwitch', () => {
	it('renders a plain link to the other locale', async () => {
		const screen = await render(LocaleSwitch, {
			href: '/en/products',
			label: 'Switch to English',
			text: 'EN'
		});
		const link = screen.getByRole('link', { name: 'Switch to English' });
		await expect.element(link).toHaveAttribute('href', '/en/products');
	});

	it('keeps scroll position across the language switch', async () => {
		const screen = await render(LocaleSwitch, {
			href: '/zh/products',
			label: '切换至中文',
			text: '中'
		});
		const link = screen.getByRole('link', { name: '切换至中文' });
		await expect.element(link).toHaveAttribute('data-sveltekit-noscroll', '');
	});
});
