import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('PoE+++++ page', () => {
	const mockData = {
		meta: {
			title: 'Power over Ethernet +++++',
			description: 'LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？ということで100vで流せるようにしておきました。',
			ogImage: 'https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096',
			url: '/create/poe_plus_plus_plus_plus_plus'
		}
	};

	it('should have the correct title', () => {
		render(Page, { data: mockData });

		const title = screen.getByRole('heading', { name: 'Power over Ethernet +++++', level: 1 });
		expect(title).toBeInTheDocument();
	});

	it('should have description text', () => {
		render(Page, { data: mockData });

		expect(screen.getByText(/LANケーブルを使って電力を供給するPoE/)).toBeInTheDocument();
		expect(
			screen.getByText(/でも今の時代その程度で足りますか？足りませんよね/)
		).toBeInTheDocument();
		expect(screen.getByText(/ということで100vで流せるようにしておきました/)).toBeInTheDocument();
		expect(screen.getByText(/\(PoEで100vは実在しません\)/)).toBeInTheDocument();
	});

	it('should have Links heading', () => {
		render(Page, { data: mockData });

		const linksHeading = screen.getByRole('heading', { name: 'Links', level: 2 });
		expect(linksHeading).toBeInTheDocument();
	});

	it('should have image with correct src', () => {
		render(Page, { data: mockData });

		const image = screen.getByAltText('画像');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			'https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096'
		);
	});

	it('should have X (Twitter) embedded tweet', () => {
		render(Page, { data: mockData });

		const tweetBlockquote = document.querySelector('blockquote.twitter-tweet');
		expect(tweetBlockquote).toBeTruthy();
		
		// Check if tweet content exists within the blockquote
		const tweetContent = tweetBlockquote?.querySelector('p');
		expect(tweetContent?.textContent).toContain('Tシャツﾄﾄﾞｲﾀ');
	});

	it('should have purchase section with icons', () => {
		render(Page, { data: mockData });

		// Check for purchase text
		expect(screen.getByText('購入はこちらからどうぞ')).toBeInTheDocument();

		// Check for Booth icon link
		const boothLink = screen.getByRole('link', { name: 'Booth' });
		expect(boothLink).toBeInTheDocument();
		expect(boothLink).toHaveAttribute('href', 'https://zin3.booth.pm/');
		
		const boothImg = boothLink.querySelector('img');
		expect(boothImg).toHaveAttribute('src', '/icons/booth-logo.png');
		expect(boothImg).toHaveAttribute('alt', 'Booth');

		// Check for SUZURI icon link
		const suzuriLink = screen.getByRole('link', { name: 'SUZURI' });
		expect(suzuriLink).toBeInTheDocument();
		expect(suzuriLink).toHaveAttribute('href', 'https://suzuri.jp/zin3/products');
		
		const suzuriImg = suzuriLink.querySelector('img');
		expect(suzuriImg).toHaveAttribute('src', '/icons/suzuri-logo.png');
		expect(suzuriImg).toHaveAttribute('alt', 'SUZURI');
	});

	it('should have back to top link', () => {
		render(Page, { data: mockData });

		const backLink = screen.getByRole('link', { name: 'トップへ戻る' });
		expect(backLink).toBeInTheDocument();
		expect(backLink).toHaveAttribute('href', '/');
	});

	it('should have OGP meta tags', () => {
		render(Page, { data: mockData });

		// OGPメタタグは svelte:head内にあるため、document.headを確認
		const metaTags = {
			title: document.querySelector('title')?.textContent,
			description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
			ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
			ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content'),
			ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
			ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content'),
			ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content'),
			twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
			twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'),
			twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content'),
			twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')
		};

		expect(metaTags.title).toBe('Power over Ethernet +++++');
		expect(metaTags.description).toBe('LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？ということで100vで流せるようにしておきました。');
		expect(metaTags.ogTitle).toBe('Power over Ethernet +++++');
		expect(metaTags.ogDescription).toBe('LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？ということで100vで流せるようにしておきました。');
		expect(metaTags.ogImage).toBe('https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096');
		expect(metaTags.ogUrl).toBe('https://zin3.cc/create/poe_plus_plus_plus_plus_plus');
		expect(metaTags.ogType).toBe('website');
		expect(metaTags.twitterCard).toBe('summary_large_image');
		expect(metaTags.twitterTitle).toBe('Power over Ethernet +++++');
		expect(metaTags.twitterDescription).toBe('LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？ということで100vで流せるようにしておきました。');
		expect(metaTags.twitterImage).toBe('https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096');
	});
});
