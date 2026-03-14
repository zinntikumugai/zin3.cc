import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const projectRoot = resolve(import.meta.dirname, '..');

describe('Cloudflare Pages v3 設定', () => {
	describe('svelte.config.js', () => {
		const configContent = readFileSync(resolve(projectRoot, 'svelte.config.js'), 'utf-8');

		it('adapter-cloudflareをimportしていること', () => {
			expect(configContent).toContain("from '@sveltejs/adapter-cloudflare'");
		});

		it('adapter-autoをimportしていないこと', () => {
			expect(configContent).not.toContain("from '@sveltejs/adapter-auto'");
		});
	});

	describe('wrangler.toml', () => {
		const wranglerContent = readFileSync(resolve(projectRoot, 'wrangler.toml'), 'utf-8');

		it('compatibility_dateが設定されていること', () => {
			expect(wranglerContent).toMatch(/compatibility_date\s*=\s*"\d{4}-\d{2}-\d{2}"/);
		});

		it('nodejs_alsフラグが設定されていること', () => {
			expect(wranglerContent).toContain('nodejs_als');
		});

		it('assetsセクションが設定されていること', () => {
			expect(wranglerContent).toContain('[assets]');
			expect(wranglerContent).toContain('.svelte-kit/cloudflare');
		});

		it('mainエントリーポイントが設定されていること', () => {
			expect(wranglerContent).toMatch(/main\s*=\s*".svelte-kit\/cloudflare\/_worker\.js"/);
		});
	});

	describe('package.json', () => {
		const packageJson = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf-8'));

		it('adapter-cloudflareがdevDependenciesに含まれること', () => {
			expect(packageJson.devDependencies).toHaveProperty('@sveltejs/adapter-cloudflare');
		});

		it('adapter-cloudflareがv7以上であること', () => {
			const version = packageJson.devDependencies['@sveltejs/adapter-cloudflare'];
			expect(version).toMatch(/\^7/);
		});

		it('adapter-autoがdevDependenciesに含まれないこと', () => {
			expect(packageJson.devDependencies).not.toHaveProperty('@sveltejs/adapter-auto');
		});
	});
});
