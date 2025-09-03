import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		meta: {
			title: 'Power over Ethernet +++++',
			description:
				'LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？ということで100vで流せるようにしておきました。',
			ogImage: 'https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096',
			url: '/create/poe_plus_plus_plus_plus_plus'
		}
	};
};
