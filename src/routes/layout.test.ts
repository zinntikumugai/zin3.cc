import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';

let mockGtmId = 'GTM-TESTID';

vi.mock('$env/static/public', () => ({
	get PUBLIC_GTM_ID() {
		return mockGtmId;
	}
}));

import Wrapper from '../test/LayoutTestWrapper.svelte';

describe('+layout.svelte', () => {
	afterEach(() => {
		cleanup();
	});

	describe('GTM有効時 (PUBLIC_GTM_ID設定あり)', () => {
		it('should have noscript element in head for GTM fallback', () => {
			mockGtmId = 'GTM-TESTID';
			const dummyScript = document.createElement('script');
			document.head.appendChild(dummyScript);
			render(Wrapper);

			// svelte:head内にnoscript要素が存在すること
			// jsdomではnoscript内のHTMLがパースされないため、要素の存在のみ確認
			const noscript = document.head.querySelector('noscript');
			expect(noscript).toBeTruthy();
		});

		it('should inject GTM script on mount', async () => {
			mockGtmId = 'GTM-TESTID';
			const dummyScript = document.createElement('script');
			document.head.appendChild(dummyScript);
			render(Wrapper);

			// tick待ちでonMountの実行を確認
			await new Promise((resolve) => setTimeout(resolve, 0));

			const scripts = document.querySelectorAll('script');
			const gtmScript = Array.from(scripts).find((s) =>
				s.src.includes('googletagmanager.com/gtm.js')
			);
			expect(gtmScript).toBeTruthy();
			expect(gtmScript?.src).toContain('id=GTM-TESTID');
		});
	});

	describe('GTM無効時 (PUBLIC_GTM_ID未設定)', () => {
		it('should not have noscript iframe', () => {
			mockGtmId = '';
			render(Wrapper);

			const iframe = document.querySelector('iframe[title="Google Tag Manager"]');
			expect(iframe).toBeNull();
		});
	});
});
