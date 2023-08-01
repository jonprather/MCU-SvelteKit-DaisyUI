<script>
	export let path = '';

	$: path = path;

	let segments = path?.split('/')?.filter(Boolean);
	segments = [''].concat(segments);
	segments = segments.map((word) => word.replace(/^\d+-/, ''));
</script>

<div class="text-sm breadcrumbs pl-2 pt-4 sm:pl-8 sm:pt-6 bg-slate-800">
	<ul>
		{#each segments as segment, index (segment)}
			<li class="capitalize">
				{#if index === segments.length - 1}
					{segment || 'Home'}
				{:else if index === 0}
					<a class="capitalize" href="/">Home</a>
				{:else}
					<a class="capitalize" href={segments.slice(0, index + 1).join('/')}>
						{segment}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
