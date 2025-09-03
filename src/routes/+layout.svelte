<script>
	import '../app.pcss';
	import { PUBLIC_GTM_ID } from '$env/static/public';
	import { onMount } from 'svelte';

	onMount(() => {
		if (PUBLIC_GTM_ID && typeof window !== 'undefined') {
			// Google Tag Manager
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', PUBLIC_GTM_ID);
		}
	});
</script>

<svelte:head>
	{#if PUBLIC_GTM_ID}
		<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id={PUBLIC_GTM_ID}"
				height="0"
				width="0"
				style="display:none;visibility:hidden"
				title="Google Tag Manager"
			>
			</iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->
	{/if}
</svelte:head>

<slot></slot>
