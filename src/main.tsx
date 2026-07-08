import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// フォント（外部CDNに依存せずセルフホスト）
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import '@fontsource/noto-sans-jp/900.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';

import { ColorModeProvider } from './theme/ColorModeProvider';
import { App } from './App';
import { initGtm } from './gtm';

initGtm(import.meta.env.VITE_GTM_ID);

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('#root が見つかりません');

createRoot(rootEl).render(
	<StrictMode>
		<ColorModeProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ColorModeProvider>
	</StrictMode>
);
