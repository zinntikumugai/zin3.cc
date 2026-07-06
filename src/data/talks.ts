// LT実績データ（デザイン「zin3.cc 統一版」の talksData を移植）。

export interface Talk {
	id: string;
	title: string;
	/** 表示用の日付ラベル（例: 2026.06.20）。 */
	date: string;
	event: string;
	/** connpass 等のイベントページ URL（無ければ空文字）。 */
	eventUrl: string;
	description: string;
	/** Speaker Deck のスライド URL。 */
	url: string;
}

export const talks: Talk[] = [
	{
		id: '79189818021747da97f324478a7450e7',
		title: 'バックアップとLTO',
		date: '2026.06.20',
		event: '第1回みんなの自宅鯖LT会',
		eventUrl: 'https://homeserver.connpass.com/event/394093/',
		description: '3-2-1ルールからLTOテープ運用まで、自宅でのテープバックアップ実践の話。',
		url: 'https://speakerdeck.com/zin3/batukuatuputolto'
	},
	{
		id: 'f7525ad9d0ab4e119cf688d88f138075',
		title: 'サーバーラック入れた話',
		date: '2026.01.15',
		event: 'ITインフラ集会 1/3',
		eventUrl: '',
		description: '自宅に36Uサーバーラックを導入。選定・搬入・組み立て・設置までの記録。',
		url: 'https://speakerdeck.com/zin3/sabaratukuru-retahua'
	},
	{
		id: 'addc0601f33e4898b0d25531be7746bc',
		title: 'おうちに低遅延な動画配信サーバーをたてる',
		date: '2025.07.19',
		event: 'ITインフラ集会 × Vketステージ',
		eventUrl: '',
		description:
			'MEDIAMTXで自宅に低遅延配信サーバーを構築し、VRChatで視聴するまでの手順とプロトコルの話。',
		url: 'https://speakerdeck.com/zin3/outinidi-chi-yan-nadong-hua-pei-xin-sabawotateru'
	},
	{
		id: 'abadb8ae4a404d128e2b4927827803c6',
		title: 'PoE+++++',
		date: '2025.06.28',
		event: 'エンジニア集会',
		eventUrl: '',
		description:
			'PoEで100V/15A＝1500Wを流す（実在しない）規格をTシャツにした話。RT439・いいね1,417。',
		url: 'https://speakerdeck.com/zin3/poe-plus-plus-plus-plus-plus'
	},
	{
		id: '5ee72686b15247738e5a5be09769051d',
		title: 'ﾌﾞﾗｳｻﾞﾎﾟﾁﾎﾟﾁk8s ～Rancher～',
		date: '2025.03.29',
		event: 'ITインフラ集会',
		eventUrl: '',
		description:
			'WebUIでk8sをポチポチ管理。Rancherの良いところ・良くないところと落ちにくい構成の話。',
		url: 'https://speakerdeck.com/zin3/hu-rausa-ho-tiho-tik8s-rancher'
	}
];

/** Speaker Deck の1枚目サムネイル URL。 */
export function slideThumb(id: string): string {
	return `https://files.speakerdeck.com/presentations/${id}/slide_0.jpg`;
}

/** Speaker Deck の埋め込みプレイヤー URL。 */
export function playerEmbed(id: string): string {
	return `https://speakerdeck.com/player/${id}`;
}
