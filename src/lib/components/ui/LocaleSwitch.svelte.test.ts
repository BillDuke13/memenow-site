import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LocaleSwitch from './LocaleSwitch.svelte';

// LocaleSwitch is a dumb disclosure of links — options arrive as props from
// FloatingDock, so it mounts without any routing or i18n context.
const options = [
	{ locale: 'zh', href: '/zh/products', name: '简体中文', hreflang: 'zh-Hans', lang: 'zh' },
	{
		locale: 'zh-TW',
		href: '/zh-TW/products',
		name: '繁體中文',
		hreflang: 'zh-Hant',
		lang: 'zh-TW'
	},
	{ locale: 'en', href: '/en/products', name: 'English', hreflang: 'en', lang: 'en' },
	{ locale: 'ja', href: '/ja/products', name: '日本語', hreflang: 'ja', lang: 'ja' },
	{ locale: 'ko', href: '/ko/products', name: '한국어', hreflang: 'ko', lang: 'ko' },
	{ locale: 'es', href: '/es/products', name: 'Español', hreflang: 'es', lang: 'es' },
	{ locale: 'fr', href: '/fr/products', name: 'Français', hreflang: 'fr', lang: 'fr' }
];

async function mount() {
	const screen = await render(LocaleSwitch, {
		props: { current: 'en', currentLabel: 'EN', label: 'Change language', options }
	});
	const details = (screen.container as HTMLElement).querySelector('details');
	if (!details) throw new Error('details not rendered');
	return { screen, details };
}

describe('LocaleSwitch', () => {
	it('renders one plain link per locale with hreflang and lang', async () => {
		const { details } = await mount();
		const links = [...details.querySelectorAll('a')];
		expect(links.map((a) => a.getAttribute('href'))).toEqual(options.map((o) => o.href));
		const ja = links.find((a) => a.getAttribute('hreflang') === 'ja');
		expect(ja?.getAttribute('lang')).toBe('ja');
		expect(ja?.textContent?.trim()).toBe('日本語');
	});

	it('marks only the active locale as current', async () => {
		const { details } = await mount();
		const current = [...details.querySelectorAll('a[aria-current="true"]')];
		expect(current).toHaveLength(1);
		expect(current[0].getAttribute('href')).toBe('/en/products');
	});

	it('keeps scroll position across the language switch', async () => {
		const { details } = await mount();
		for (const link of details.querySelectorAll('a')) {
			expect(link.hasAttribute('data-sveltekit-noscroll')).toBe(true);
		}
	});

	it('opens from the trigger and closes on Escape', async () => {
		const { screen, details } = await mount();
		const trigger = screen.getByLabelText('Change language');
		await trigger.click();
		expect(details.open).toBe(true);
		details.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		expect(details.open).toBe(false);
	});
});
