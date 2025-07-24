import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('+page.svelte', () => {
	it('should have a Create section', () => {
		render(Page);

		const createHeading = screen.getByRole('heading', { name: 'Create', level: 2 });
		expect(createHeading).toBeInTheDocument();
	});

	it('should have a Create section after the GPG section', () => {
		render(Page);

		const gpgHeading = screen.getByRole('heading', { name: 'gpg', level: 2 });
		const createHeading = screen.getByRole('heading', { name: 'Create', level: 2 });

		expect(gpgHeading).toBeInTheDocument();
		expect(createHeading).toBeInTheDocument();

		const gpgParent = gpgHeading.closest('div');
		const createParent = createHeading.closest('div');

		expect(gpgParent?.nextElementSibling).toBe(createParent);
	});

	it('should have うぉぉぉ link in Create section', () => {
		render(Page);

		const link = screen.getByRole('link', { name: 'うぉぉぉ' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://ulo.ooo');
	});

	it('should have UniPostor link with PlayStore icon in Create section', () => {
		render(Page);

		const link = screen.getByRole('link', { name: /UniPostor/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(
			'href',
			'https://play.google.com/store/apps/details?id=cc.zin3.uni_poster'
		);

		// Check for PlayStore icon
		const playStoreIcon = link.querySelector('i.fa-google-play, i.fab.fa-google-play');
		expect(playStoreIcon).toBeTruthy();
	});

	it('should have PoE+++++ link in Create section', () => {
		render(Page);

		const link = screen.getByRole('link', { name: 'PoE+++++' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/create/poe_plus_plus_plus_plus_plus');
	});
});
