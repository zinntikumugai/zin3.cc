import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/renderWithProviders';
import { LinkCard } from './LinkCard';
import type { LinkItem } from '../data/sections';

const external: LinkItem = {
	name: 'X',
	handle: '@uesitananame55',
	href: 'https://twitter.com/uesitananame55',
	color: '#0f1419',
	letter: 'X',
	icon: 'x'
};

const internal: LinkItem = {
	name: 'UniPostor',
	handle: 'iOS / Android アプリ',
	to: '/create/unipostor',
	color: '#3ab55d',
	letter: 'U',
	icon: 'googleplay'
};

const letterOnly: LinkItem = {
	name: 'nostr',
	handle: 'zin3@zin3.cc',
	href: 'https://iris.to/npub1zln333',
	color: '#9e3beb',
	letter: 'N'
};

describe('LinkCard', () => {
	it('外部リンクは href と target=_blank を持つ', () => {
		renderWithProviders(<LinkCard item={external} />);
		const link = screen.getByRole('link', { name: /X/ });
		expect(link).toHaveAttribute('href', 'https://twitter.com/uesitananame55');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
	});

	it('内部項目はアプリ内ルートへのリンクになる', () => {
		renderWithProviders(<LinkCard item={internal} />);
		const link = screen.getByRole('link', { name: /UniPostor/ });
		expect(link).toHaveAttribute('href', '/create/unipostor');
		expect(link).not.toHaveAttribute('target');
	});

	it('名前とハンドルを表示する', () => {
		renderWithProviders(<LinkCard item={external} />);
		expect(screen.getByText('X')).toBeInTheDocument();
		expect(screen.getByText('@uesitananame55')).toBeInTheDocument();
	});

	it('アイコンが無い項目は頭文字を表示する', () => {
		renderWithProviders(<LinkCard item={letterOnly} />);
		expect(screen.getByText('N')).toBeInTheDocument();
	});
});
