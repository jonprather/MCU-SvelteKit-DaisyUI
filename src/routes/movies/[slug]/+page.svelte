<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import type { MovieDetail } from '../+layout.server';
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';
	import YoutubePlayer from '$lib/components/+YoutubePlayer.svelte';

	export let data: PageData;
	let filmId = Number($page.params.slug.split('-')[0]);
	let film = data.films.find((film) => film.id === filmId);

	const { release_date, phase, duration, chronology } = film as MovieDetail;

	let stats = [
		// { title: 'release_date', value: release_date },
		{ title: 'runtime', value: duration ? duration + ' min' : 'N/A' },
		{ title: 'phase', value: phase },
		{ title: 'chronology', value: chronology }

		// { title: 'runtime', value: runtime }
	];
</script>

<Breadcrumbs path={$page.url.pathname} />
{#if film}
	<div class="hero min-h-screen bg-slate-800 rounded">
		<div class="hero-content flex-col lg:flex-row">
			<img alt="MCU cover" src={film.cover_url} class="sm:max-w-sm rounded-lg shadow-2xl" />
			<div class="p-4">
				<h1 class="text-5xl font-bold">{film.title}</h1>

				<p class="py-6 max-w-[70ch]">
					{film.overview ?? 'N/A'}
				</p>

				<div class="stats stats-vertical lg:stats-horizontal shadow mt-10">
					{#each stats as { title, value }}
						<div class="stat">
							<div class="stat-title capitalize">{title}</div>
							<div class="stat-value">{value ?? 'N/A'}</div>
						</div>
					{/each}
				</div>

				<div class="stat mt-10">
					<div class="stat-title capitalize">Release date</div>
					<div class="stat-value">{film.release_date ?? 'N/A'}</div>
				</div>
			</div>
		</div>
	</div>
	{#if film?.trailer_url}
		<div class="pt-10 bg-slate-900">
			<h2 class=" text-center text-4xl font-bold pt-10 pb-4">Release Trailer</h2>
			<div class=" mx-auto p-2 sm:p-10 sm:max-w-[70%]">
				<YoutubePlayer videoUrl={film.trailer_url} />
			</div>
		</div>
	{/if}
{/if}
