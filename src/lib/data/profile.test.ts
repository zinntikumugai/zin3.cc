import { describe, expect, it } from 'vitest';
import { profile } from './profile';

describe('profile data', () => {
	describe('basic profile info', () => {
		it('should have display name', () => {
			expect(profile.displayName).toBe('じんさん');
		});

		it('should have username', () => {
			expect(profile.username).toBe('zin3');
		});

		it('should have copyright', () => {
			expect(profile.copyright).toBe('©zin3 2024');
		});
	});

	describe('zinntikumugai.xyz profile data', () => {
		it('should have full name', () => {
			expect(profile.fullName).toBe('人畜無害');
		});

		it('should have education', () => {
			expect(profile.education).toBe('大学(情報系) 卒業');
		});

		it('should have email', () => {
			expect(profile.email).toBe('support@zinntikumugai.com');
		});

		it('should have 6 skills', () => {
			expect(profile.skills).toHaveLength(6);
		});

		it('should have skill names', () => {
			const names = profile.skills.map((s) => s.name);
			expect(names).toContain('C/C++');
			expect(names).toContain('Python');
		});

		it('should have 4 hobbies', () => {
			expect(profile.hobbies).toHaveLength(4);
			expect(profile.hobbies).toContain('開発');
			expect(profile.hobbies).toContain('ゲーム');
		});

		it('should have keybase link', () => {
			expect(profile.additionalLinks.keybase).toBe('https://keybase.io/zinntikumugai');
		});
	});

	describe('sections', () => {
		it('should have 5 sections', () => {
			expect(profile.sections).toHaveLength(5);
		});

		it('should have sections in correct order', () => {
			const ids = profile.sections.map((s) => s.id);
			expect(ids).toEqual(['sns', 'blog', 'git', 'gpg', 'create']);
		});
	});

	describe('SNS section', () => {
		it('should have 7 items', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			expect(sns?.items).toHaveLength(7);
		});

		it('should have correct heading', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			expect(sns?.heading).toBe('SNS');
		});

		it('should have X link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const x = sns?.items.find((i) => i.name === 'X');
			expect(x?.url).toBe('https://twitter.com/uesitananame55');
			expect(x?.handle).toBe('@uesitananame55');
			expect(x?.cssClass).toBe('twitter');
		});

		it('should have Bluesky link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'Bluesky');
			expect(item?.url).toBe('https://bsky.app/profile/zin3.cc');
			expect(item?.handle).toBe('@zin3.cc');
		});

		it('should have Misskey.io link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'Misskey.io');
			expect(item?.url).toBe('https://misskey.io/@z3');
			expect(item?.handle).toBe('@z3');
		});

		it('should have Discord link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'Discord');
			expect(item?.url).toBe('https://discord.com/users/246834514146361345');
			expect(item?.handle).toBe('@zinntikumugai');
		});

		it('should have Steam link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'Steam');
			expect(item?.url).toBe('https://steamcommunity.com/id/zinntikumugai/');
			expect(item?.handle).toBe('zinntikumugai');
		});

		it('should have VRChat link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'VRChat');
			expect(item?.url).toBe(
				'https://vrchat.com/home/user/usr_5a64db9b-e233-4280-804e-0e9c9df6f04e'
			);
			expect(item?.handle).toBe('zin3');
		});

		it('should have nostr link', () => {
			const sns = profile.sections.find((s) => s.id === 'sns');
			const item = sns?.items.find((i) => i.name === 'nostr');
			expect(item?.url).toBe(
				'https://iris.to/npub1zln33396vq76an8ce075w8fqxqjhtgqfwsm6fnyt9s7gmzysw9qqhdpcgc'
			);
			expect(item?.handle).toBe('zin3@zin3.cc');
		});
	});

	describe('Blog section', () => {
		it('should have 2 items', () => {
			const blog = profile.sections.find((s) => s.id === 'blog');
			expect(blog?.items).toHaveLength(2);
		});

		it('should have Blog link', () => {
			const blog = profile.sections.find((s) => s.id === 'blog');
			const item = blog?.items.find((i) => i.name === 'Blog');
			expect(item?.url).toBe('https://www.zinntikumugai.com/');
			expect(item?.handle).toBe('じんさんです!');
		});

		it('should have sublog link', () => {
			const blog = profile.sections.find((s) => s.id === 'blog');
			const item = blog?.items.find((i) => i.name === 'sublog');
			expect(item?.url).toBe('https://sublog.zinntikumugai.com/');
			expect(item?.handle).toBe('さぶろぐ!');
		});
	});

	describe('Git section', () => {
		it('should have 2 items', () => {
			const git = profile.sections.find((s) => s.id === 'git');
			expect(git?.items).toHaveLength(2);
		});

		it('should have GitHub link', () => {
			const git = profile.sections.find((s) => s.id === 'git');
			const item = git?.items.find((i) => i.name === 'GitHub');
			expect(item?.url).toBe('https://github.com/zinntikumugai/');
		});

		it('should have GitLab link', () => {
			const git = profile.sections.find((s) => s.id === 'git');
			const item = git?.items.find((i) => i.name === 'GitLab');
			expect(item?.url).toBe('https://gitlab.com/zinntikumugai');
		});
	});

	describe('GPG section', () => {
		it('should have 1 item', () => {
			const gpg = profile.sections.find((s) => s.id === 'gpg');
			expect(gpg?.items).toHaveLength(1);
		});

		it('should have keyoxide link', () => {
			const gpg = profile.sections.find((s) => s.id === 'gpg');
			const item = gpg?.items[0];
			expect(item?.name).toBe('keyoxide');
			expect(item?.url).toBe('https://keyoxide.org/hkp/961F516ECD5646B15936218CEC5C53A3AB6800E5');
		});
	});

	describe('Create section', () => {
		it('should have 4 items', () => {
			const create = profile.sections.find((s) => s.id === 'create');
			expect(create?.items).toHaveLength(4);
		});

		it('should have うぉぉぉ link', () => {
			const create = profile.sections.find((s) => s.id === 'create');
			const item = create?.items.find((i) => i.name === 'うぉぉぉ');
			expect(item?.url).toBe('https://ulo.ooo');
		});

		it('should have UniPostor link with icon', () => {
			const create = profile.sections.find((s) => s.id === 'create');
			const item = create?.items.find((i) => i.name === 'UniPostor');
			expect(item?.url).toBe('https://play.google.com/store/apps/details?id=cc.zin3.uni_poster');
			expect(item?.icon).toBe('fab fa-google-play');
		});

		it('should have PoE+++++ link', () => {
			const create = profile.sections.find((s) => s.id === 'create');
			const item = create?.items.find((i) => i.name === 'PoE+++++');
			expect(item?.url).toBe('/create/poe_plus_plus_plus_plus_plus');
		});

		it('should have ドメイン一覧 link', () => {
			const create = profile.sections.find((s) => s.id === 'create');
			const item = create?.items.find((i) => i.name === 'ドメイン一覧');
			expect(item?.url).toBe('https://domains.zin3.cc/');
		});
	});
});
