import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('PoE+++++ page', () => {
	it('should have the correct title', () => {
		render(Page);

		const title = screen.getByRole('heading', { name: 'Power over Ethernet +++++', level: 1 });
		expect(title).toBeInTheDocument();
	});

	it('should have description text', () => {
		render(Page);

		expect(screen.getByText(/LANケーブルを使って電力を供給するPoE/)).toBeInTheDocument();
		expect(
			screen.getByText(/でも今の時代その程度で足りますか？足りませんよね/)
		).toBeInTheDocument();
		expect(screen.getByText(/ということで100vで流せるようにしておきました/)).toBeInTheDocument();
		expect(screen.getByText(/\(PoEで100vは実在しません\)/)).toBeInTheDocument();
	});

	it('should have Links heading', () => {
		render(Page);

		const linksHeading = screen.getByRole('heading', { name: 'Links', level: 2 });
		expect(linksHeading).toBeInTheDocument();
	});

	it('should have image with correct src', () => {
		render(Page);

		const image = screen.getByAltText('画像');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			'https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096'
		);
	});

	it('should have X (Twitter) embedded tweet', () => {
		render(Page);

		const tweetBlockquote = document.querySelector('blockquote.twitter-tweet');
		expect(tweetBlockquote).toBeTruthy();
		
		// Check if tweet content exists within the blockquote
		const tweetContent = tweetBlockquote?.querySelector('p');
		expect(tweetContent?.textContent).toContain('Tシャツﾄﾄﾞｲﾀ');
	});

	it('should have purchase section with icons', () => {
		render(Page);

		// Check for purchase text
		expect(screen.getByText('購入はこちらからどうぞ')).toBeInTheDocument();

		// Check for Booth icon link
		const boothLink = screen.getByRole('link', { name: 'Booth' });
		expect(boothLink).toBeInTheDocument();
		expect(boothLink).toHaveAttribute('href', 'https://zin3.booth.pm/');
		
		const boothImg = boothLink.querySelector('img');
		expect(boothImg).toHaveAttribute('src', './icons/booth-logo.png');
		expect(boothImg).toHaveAttribute('alt', 'Booth');

		// Check for SUZURI icon link
		const suzuriLink = screen.getByRole('link', { name: 'SUZURI' });
		expect(suzuriLink).toBeInTheDocument();
		expect(suzuriLink).toHaveAttribute('href', 'https://suzuri.jp/zin3/products');
		
		const suzuriImg = suzuriLink.querySelector('img');
		expect(suzuriImg).toHaveAttribute('src', './icons/suzuri-logo.png');
		expect(suzuriImg).toHaveAttribute('alt', 'SUZURI');
	});

	it('should have back to top link', () => {
		render(Page);

		const backLink = screen.getByRole('link', { name: 'トップへ戻る' });
		expect(backLink).toBeInTheDocument();
		expect(backLink).toHaveAttribute('href', '/');
	});
});
