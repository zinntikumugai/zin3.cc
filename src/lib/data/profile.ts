export type LinkItem = {
	name: string;
	url: string;
	handle?: string;
	cssClass: string;
	icon?: string;
};

export type LinkSection = {
	id: string;
	heading: string;
	gridClass: string;
	items: LinkItem[];
};

export type Skill = {
	name: string;
	level: string;
	startedAt?: string;
};

export type Profile = {
	displayName: string;
	username: string;
	fullName: string;
	education: string;
	email: string;
	copyright: string;
	skills: Skill[];
	hobbies: string[];
	sections: LinkSection[];
	additionalLinks: {
		keybase: string;
	};
};

export const profile: Profile = {
	displayName: 'じんさん',
	username: 'zin3',
	fullName: '人畜無害',
	education: '大学(情報系) 卒業',
	email: 'support@zinntikumugai.com',
	copyright: '©zin3 2024',
	skills: [
		{ name: 'C/C++', level: '基礎はできている', startedAt: '高校1年' },
		{ name: 'C#', level: 'C++の延長線程度', startedAt: '高校3年' },
		{ name: 'Java', level: 'はて、最後に使ったのはいつだろうか', startedAt: '高校1年' },
		{ name: 'Node.js', level: '最近使ってないな', startedAt: '大学1年?' },
		{ name: 'PHP', level: 'はて、最後に使ったのはいつだろうか', startedAt: '高校2年' },
		{ name: 'Python', level: '最近よく使う', startedAt: '1年~' }
	],
	hobbies: ['開発', 'ゲーム', 'サーバー構築・ネットワーク構築', '電子工作'],
	sections: [
		{
			id: 'sns',
			heading: 'SNS',
			gridClass: 'grid-cols-1 items-center md:grid-cols-3',
			items: [
				{
					name: 'X',
					url: 'https://twitter.com/uesitananame55',
					handle: '@uesitananame55',
					cssClass: 'twitter'
				},
				{
					name: 'Bluesky',
					url: 'https://bsky.app/profile/zin3.cc',
					handle: '@zin3.cc',
					cssClass: 'bluesky'
				},
				{
					name: 'Misskey.io',
					url: 'https://misskey.io/@z3',
					handle: '@z3',
					cssClass: 'misskey'
				},
				{
					name: 'Discord',
					url: 'https://discord.com/users/246834514146361345',
					handle: '@zinntikumugai',
					cssClass: 'discord'
				},
				{
					name: 'Steam',
					url: 'https://steamcommunity.com/id/zinntikumugai/',
					handle: 'zinntikumugai',
					cssClass: 'steam'
				},
				{
					name: 'VRChat',
					url: 'https://vrchat.com/home/user/usr_5a64db9b-e233-4280-804e-0e9c9df6f04e',
					handle: 'zin3',
					cssClass: 'vrchat'
				},
				{
					name: 'nostr',
					url: 'https://iris.to/npub1zln33396vq76an8ce075w8fqxqjhtgqfwsm6fnyt9s7gmzysw9qqhdpcgc',
					handle: 'zin3@zin3.cc',
					cssClass: 'nostr'
				}
			]
		},
		{
			id: 'blog',
			heading: 'Blog',
			gridClass: 'grid-cols-1 md:grid-cols-2',
			items: [
				{
					name: 'Blog',
					url: 'https://www.zinntikumugai.com/',
					handle: 'じんさんです!',
					cssClass: 'blog-zin3'
				},
				{
					name: 'sublog',
					url: 'https://sublog.zinntikumugai.com/',
					handle: 'さぶろぐ!',
					cssClass: 'blog-sub'
				}
			]
		},
		{
			id: 'git',
			heading: 'git',
			gridClass: 'grid-cols-1 md:grid-cols-2',
			items: [
				{
					name: 'GitHub',
					url: 'https://github.com/zinntikumugai/',
					handle: 'zinntikumugai',
					cssClass: 'github'
				},
				{
					name: 'GitLab',
					url: 'https://gitlab.com/zinntikumugai',
					handle: 'zinntikumugai',
					cssClass: 'gitlab'
				}
			]
		},
		{
			id: 'gpg',
			heading: 'gpg',
			gridClass: 'grid-cols-1',
			items: [
				{
					name: 'keyoxide',
					url: 'https://keyoxide.org/hkp/961F516ECD5646B15936218CEC5C53A3AB6800E5',
					handle: '961F516ECD5646B15936218CEC5C53A3AB6800E5',
					cssClass: 'keyoxide'
				}
			]
		},
		{
			id: 'create',
			heading: 'Create',
			gridClass: 'grid-cols-1 md:grid-cols-2',
			items: [
				{
					name: 'うぉぉぉ',
					url: 'https://ulo.ooo',
					cssClass: 'ulo'
				},
				{
					name: 'Uni Poster',
					url: '/create/uniposter',
					cssClass: 'unipostor'
				},
				{
					name: 'PoE+++++',
					url: '/create/poe_plus_plus_plus_plus_plus',
					cssClass: 'poe-plus'
				},
				{
					name: 'ドメイン一覧',
					url: 'https://domains.zin3.cc/',
					cssClass: 'domain-list'
				}
			]
		}
	],
	additionalLinks: {
		keybase: 'https://keybase.io/zinntikumugai'
	}
};
