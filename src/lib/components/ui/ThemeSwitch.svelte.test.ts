import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ThemeSwitch from './ThemeSwitch.svelte';

const STORAGE_KEY = 'memenow.theme';

// Mounted without a layout ancestor, useLocale() falls back to DEFAULT_LOCALE
// — so the aria-labels asserted below are the Chinese ones.
describe('ThemeSwitch', () => {
	beforeEach(() => {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.removeItem(STORAGE_KEY);
	});

	afterEach(() => {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.removeItem(STORAGE_KEY);
	});

	it('mirrors the document theme on mount', async () => {
		document.documentElement.setAttribute('data-theme', 'dark');
		const screen = await render(ThemeSwitch);
		await expect.element(screen.getByLabelText('切换至明亮主题')).toBeInTheDocument();
	});

	it('toggles to dark on click and persists to localStorage', async () => {
		const screen = await render(ThemeSwitch);
		const button = screen.getByLabelText('切换至暗色主题');
		await button.click();
		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
		await expect.element(screen.getByLabelText('切换至明亮主题')).toBeInTheDocument();
	});

	it('toggles back to light on a second click', async () => {
		const screen = await render(ThemeSwitch);
		await screen.getByLabelText('切换至暗色主题').click();
		await screen.getByLabelText('切换至明亮主题').click();
		expect(document.documentElement.getAttribute('data-theme')).toBe('light');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
	});

	it('still flips the document theme when localStorage.setItem throws', async () => {
		// Simulate Safari private mode / quota-exceeded: the component should
		// swallow the error and keep the in-page theme update intact.
		const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
			throw new DOMException('Quota exceeded', 'QuotaExceededError');
		});
		try {
			const screen = await render(ThemeSwitch);
			await screen.getByLabelText('切换至暗色主题').click();
			expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, 'dark');
			expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
			await expect.element(screen.getByLabelText('切换至明亮主题')).toBeInTheDocument();
		} finally {
			setItem.mockRestore();
		}
	});
});
