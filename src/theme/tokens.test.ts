import { describe, it, expect } from 'vitest';
import {
	ACCENT,
	nextMode,
	palettes,
	resolveEffective,
	themeLabels,
	type ThemeMode
} from './tokens';

describe('theme tokens', () => {
	it('アクセントはデザイン既定値', () => {
		expect(ACCENT).toBe('#2b96a5');
	});

	it('light/dark パレットが必要なキーを持つ', () => {
		for (const mode of ['light', 'dark'] as const) {
			const p = palettes[mode];
			expect(p.bg).toBeTruthy();
			expect(p.card).toBeTruthy();
			expect(p.tx).toBeTruthy();
			expect(p.sub).toBeTruthy();
			expect(p.bd).toBeTruthy();
			expect(p.bd2).toBeTruthy();
			expect(p.chip).toBeTruthy();
		}
		expect(palettes.light.bg).toBe('#faf6f8');
		expect(palettes.dark.bg).toBe('#12141a');
	});

	it('nextMode は auto→light→dark→auto で循環する', () => {
		expect(nextMode('auto')).toBe('light');
		expect(nextMode('light')).toBe('dark');
		expect(nextMode('dark')).toBe('auto');
	});

	it('themeLabels は日本語ラベル', () => {
		const labels: Record<ThemeMode, string> = themeLabels;
		expect(labels.auto).toBe('テーマ: 自動');
		expect(labels.light).toBe('テーマ: ライト');
		expect(labels.dark).toBe('テーマ: ダーク');
	});

	it('resolveEffective は auto でシステム設定に追従し、明示指定を優先する', () => {
		expect(resolveEffective('auto', true)).toBe('dark');
		expect(resolveEffective('auto', false)).toBe('light');
		expect(resolveEffective('light', true)).toBe('light');
		expect(resolveEffective('dark', false)).toBe('dark');
	});
});
