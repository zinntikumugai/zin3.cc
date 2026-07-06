import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeProvider';
import { App } from './App';

function renderAt(route: string) {
	return render(
		<ColorModeProvider>
			<MemoryRouter initialEntries={[route]}>
				<App />
			</MemoryRouter>
		</ColorModeProvider>
	);
}

describe('App ルーティング', () => {
	it('/ でホーム（プロフィール）を表示する', () => {
		renderAt('/');
		expect(screen.getByAltText('じんさんのアイコン')).toBeInTheDocument();
	});

	it('/lt で LT実績 を表示する', () => {
		renderAt('/lt');
		expect(screen.getByRole('heading', { name: 'LT実績', level: 1 })).toBeInTheDocument();
	});

	it('/create/unipostor で UniPostor を表示する', () => {
		renderAt('/create/unipostor');
		expect(screen.getByRole('heading', { name: 'UniPostor', level: 1 })).toBeInTheDocument();
	});

	it('/create/poe_plus_plus_plus_plus_plus で PoE を表示する', () => {
		renderAt('/create/poe_plus_plus_plus_plus_plus');
		expect(screen.getByRole('heading', { name: 'PoE+++++', level: 1 })).toBeInTheDocument();
	});

	it('未知のパスはホームにフォールバックする', () => {
		renderAt('/nope');
		expect(screen.getByAltText('じんさんのアイコン')).toBeInTheDocument();
	});
});
