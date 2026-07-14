// サイト共通の外部リソース。

/** 本番の正規URL（OGP 等の絶対URL生成に使う）。 */
export const SITE_URL = 'https://zin3.cc';

/** サイト共通の OGP 画像（public/og.png。`pnpm gen:og` で生成）。 */
export const OG_IMAGE = `${SITE_URL}/og.png`;

/** プロフィール画像（X のプロフィール画像を自己ホスト。差し替え時は public/profile.jpg を置換）。 */
export const PROFILE_IMG = '/profile.jpg';
