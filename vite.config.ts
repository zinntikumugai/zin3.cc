import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [sveltekit()],
		server: {
			watch: {
				usePolling: true
			}
		},
		define: {
			'%PUBLIC_GTM_ID%': JSON.stringify(env.PUBLIC_GTM_ID || '')
		}
	};
});
