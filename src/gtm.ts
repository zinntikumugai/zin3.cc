// Google Tag Manager を任意で読み込む。VITE_GTM_ID 未設定なら何もしない。
export function initGtm(id: string | undefined): void {
	if (!id || typeof window === 'undefined') return;

	const w = window as unknown as { dataLayer?: unknown[] };
	w.dataLayer = w.dataLayer || [];
	w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
	document.head.appendChild(script);
}
