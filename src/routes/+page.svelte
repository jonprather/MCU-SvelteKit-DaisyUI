<script lang="ts">
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
</script>

<div class=" m-auto">
	<Breadcrumbs path={$page.url.pathname} />

	<div class="hero min-h-screen bg-slate-800">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">MCU</h1>
				<p class="py-6">A marvel Comic Universe Website.</p>
				<a class="btn btn-primary" href="/movies">Movies</a>
			</div>
		</div>
	</div>
</div>
