import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { ReactElement, ReactNode } from 'react';
import { ColorModeProvider } from '../theme/ColorModeProvider';

interface Options extends Omit<RenderOptions, 'wrapper'> {
	route?: string;
}

/** MUI テーマ（ColorModeProvider）と react-router を備えた共通レンダラ。 */
export function renderWithProviders(ui: ReactElement, { route = '/', ...options }: Options = {}) {
	function Wrapper({ children }: { children: ReactNode }) {
		return (
			<ColorModeProvider>
				<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
			</ColorModeProvider>
		);
	}
	return render(ui, { wrapper: Wrapper, ...options });
}
