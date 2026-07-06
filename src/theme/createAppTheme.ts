import { createTheme, type Theme } from '@mui/material/styles';
import { ACCENT, palettes, type EffectiveMode } from './tokens';

// MUI パレットへデザイン独自トークンを型付きで追加する。
declare module '@mui/material/styles' {
	interface Palette {
		accent: string;
		bd: string;
		bd2: string;
		chip: string;
	}
	interface PaletteOptions {
		accent?: string;
		bd?: string;
		bd2?: string;
		chip?: string;
	}
}

export function createAppTheme(mode: EffectiveMode): Theme {
	const p = palettes[mode];
	return createTheme({
		palette: {
			mode,
			primary: { main: ACCENT },
			background: { default: p.bg, paper: p.card },
			text: { primary: p.tx, secondary: p.sub },
			accent: ACCENT,
			bd: p.bd,
			bd2: p.bd2,
			chip: p.chip
		},
		typography: {
			fontFamily: "'Noto Sans JP', system-ui, sans-serif"
		},
		shape: { borderRadius: 16 }
	});
}
