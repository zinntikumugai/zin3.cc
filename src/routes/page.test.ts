import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('+page.svelte', () => {
	describe('Header section', () => {
		it('should display じんさん text', () => {
			render(Page);
			expect(screen.getByText('じんさん')).toBeInTheDocument();
		});

		it('should display zin3 as h1 heading', () => {
			render(Page);
			const heading = screen.getByRole('heading', { name: 'zin3', level: 1 });
			expect(heading).toBeInTheDocument();
		});
	});

	describe('SNS section', () => {
		it('should have SNS heading', () => {
			render(Page);
			const heading = screen.getByRole('heading', { name: 'SNS', level: 2 });
			expect(heading).toBeInTheDocument();
		});

		it('should have X link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /X/ });
			expect(link).toHaveAttribute('href', 'https://twitter.com/uesitananame55');
		});

		it('should have Bluesky link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Bluesky/ });
			expect(link).toHaveAttribute('href', 'https://bsky.app/profile/zin3.cc');
		});

		it('should have Misskey.io link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Misskey/ });
			expect(link).toHaveAttribute('href', 'https://misskey.io/@z3');
		});

		it('should have Discord link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Discord/ });
			expect(link).toHaveAttribute('href', 'https://discord.com/users/246834514146361345');
		});

		it('should have Steam link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Steam/ });
			expect(link).toHaveAttribute('href', 'https://steamcommunity.com/id/zinntikumugai/');
		});

		it('should have VRChat link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /VRChat/ });
			expect(link).toHaveAttribute(
				'href',
				'https://vrchat.com/home/user/usr_5a64db9b-e233-4280-804e-0e9c9df6f04e'
			);
		});

		it('should have nostr link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /nostr/ });
			expect(link).toHaveAttribute(
				'href',
				'https://iris.to/npub1zln33396vq76an8ce075w8fqxqjhtgqfwsm6fnyt9s7gmzysw9qqhdpcgc'
			);
		});
	});

	describe('Blog section', () => {
		it('should have Blog heading', () => {
			render(Page);
			const heading = screen.getByRole('heading', { name: 'Blog', level: 2 });
			expect(heading).toBeInTheDocument();
		});

		it('should have Blog link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Blog/ });
			expect(link).toHaveAttribute('href', 'https://www.zinntikumugai.com/');
		});

		it('should have sublog link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /sublog/ });
			expect(link).toHaveAttribute('href', 'https://sublog.zinntikumugai.com/');
		});
	});

	describe('Git section', () => {
		it('should have git heading', () => {
			render(Page);
			const heading = screen.getByRole('heading', { name: 'git', level: 2 });
			expect(heading).toBeInTheDocument();
		});

		it('should have GitHub link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /GitHub/ });
			expect(link).toHaveAttribute('href', 'https://github.com/zinntikumugai/');
		});

		it('should have GitLab link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /GitLab/ });
			expect(link).toHaveAttribute('href', 'https://gitlab.com/zinntikumugai');
		});
	});

	describe('GPG section', () => {
		it('should have gpg heading', () => {
			render(Page);
			const heading = screen.getByRole('heading', { name: 'gpg', level: 2 });
			expect(heading).toBeInTheDocument();
		});

		it('should have keyoxide link with correct href', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /keyoxide/ });
			expect(link).toHaveAttribute(
				'href',
				'https://keyoxide.org/hkp/961F516ECD5646B15936218CEC5C53A3AB6800E5'
			);
		});
	});

	describe('Create section', () => {
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

		it('should have Uni Poster link to internal page in Create section', () => {
			render(Page);
			const link = screen.getByRole('link', { name: /Uni Poster/i });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/create/uniposter');
		});

		it('should have PoE+++++ link in Create section', () => {
			render(Page);
			const link = screen.getByRole('link', { name: 'PoE+++++' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/create/poe_plus_plus_plus_plus_plus');
		});

		it('should have ドメイン一覧 link in Create section', () => {
			render(Page);
			const link = screen.getByRole('link', { name: 'ドメイン一覧' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', 'https://domains.zin3.cc/');
		});
	});

	describe('Footer', () => {
		it('should display copyright text', () => {
			render(Page);
			expect(screen.getByText('©zin3 2024')).toBeInTheDocument();
		});
	});
});
