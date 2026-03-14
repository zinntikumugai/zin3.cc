<script lang="ts">
	import { profile } from '$lib/data/profile';
</script>

<div>
	<div class="text-center">
		<div class="pb-2" style="height: 200px;">
			<div class="pt-5"></div>
			<p>{profile.displayName}</p>
			<h1>{profile.username}</h1>
		</div>
		{#each profile.sections as section, i}
			<div class={i === 0 ? 'pb-2' : 'pb-2 pt-3'}>
				<h2>{section.heading}</h2>
				<div class="grid {section.gridClass}">
					{#each section.items as item}
						<div class="{item.cssClass} pb-3 pt-5">
							<a href={item.url}>
								{#if item.icon}<i class="{item.icon} mr-2"></i>{/if}
								<h3 class={item.icon ? 'inline-block' : ''}>{item.name}</h3>
								{#if item.handle}<p>{item.handle}</p>{/if}
							</a>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div class="pb-3 pt-5">
			<p>{profile.copyright}</p>
		</div>
	</div>
</div>
