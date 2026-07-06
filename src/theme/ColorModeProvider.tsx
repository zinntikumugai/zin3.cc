import {
	createContext,
	use,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ReactNode
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './createAppTheme';
import {
	nextMode,
	resolveEffective,
	themeLabels,
	THEME_STORAGE_KEY,
	type EffectiveMode,
	type ThemeMode
} from './tokens';

interface ColorModeContextValue {
	mode: ThemeMode;
	effective: EffectiveMode;
	label: string;
	cycle: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

export function useColorMode(): ColorModeContextValue {
	const ctx = use(ColorModeContext);
	if (!ctx) throw new Error('useColorMode must be used within ColorModeProvider');
	return ctx;
}

function readStored(): ThemeMode {
	try {
		const s = localStorage.getItem(THEME_STORAGE_KEY);
		if (s === 'light' || s === 'dark' || s === 'auto') return s;
	} catch {
		/* localStorage 不可の環境では既定へ */
	}
	return 'auto';
}

function systemDark(): boolean {
	return typeof window !== 'undefined' && typeof window.matchMedia === 'function'
		? window.matchMedia('(prefers-color-scheme: dark)').matches
		: false;
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
	const [mode, setMode] = useState<ThemeMode>(readStored);
	const [sysDark, setSysDark] = useState<boolean>(systemDark);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (e: MediaQueryListEvent) => setSysDark(e.matches);
		setSysDark(mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	const cycle = useCallback(() => {
		setMode((m) => {
			const next = nextMode(m);
			try {
				localStorage.setItem(THEME_STORAGE_KEY, next);
			} catch {
				/* 保存不可でも UI は切り替える */
			}
			return next;
		});
	}, []);

	const effective = resolveEffective(mode, sysDark);
	const theme = useMemo(() => createAppTheme(effective), [effective]);

	const value = useMemo<ColorModeContextValue>(
		() => ({ mode, effective, label: themeLabels[mode], cycle }),
		[mode, effective, cycle]
	);

	return (
		<ColorModeContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
