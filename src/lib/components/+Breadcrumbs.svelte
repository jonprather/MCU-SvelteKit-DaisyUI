<script>
	export let path = '';
	import { page } from '$app/stores';

	$: path = path;

	let segments = path?.split('/')?.filter(Boolean);
	segments = [''].concat(segments);
	segments = segments.map((word) => word.replace(/^\d+-/, ''));
</script>

<div class="text-sm breadcrumbs">
	<ul>
		{#each segments as segment, index (segment)}
			<li>
				{#if index === 0}
					<a href="/">Home </a>
				{:else}
					<a href={segments.slice(0, index + 1).join('/')}>
						{segment}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
