<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.ogImage} />
	<meta property="og:url" content={`https://zin3.cc${data.meta.url}`} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.ogImage} />
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold">Power over Ethernet +++++</h1>

	<div class="mb-6">
		<img
			src="https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=4096x4096"
			alt="画像"
			class="h-auto max-w-full rounded-lg shadow-lg"
		/>
	</div>

	<div class="prose mb-8 max-w-none">
		<p>LANケーブルを使って電力を供給するPoE。</p>
		<p>でも今の時代その程度で足りますか？足りませんよね</p>
		<p>ということで100vで流せるようにしておきました。</p>
		<p>(PoEで100vは実在しません)</p>
	</div>

	<div class="mb-8">
		<h2 class="mb-4 text-2xl font-bold">Links</h2>

		<div class="mb-4">
			<blockquote class="twitter-tweet">
				<p lang="ja" dir="ltr">Tシャツﾄﾄﾞｲﾀ <a href="https://t.co/pxLrJGDVkD">pic.twitter.com/pxLrJGDVkD</a></p>&mdash; じんさん (@uesitananame55) <a href="https://twitter.com/uesitananame55/status/1932771723914719349?ref_src=twsrc%5Etfw">December 3, 2024</a>
			</blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>

		<div class="mb-8">
			<p class="mb-4 text-lg">購入はこちらからどうぞ</p>
			<div class="flex gap-6">
				<a
					href="https://zin3.booth.pm/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity block p-2"
				>
					<img src="/icons/booth-logo.png" alt="Booth" height="48" class="h-12 w-auto" />
				</a>
				<a
					href="https://suzuri.jp/zin3/products"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity block p-2"
				>
					<img src="/icons/suzuri-logo.png" alt="SUZURI" height="48" class="h-12 w-auto" />
				</a>
			</div>
		</div>
	</div>

	<div class="mt-8">
		<a
			href="/"
			class="inline-block rounded-lg bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-700"
		>
			トップへ戻る
		</a>
	</div>
</div>
