// OGP画像 (public/og.png, 1200x630) を生成するスクリプト。
//
// ローカルに PNG ラスタライザ (rsvg-convert / ImageMagick 等) が無いため、
// SVG を組み立てて @resvg/resvg-js でラスタライズする。
// 文字はフォント形式問題（@fontsource は woff のみ）を避けるため、
// opentype.js で「zin3.cc」を SVG パスにアウトライン化してから描画する
// （ラスタライズ時のフォント読込が不要になり、完全にオフライン・決定的）。
//
// 実行: pnpm gen:og

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import { Resvg } from '@resvg/resvg-js';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

// --- デザイントークン（src/theme/tokens.ts の light パレットに準拠） ---
const W = 1200;
const H = 630;
const BG = '#faf6f8'; // light: page background
const TX = '#1a1721'; // light: primary text
const ACCENT = '#2b96a5'; // teal (theme primary)
const BORDER = 'rgba(26,23,33,0.09)'; // light: bd

// --- favicon を base64 埋め込み用に読み込む ---
const faviconB64 = readFileSync(resolve(root, 'public/favicon.png')).toString('base64');
const faviconHref = `data:image/png;base64,${faviconB64}`;

// --- 「zin3.cc」をパス化 ---
const font = opentype.parse(
	readFileSync(
		resolve(
			root,
			'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'
		)
	)
);

const TEXT = 'zin3.cc';
const FONT_SIZE = 190;
const ICON = 200;
const GAP = 48;

// baseline y=0 でパスを生成し、bbox から中央寄せ用のオフセットを計算する。
const textPath = font.getPath(TEXT, 0, 0, FONT_SIZE);
const bb = textPath.getBoundingBox();
const textW = bb.x2 - bb.x1;

const cx = W / 2;
const cy = H / 2;
const groupW = ICON + GAP + textW;
const originX = cx - groupW / 2;

const iconX = originX;
const iconY = cy - ICON / 2;

const textLeft = originX + ICON + GAP;
const tx = textLeft - bb.x1;
const ty = cy - (bb.y1 + bb.y2) / 2;
const textD = textPath.toPathData(2);

// テキスト下のアクセントライン
const underlineY = ty + bb.y2 + 26;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
	<rect width="${W}" height="${H}" fill="${BG}"/>
	<rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="28" fill="none" stroke="${BORDER}" stroke-width="2"/>
	<image href="${faviconHref}" x="${iconX}" y="${iconY}" width="${ICON}" height="${ICON}"/>
	<path d="${textD}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)})" fill="${TX}"/>
	<rect x="${textLeft.toFixed(2)}" y="${underlineY.toFixed(2)}" width="${textW.toFixed(2)}" height="10" rx="5" fill="${ACCENT}"/>
</svg>`;

// レビュー用に中間SVGも書き出す。
writeFileSync(resolve(root, 'scripts/og.generated.svg'), svg);

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: W } });
const png = resvg.render().asPng();
writeFileSync(resolve(root, 'public/og.png'), png);

console.log(`Generated public/og.png (${W}x${H})`);
