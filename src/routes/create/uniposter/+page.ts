import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		meta: {
			title: 'Uni Poster',
			description: '複数のSNSに同時投稿できるユーティリティアプリ',
			ogImage: '/images/uniposter-icon.png',
			url: '/create/uniposter'
		}
	};
};
