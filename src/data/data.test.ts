import { describe, it, expect } from 'vitest';
import { sections } from './sections';
import { eventLinkLabel, playerEmbed, slideThumb, talks } from './talks';

describe('sections データ', () => {
	it('5セクション（SNS/Blog/git/gpg/Create）を順に持つ', () => {
		expect(sections.map((s) => s.name)).toEqual(['SNS', 'Blog', 'git', 'gpg', 'Create']);
	});

	it('全リンク項目が名前・色・頭文字と、href か to のいずれかを持つ', () => {
		for (const sec of sections) {
			for (const item of sec.items) {
				expect(item.name).toBeTruthy();
				expect(item.color).toMatch(/^#/);
				expect(item.letter).toBeTruthy();
				expect(Boolean(item.href) || Boolean(item.to)).toBe(true);
				// href と to は排他
				expect(Boolean(item.href) && Boolean(item.to)).toBe(false);
			}
		}
	});

	it('UniPostor と PoE は内部ルートへ遷移する', () => {
		const create = sections.find((s) => s.name === 'Create')!;
		const uni = create.items.find((i) => i.name === 'UniPostor')!;
		const poe = create.items.find((i) => i.name === 'PoE+++++')!;
		expect(uni.to).toBe('/create/unipostor');
		expect(poe.to).toBe('/create/poe_plus_plus_plus_plus_plus');
	});

	it('X の href は現行と一致する', () => {
		const x = sections[0].items.find((i) => i.name === 'X')!;
		expect(x.href).toBe('https://twitter.com/uesitananame55');
	});
});

describe('talks データ', () => {
	it('5件の登壇を持つ', () => {
		expect(talks).toHaveLength(5);
	});

	it('各トークは id・タイトル・日付・イベント・説明・URL を持つ', () => {
		for (const t of talks) {
			expect(t.id).toMatch(/^[0-9a-f]{32}$/);
			expect(t.title).toBeTruthy();
			expect(t.date).toMatch(/^\d{4}\.\d{2}\.\d{2}$/);
			expect(t.event).toBeTruthy();
			expect(t.description).toBeTruthy();
			expect(t.url).toContain('speakerdeck.com');
		}
	});

	it('サムネ・埋め込み URL を id から導出する', () => {
		const id = talks[0].id;
		expect(slideThumb(id)).toBe(`https://files.speakerdeck.com/presentations/${id}/slide_0.jpg`);
		expect(playerEmbed(id)).toBe(`https://speakerdeck.com/player/${id}`);
	});

	it('イベントURLのホストに応じた文言を返す', () => {
		expect(eventLinkLabel('https://homeserver.connpass.com/event/394093/')).toContain('connpass');
		expect(eventLinkLabel('https://vrc-ta-hub.com/event/detail/719/')).toContain('VRC-TA-Hub');
		expect(eventLinkLabel('https://example.com/e/1')).toBe('イベントページ ↗');
	});

	it('vrc-ta-hub のイベントURLが付与されている', () => {
		const rack = talks.find((t) => t.title === 'サーバーラック入れた話')!;
		expect(rack.eventUrl).toBe('https://vrc-ta-hub.com/event/detail/719/');
	});
});
