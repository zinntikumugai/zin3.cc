# zin3.cc

じんさん（zin3）のポートフォリオサイト。React 19 + MUI + Vite（SPA）で構築し、Cloudflare Pages にデプロイする。

## 技術スタック

- **React 19** + **TypeScript**
- **MUI v9**（`@mui/material` / emotion）+ カスタムテーマ（auto / light / dark）
- **react-router v7**（SPA ルーティング）
- **Vite 8**（ビルド / 開発サーバ）
- **Vitest 4** + **React Testing Library**（テスト）
- **react-icons**（ブランドアイコン）・**@fontsource**（フォントのセルフホスト）
- パッケージマネージャ: **pnpm**

## 前提

- **Node.js 24**（`mise.toml` / `.node-version` で `24.18.0` に固定）。[mise](https://mise.jdx.dev/) 利用時は `mise install` でセットアップ。
- **pnpm 11**（`packageManager` で固定。corepack: `corepack enable pnpm`）。

## 開発コマンド

```bash
pnpm install      # 依存インストール
pnpm dev          # 開発サーバ
pnpm build        # 本番ビルド（tsc 型チェック + vite build → dist/）
pnpm preview      # ビルド成果物のプレビュー
pnpm check        # 型チェック
pnpm test         # テスト（watch）
pnpm test:run     # テスト（1回）
pnpm lint         # prettier + eslint
pnpm format       # 自動整形
```

## ルーティング

- `/` — ホーム（プロフィール + SNS / Blog / git / gpg / Create のリンク）
- `/lt` — LT実績（Speaker Deck 埋め込み）
- `/create/unipostor` — UniPostor（アプリ紹介）
- `/create/poe_plus_plus_plus_plus_plus` — PoE+++++（ネタTシャツ）

## ディレクトリ

- `src/theme/` — MUI テーマ・カラーモード（`ColorModeProvider`）
- `src/data/` — リンク・LT実績のデータ
- `src/components/` — `Layout`（ヘッダ/ナビ/フッタ）・`LinkCard`
- `src/pages/` — 各画面
- `public/` — 静的アセット（favicon・アイコン・`.well-known/*`・`_redirects` 等）

## デプロイ（Cloudflare Pages）

- Build command: `pnpm run build`
- Output directory: `dist`
- `public/_redirects`（`/* /index.html 200`）で SPA フォールバック。

## メモ

- ホームのプロフィール画像 `public/profile.svg` は暫定プレースホルダ。実写真に差し替える場合は画像を `public/` に置き、`src/pages/Home.tsx`（および `src/pages/Poe.tsx`）の `src` を更新する。
- Google Tag Manager を使う場合は `.env` に `VITE_GTM_ID` を設定する。
