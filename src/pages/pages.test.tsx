import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test/renderWithProviders';
import { Home } from './Home';
import { Lt } from './Lt';
import { UniPostor } from './UniPostor';
import { Poe } from './Poe';

describe('Home ページ', () => {
	it('タイトルとプロフィール、5セクション見出しを表示する', async () => {
		renderWithProviders(<Home />);
		expect(await screen.findByText('zin3', { selector: 'h1' })).toBeInTheDocument();
		expect(screen.getByAltText('じんさんのアイコン')).toBeInTheDocument();
		for (const name of ['SNS', 'Blog', 'git', 'gpg', 'Create']) {
			expect(screen.getByRole('heading', { name, level: 2 })).toBeInTheDocument();
		}
		expect(document.title).toBe('zin3.cc');
	});

	it('UniPostor と PoE のカードが内部ルートを指す', () => {
		renderWithProviders(<Home />);
		expect(screen.getByRole('link', { name: /UniPostor/ })).toHaveAttribute(
			'href',
			'/create/unipostor'
		);
		expect(screen.getByRole('link', { name: /PoE\+\+\+\+\+/ })).toHaveAttribute(
			'href',
			'/create/poe_plus_plus_plus_plus_plus'
		);
	});
});

describe('Lt ページ', () => {
	it('登壇タイトルを表示する', () => {
		renderWithProviders(<Lt />);
		expect(screen.getByRole('heading', { name: 'LT実績', level: 1 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'バックアップとLTO' })).toBeInTheDocument();
	});

	it('トークをクリックすると Speaker Deck 埋め込みが表示される', async () => {
		const user = userEvent.setup();
		renderWithProviders(<Lt />);
		expect(screen.queryByTitle('バックアップとLTO')).not.toBeInTheDocument();
		await user.click(screen.getByRole('button', { name: /バックアップとLTO/ }));
		const iframe = await screen.findByTitle('バックアップとLTO');
		expect(iframe).toHaveAttribute(
			'src',
			'https://speakerdeck.com/player/79189818021747da97f324478a7450e7'
		);
	});
});

describe('UniPostor ページ', () => {
	it('Google Play リンクとホームに戻るリンクを持つ', () => {
		renderWithProviders(<UniPostor />);
		expect(screen.getByRole('heading', { name: 'UniPostor', level: 1 })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Google Play/ })).toHaveAttribute(
			'href',
			'https://play.google.com/store/apps/details?id=cc.zin3.uni_poster'
		);
		expect(screen.getByRole('link', { name: /ホームに戻る/ })).toHaveAttribute('href', '/');
	});
});

describe('Poe ページ', () => {
	it('画像・購入リンク・LT実績への内部リンクを持つ', () => {
		renderWithProviders(<Poe />);
		expect(screen.getByRole('heading', { name: 'PoE+++++', level: 1 })).toBeInTheDocument();
		expect(screen.getByAltText('PoE+++++ Tシャツ')).toBeInTheDocument();

		const booth = screen.getByRole('link', { name: 'BOOTH' });
		expect(booth).toHaveAttribute('href', 'https://zin3.booth.pm/');
		const suzuri = screen.getByRole('link', { name: 'SUZURI' });
		expect(suzuri).toHaveAttribute('href', 'https://suzuri.jp/zin3/products');

		const ltLink = screen.getByRole('link', { name: /LT実績/ });
		expect(ltLink).toHaveAttribute('href', '/lt');
	});
});
