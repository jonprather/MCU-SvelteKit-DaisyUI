<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';
	import { page } from '$app/stores';
	import type { MovieDetail } from './+layout.server';
	export let data: PageData;
	let films = data?.films;
	$: phases = 'All';
	$: filteredArr = films.slice().filter(filterByPhase);
	let phasesArr = Array.from({ length: 7 }, (n, i) => i);

	let numberOfPhases = 0; //to be used in selectElement
	films.forEach((film) => {
		let tempBiggest = film.phase ?? 0;
		if (tempBiggest > numberOfPhases) {
			numberOfPhases = tempBiggest;
		}
	});
	$: filterByPhase = (film: MovieDetail) => {
		if (String(phases) === 'All') {
			return true;
		}
		return String(film.phase) === phases.split('-')[1];
	};
</script>

<Breadcrumbs path={$page.url.pathname} />

<div class="flex justify-center items-center flex-col mx-auto bg-slate-800">
	<label for="select-phase" class="mt-8 mb-4 text-md uppercase">Select Phase</label>
	<select id="select-phase" bind:value={phases} class="select select-bordered w-full max-w-xs">
		{#each phasesArr as phase}
			{#if phase === 0}
				<option selected>All</option>
			{:else}
				<option>Phase-{phase}</option>
			{/if}
		{/each}
	</select>
</div>
<div class=" bg-slate-800">
	<div
		class=" grid justify-center p-1 sm:p-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto pt-20"
	>
		{#each filteredArr as { title, id, cover_url, overview } (title)}
			<div class="card md:w-96 bg-slate-700 shadow-xl mb-8">
				<figure><img src={cover_url} alt="Cover " loading="lazy" /></figure>
				<div class="card-body">
					<h2 class="card-title">{title}</h2>

					<p>{overview ? `${overview?.split(' ')?.slice(0, 20)?.join(' ')}...` : 'N/A'}</p>

					<a class="text-red-400" href="/movies/{id}-{title.replace(/\s+/g, '-')}">Details</a>
				</div>
			</div>
		{/each}
	</div>
</div>
