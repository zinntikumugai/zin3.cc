import { expect, test } from '@playwright/test';

test.describe('ページ遷移', () => {
	test('PoE+++++ページに遷移できる', async ({ page }) => {
		await page.goto('/');

		await page.getByRole('link', { name: 'PoE+++++' }).click();

		await expect(page).toHaveURL('/create/poe_plus_plus_plus_plus_plus');
		await expect(
			page.getByRole('heading', { name: 'Power over Ethernet +++++', level: 1 })
		).toBeVisible();
	});

	test('PoE+++++ページからトップへ戻れる', async ({ page }) => {
		await page.goto('/create/poe_plus_plus_plus_plus_plus');

		await page.getByRole('link', { name: 'トップへ戻る' }).click();

		await expect(page).toHaveURL('/');
		await expect(page.getByRole('heading', { name: 'zin3', level: 1 })).toBeVisible();
	});
});
