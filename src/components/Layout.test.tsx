import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import { renderWithProviders } from '../test/renderWithProviders';
import { Layout } from './Layout';

function renderLayout(route: string) {
	return renderWithProviders(
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<div>home-content</div>} />
				<Route path="/lt" element={<div>lt-content</div>} />
			</Route>
		</Routes>,
		{ route }
	);
}

describe('Layout', () => {
	it('ロゴ・ナビ・フッターと子ルートを表示する', () => {
		renderLayout('/');
		expect(screen.getByRole('link', { name: /zin3\.cc/ })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'ホーム' })).toHaveAttribute('href', '/');
		expect(screen.getByRole('link', { name: 'LT実績' })).toHaveAttribute('href', '/lt');
		expect(screen.getByText('home-content')).toBeInTheDocument();
		expect(screen.getByText('©zin3 2024')).toBeInTheDocument();
	});

	it('現在ページのナビを aria-current=page でハイライトする', () => {
		renderLayout('/lt');
		expect(screen.getByRole('link', { name: 'LT実績' })).toHaveAttribute('aria-current', 'page');
		expect(screen.getByRole('link', { name: 'ホーム' })).not.toHaveAttribute('aria-current');
	});

	it('テーマ切替ボタンでラベルが循環する', async () => {
		const user = userEvent.setup();
		renderLayout('/');
		const btn = screen.getByRole('button', { name: 'テーマ: 自動' });
		await user.click(btn);
		expect(screen.getByRole('button', { name: 'テーマ: ライト' })).toBeInTheDocument();
	});
});
