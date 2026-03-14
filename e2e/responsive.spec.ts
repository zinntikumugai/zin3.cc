import { expect, test } from '@playwright/test';

test.describe('レスポンシブレイアウト', () => {
	test.describe('モバイル (375x667)', () => {
		test.use({ viewport: { width: 375, height: 667 } });

		test('全セクションが表示される', async ({ page }) => {
			await page.goto('/');

			await expect(page.getByRole('heading', { name: 'SNS', level: 2 })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'Blog', level: 2 })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'git', level: 2 })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'gpg', level: 2 })).toBeVisible();
			await expect(page.getByRole('heading', { name: 'Create', level: 2 })).toBeVisible();
		});

		test('SNSグリッドが1列で表示される', async ({ page }) => {
			await page.goto('/');

			const snsGrid = page.locator('.grid.md\\:grid-cols-3').first();
			const columns = await snsGrid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
			// 1列の場合、1つの値のみ
			expect(columns.split(' ').length).toBe(1);
		});
	});

	test.describe('デスクトップ (1280x720)', () => {
		test.use({ viewport: { width: 1280, height: 720 } });

		test('SNSグリッドが3列で表示される', async ({ page }) => {
			await page.goto('/');

			const snsGrid = page.locator('.grid.md\\:grid-cols-3').first();
			const columns = await snsGrid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
			expect(columns.split(' ').length).toBe(3);
		});

		test('Blog/Gitグリッドが2列で表示される', async ({ page }) => {
			await page.goto('/');

			const blogGrid = page.locator('.grid.md\\:grid-cols-2').first();
			const columns = await blogGrid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
			expect(columns.split(' ').length).toBe(2);
		});
	});
});
