<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';
	import { page } from '$app/stores';
	export let data: PageData;
	let film = data?.films;
</script>

<Breadcrumbs path={$page.url.pathname} />
<div class=" bg-slate-800">
	<div class=" grid justify-center p-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto pt-20">
		{#each film as { title, id, cover_url, overview }}
			<div class="card w-96 bg-base-100 shadow-xl mb-8">
				<figure><img src={cover_url} alt="Cover " /></figure>
				<div class="card-body">
					<h2 class="card-title">{title}</h2>
					<p>{overview?.split(' ')?.slice(0, 20)?.join(' ')}...</p>
					<a href="/movies/{id}-{title.replace(/\s+/g, '-')}">Details</a>
				</div>
			</div>
		{/each}
	</div>
</div>
