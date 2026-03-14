import { expect, test } from '@playwright/test';

test.describe('トップページ', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('ページが表示される', async ({ page }) => {
		const heading = page.getByRole('heading', { name: 'zin3', level: 1 });
		await expect(heading).toBeVisible();
	});

	test('じんさんテキストが表示される', async ({ page }) => {
		await expect(page.getByText('じんさん', { exact: true })).toBeVisible();
	});

	test('フッターにコピーライトが表示される', async ({ page }) => {
		await expect(page.getByText('©zin3 2024')).toBeVisible();
	});
});
