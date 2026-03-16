<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
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
	<h1 class="mb-6 text-3xl font-bold">Uni Poster</h1>

	<div class="mb-6">
		<img
			src="/images/uniposter-icon.png"
			alt="Uni Poster"
			class="h-auto max-w-full rounded-lg shadow-lg"
		/>
	</div>

	<div class="prose mb-8 max-w-none">
		<p>お知らせなどを複数のアプリを左右するのは不便ですよね？</p>
		<p>本アプリを使えば同時投稿をワンステップで行えます。</p>
	</div>

	<div class="mb-8">
		<h2 class="mb-4 text-2xl font-bold">Download</h2>

		<div class="flex gap-6">
			<a
				href="https://play.google.com/store/apps/details?id=cc.zin3.uni_poster"
				target="_blank"
				rel="noopener noreferrer"
				class="block p-2 transition-opacity hover:opacity-80"
			>
				<i class="fab fa-google-play"></i> Google Play
			</a>
			<a
				href="https://apps.apple.com/jp/app/uni-poster/id6747512031"
				target="_blank"
				rel="noopener noreferrer"
				class="block p-2 transition-opacity hover:opacity-80"
			>
				<i class="fab fa-apple"></i> App Store
			</a>
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
