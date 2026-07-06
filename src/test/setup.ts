import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
	cleanup();
	localStorage.clear();
});

// jsdom は window.scrollTo 未実装のためモックする（Layout の遷移時スクロール）。
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

// jsdom には matchMedia が無いため、テーマ判定用にモックを用意する。
// 既定ではライト（dark: false）扱い。テストごとに上書き可能。
if (!window.matchMedia) {
	window.matchMedia = vi.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		addListener: vi.fn(),
		removeListener: vi.fn(),
		dispatchEvent: vi.fn()
	}));
}
