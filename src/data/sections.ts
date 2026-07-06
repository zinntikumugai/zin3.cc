// ホーム画面のリンクデータ（デザイン「zin3.cc 統一版」の sections を移植）。

export type IconKey =
	'x' | 'bluesky' | 'misskey' | 'discord' | 'steam' | 'vrchat' | 'github' | 'gitlab' | 'googleplay';

export interface LinkItem {
	name: string;
	handle: string;
	color: string;
	/** アイコンが無い場合に表示する頭文字。 */
	letter: string;
	/** ブランドアイコン（未指定なら letter を表示）。 */
	icon?: IconKey;
	/** 外部リンク先。 */
	href?: string;
	/** アプリ内ルート（外部 href の代わりに内部遷移させたい項目）。 */
	to?: string;
}

export interface Section {
	name: string;
	items: LinkItem[];
}

export const sections: Section[] = [
	{
		name: 'SNS',
		items: [
			{
				name: 'X',
				handle: '@uesitananame55',
				href: 'https://twitter.com/uesitananame55',
				color: '#0f1419',
				letter: 'X',
				icon: 'x'
			},
			{
				name: 'Bluesky',
				handle: '@zin3.cc',
				href: 'https://bsky.app/profile/zin3.cc',
				color: '#1185fe',
				letter: 'B',
				icon: 'bluesky'
			},
			{
				name: 'Misskey.io',
				handle: '@z3',
				href: 'https://misskey.io/@z3',
				color: '#86b300',
				letter: 'M',
				icon: 'misskey'
			},
			{
				name: 'Discord',
				handle: '@zinntikumugai',
				href: 'https://discord.com/users/246834514146361345',
				color: '#5865f2',
				letter: 'D',
				icon: 'discord'
			},
			{
				name: 'Steam',
				handle: 'zinntikumugai',
				href: 'https://steamcommunity.com/id/zinntikumugai/',
				color: '#1b2838',
				letter: 'S',
				icon: 'steam'
			},
			{
				name: 'VRChat',
				handle: 'zin3',
				href: 'https://vrchat.com/home/user/usr_5a64db9b-e233-4280-804e-0e9c9df6f04e',
				color: '#13809c',
				letter: 'V',
				icon: 'vrchat'
			},
			{
				name: 'nostr',
				handle: 'zin3@zin3.cc',
				href: 'https://iris.to/npub1zln33396vq76an8ce075w8fqxqjhtgqfwsm6fnyt9s7gmzysw9qqhdpcgc',
				color: '#9e3beb',
				letter: 'N'
			}
		]
	},
	{
		name: 'Blog',
		items: [
			{
				name: 'Blog',
				handle: 'じんさんです!',
				href: 'https://www.zinntikumugai.com/',
				color: '#2b96a5',
				letter: 'B'
			},
			{
				name: 'sublog',
				handle: 'さぶろぐ!',
				href: 'https://sublog.zinntikumugai.com/',
				color: '#7f5fb5',
				letter: 'S'
			}
		]
	},
	{
		name: 'git',
		items: [
			{
				name: 'GitHub',
				handle: 'zinntikumugai',
				href: 'https://github.com/zinntikumugai/',
				color: '#24292f',
				letter: 'G',
				icon: 'github'
			},
			{
				name: 'GitLab',
				handle: 'zinntikumugai',
				href: 'https://gitlab.com/zinntikumugai',
				color: '#fc6d26',
				letter: 'G',
				icon: 'gitlab'
			}
		]
	},
	{
		name: 'gpg',
		items: [
			{
				name: 'keyoxide',
				handle: '961F516ECD5646B15936218CEC5C53A3AB6800E5',
				href: 'https://keyoxide.org/hkp/961F516ECD5646B15936218CEC5C53A3AB6800E5',
				color: '#5f4bb6',
				letter: 'K'
			}
		]
	},
	{
		name: 'Create',
		items: [
			{
				name: 'うぉぉぉ',
				handle: 'ulo.ooo',
				href: 'https://ulo.ooo',
				color: '#6234e0',
				letter: 'う'
			},
			{
				name: 'UniPostor',
				handle: 'iOS / Android アプリ',
				to: '/create/unipostor',
				color: '#3ab55d',
				letter: 'U',
				icon: 'googleplay'
			},
			{
				name: 'PoE+++++',
				handle: 'ネタTシャツ',
				to: '/create/poe_plus_plus_plus_plus_plus',
				color: '#ff9500',
				letter: '+'
			},
			{
				name: 'ドメイン一覧',
				handle: 'domains.zin3.cc',
				href: 'https://domains.zin3.cc/',
				color: '#3553e8',
				letter: 'ド'
			}
		]
	}
];
