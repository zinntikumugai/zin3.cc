import { expect, test } from '@playwright/test';

test.describe('リンク検証', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test.describe('SNS セクション', () => {
		test('X リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /X/ });
			await expect(link).toHaveAttribute('href', 'https://twitter.com/uesitananame55');
		});

		test('Bluesky リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /Bluesky/ });
			await expect(link).toHaveAttribute('href', 'https://bsky.app/profile/zin3.cc');
		});

		test('Misskey.io リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /Misskey/ });
			await expect(link).toHaveAttribute('href', 'https://misskey.io/@z3');
		});

		test('Discord リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /Discord/ });
			await expect(link).toHaveAttribute('href', 'https://discord.com/users/246834514146361345');
		});

		test('Steam リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /Steam/ });
			await expect(link).toHaveAttribute('href', 'https://steamcommunity.com/id/zinntikumugai/');
		});

		test('VRChat リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /VRChat/ });
			await expect(link).toHaveAttribute(
				'href',
				'https://vrchat.com/home/user/usr_5a64db9b-e233-4280-804e-0e9c9df6f04e'
			);
		});

		test('nostr リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /nostr/ });
			await expect(link).toHaveAttribute(
				'href',
				'https://iris.to/npub1zln33396vq76an8ce075w8fqxqjhtgqfwsm6fnyt9s7gmzysw9qqhdpcgc'
			);
		});
	});

	test.describe('Blog セクション', () => {
		test('Blog リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /Blog/ });
			await expect(link).toHaveAttribute('href', 'https://www.zinntikumugai.com/');
		});

		test('sublog リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /sublog/ });
			await expect(link).toHaveAttribute('href', 'https://sublog.zinntikumugai.com/');
		});
	});

	test.describe('Git セクション', () => {
		test('GitHub リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /GitHub/ });
			await expect(link).toHaveAttribute('href', 'https://github.com/zinntikumugai/');
		});

		test('GitLab リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /GitLab/ });
			await expect(link).toHaveAttribute('href', 'https://gitlab.com/zinntikumugai');
		});
	});

	test.describe('GPG セクション', () => {
		test('keyoxide リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /keyoxide/ });
			await expect(link).toHaveAttribute(
				'href',
				'https://keyoxide.org/hkp/961F516ECD5646B15936218CEC5C53A3AB6800E5'
			);
		});
	});

	test.describe('Create セクション', () => {
		test('うぉぉぉ リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: 'うぉぉぉ' });
			await expect(link).toHaveAttribute('href', 'https://ulo.ooo');
		});

		test('UniPostor リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: /UniPostor/ });
			await expect(link).toHaveAttribute(
				'href',
				'https://play.google.com/store/apps/details?id=cc.zin3.uni_poster'
			);
		});

		test('PoE+++++ リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: 'PoE+++++' });
			await expect(link).toHaveAttribute('href', '/create/poe_plus_plus_plus_plus_plus');
		});

		test('ドメイン一覧 リンクが正しいhrefを持つ', async ({ page }) => {
			const link = page.getByRole('link', { name: 'ドメイン一覧' });
			await expect(link).toHaveAttribute('href', 'https://domains.zin3.cc/');
		});
	});
});
