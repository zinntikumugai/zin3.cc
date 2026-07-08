import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorModeProvider, useColorMode } from './ColorModeProvider';
import { THEME_STORAGE_KEY } from './tokens';

function Probe() {
	const { label, effective, cycle } = useColorMode();
	return (
		<div>
			<span data-testid="label">{label}</span>
			<span data-testid="effective">{effective}</span>
			<button onClick={cycle}>toggle</button>
		</div>
	);
}

function renderProbe() {
	return render(
		<ColorModeProvider>
			<Probe />
		</ColorModeProvider>
	);
}

describe('ColorModeProvider', () => {
	beforeEach(() => localStorage.clear());

	it('既定は auto（matchMedia=false のため実効 light）', () => {
		renderProbe();
		expect(screen.getByTestId('label')).toHaveTextContent('テーマ: 自動');
		expect(screen.getByTestId('effective')).toHaveTextContent('light');
	});

	it('切替ボタンで auto→light→dark と循環し localStorage に保存する', async () => {
		const user = userEvent.setup();
		renderProbe();
		const btn = screen.getByRole('button', { name: 'toggle' });

		await user.click(btn);
		expect(screen.getByTestId('label')).toHaveTextContent('テーマ: ライト');
		expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

		await user.click(btn);
		expect(screen.getByTestId('label')).toHaveTextContent('テーマ: ダーク');
		expect(screen.getByTestId('effective')).toHaveTextContent('dark');
		expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

		await user.click(btn);
		expect(screen.getByTestId('label')).toHaveTextContent('テーマ: 自動');
		expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('auto');
	});

	it('localStorage の保存値を初期状態として復元する', () => {
		localStorage.setItem(THEME_STORAGE_KEY, 'dark');
		renderProbe();
		expect(screen.getByTestId('label')).toHaveTextContent('テーマ: ダーク');
		expect(screen.getByTestId('effective')).toHaveTextContent('dark');
	});
});
