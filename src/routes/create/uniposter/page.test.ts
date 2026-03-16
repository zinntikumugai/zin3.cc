import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('Uni Poster page', () => {
	const mockData = {
		meta: {
			title: 'Uni Poster',
			description: '複数のSNSに同時投稿できるユーティリティアプリ',
			ogImage: '/images/uniposter-icon.png',
			url: '/create/uniposter'
		}
	};

	it('should have the correct title', () => {
		render(Page, { data: mockData });

		const title = screen.getByRole('heading', { name: 'Uni Poster', level: 1 });
		expect(title).toBeInTheDocument();
	});

	it('should have description text', () => {
		render(Page, { data: mockData });

		expect(screen.getByText(/複数のアプリを左右するのは不便/)).toBeInTheDocument();
		expect(screen.getByText(/同時投稿をワンステップで行えます/)).toBeInTheDocument();
	});

	it('should have app icon image', () => {
		render(Page, { data: mockData });

		const image = screen.getByAltText('Uni Poster');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', '/images/uniposter-icon.png');
	});

	it('should have Google Play link', () => {
		render(Page, { data: mockData });

		const link = screen.getByRole('link', { name: /Google Play/ });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(
			'href',
			'https://play.google.com/store/apps/details?id=cc.zin3.uni_poster'
		);
	});

	it('should have App Store link', () => {
		render(Page, { data: mockData });

		const link = screen.getByRole('link', { name: /App Store/ });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://apps.apple.com/jp/app/uni-poster/id6747512031');
	});

	it('should have back to top link', () => {
		render(Page, { data: mockData });

		const backLink = screen.getByRole('link', { name: 'トップへ戻る' });
		expect(backLink).toBeInTheDocument();
		expect(backLink).toHaveAttribute('href', '/');
	});

	it('should have OGP meta tags', () => {
		render(Page, { data: mockData });

		const metaTags = {
			title: document.querySelector('title')?.textContent,
			description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
			ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
			ogDescription: document
				.querySelector('meta[property="og:description"]')
				?.getAttribute('content'),
			ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
			ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content'),
			ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content'),
			twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
			twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'),
			twitterDescription: document
				.querySelector('meta[name="twitter:description"]')
				?.getAttribute('content'),
			twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')
		};

		expect(metaTags.title).toBe('Uni Poster');
		expect(metaTags.description).toBe('複数のSNSに同時投稿できるユーティリティアプリ');
		expect(metaTags.ogTitle).toBe('Uni Poster');
		expect(metaTags.ogDescription).toBe('複数のSNSに同時投稿できるユーティリティアプリ');
		expect(metaTags.ogImage).toBe('/images/uniposter-icon.png');
		expect(metaTags.ogUrl).toBe('https://zin3.cc/create/uniposter');
		expect(metaTags.ogType).toBe('website');
		expect(metaTags.twitterCard).toBe('summary_large_image');
		expect(metaTags.twitterTitle).toBe('Uni Poster');
		expect(metaTags.twitterDescription).toBe('複数のSNSに同時投稿できるユーティリティアプリ');
		expect(metaTags.twitterImage).toBe('/images/uniposter-icon.png');
	});
});
