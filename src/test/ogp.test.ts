import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const html = readFileSync(resolve(root, 'index.html'), 'utf-8');

describe('index.html の OGP / Twitter Card メタタグ', () => {
	it('og:image がサイト共通の絶対URL og.png を指す', () => {
		expect(html).toContain('property="og:image"');
		expect(html).toContain('content="https://zin3.cc/og.png"');
	});

	it('og:type=website / og:url / og:site_name を持つ', () => {
		expect(html).toMatch(/property="og:type"\s+content="website"/);
		expect(html).toContain('property="og:url"');
		expect(html).toContain('property="og:site_name"');
	});

	it('og:image のサイズ 1200x630 を宣言する', () => {
		expect(html).toMatch(/property="og:image:width"\s+content="1200"/);
		expect(html).toMatch(/property="og:image:height"\s+content="630"/);
	});

	it('twitter:card=summary_large_image と twitter:image を持つ', () => {
		expect(html).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
		expect(html).toContain('content="https://zin3.cc/og.png"');
		expect(html).toContain('name="twitter:image"');
	});
});

describe('public/og.png（OGP画像）', () => {
	const ogPath = resolve(root, 'public/og.png');

	it('ファイルが存在する', () => {
		expect(existsSync(ogPath)).toBe(true);
	});

	it('PNG形式で 1200x630 である', () => {
		const buf = readFileSync(ogPath);
		// PNG シグネチャ
		expect(buf.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
		// IHDR: 8byteシグネチャ + 4byte長さ + 4byte"IHDR" の後に width/height（big-endian uint32）
		const width = buf.readUInt32BE(16);
		const height = buf.readUInt32BE(20);
		expect(width).toBe(1200);
		expect(height).toBe(630);
	});
});
