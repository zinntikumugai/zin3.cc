// デザイン（zin3.cc 統一版）の CSS 変数をそのまま移植したデザイントークン。

export type ThemeMode = 'auto' | 'light' | 'dark';
export type EffectiveMode = 'light' | 'dark';

/** アクセントカラー（デザインの --ac 既定値）。テーマ切替では変化しない定数。 */
export const ACCENT = '#2b96a5';

export interface Palette {
	bg: string;
	card: string;
	tx: string;
	sub: string;
	bd: string;
	bd2: string;
	chip: string;
}

export const palettes: Record<EffectiveMode, Palette> = {
	light: {
		bg: '#faf6f8',
		card: '#ffffff',
		tx: '#1a1721',
		sub: '#6f6a78',
		bd: 'rgba(26,23,33,.09)',
		bd2: 'rgba(26,23,33,.16)',
		chip: 'rgba(26,23,33,.05)'
	},
	dark: {
		bg: '#12141a',
		card: '#1a1d25',
		tx: '#edeaf2',
		sub: '#9d99a8',
		bd: 'rgba(237,234,242,.11)',
		bd2: 'rgba(237,234,242,.2)',
		chip: 'rgba(237,234,242,.07)'
	}
};

export const THEME_STORAGE_KEY = 'zin3cc-theme';

export const themeLabels: Record<ThemeMode, string> = {
	auto: 'テーマ: 自動',
	light: 'テーマ: ライト',
	dark: 'テーマ: ダーク'
};

/** テーマ切替ボタンの循環順（auto → light → dark → auto ...）。 */
export const themeOrder: ThemeMode[] = ['auto', 'light', 'dark'];

export function nextMode(mode: ThemeMode): ThemeMode {
	return themeOrder[(themeOrder.indexOf(mode) + 1) % themeOrder.length];
}

/** モードとシステムのダーク設定から実効モードを決定する。 */
export function resolveEffective(mode: ThemeMode, sysDark: boolean): EffectiveMode {
	if (mode === 'auto') return sysDark ? 'dark' : 'light';
	return mode;
}
