<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import type { MovieDetail } from '../+layout.server';
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';

	export let data: PageData;
	let film = data.films.find((film) => $page.params.slug.startsWith(String(film.id)));

	const { release_date, phase, duration, chronology } = film as MovieDetail;

	let stats = [
		// { title: 'release_date', value: release_date },
		{ title: 'phase', value: phase },
		{ title: 'runtime', value: duration + ' min' },
		{ title: 'chronology', value: chronology }
		// { title: 'runtime', value: runtime }
	];
</script>

<Breadcrumbs path={$page.url.pathname} />
{#if film}
	<div class="hero min-h-screen bg-base-200 rounded">
		<div class="hero-content flex-col lg:flex-row">
			<img alt="MCU cover" src={film.cover_url} class="max-w-sm rounded-lg shadow-2xl" />
			<div class="p-4">
				<h1 class="text-5xl font-bold">{film.title}</h1>
				<p class="py-6">
					{film.overview}
				</p>

				<div class="stats stats-vertical lg:stats-horizontal shadow mt-10">
					{#each stats as { title, value }}
						<div class="stat">
							<div class="stat-title capitalize">{title}</div>
							<div class="stat-value">{value}</div>
						</div>
					{/each}
				</div>

				<div class="stat mt-10">
					<div class="stat-title capitalize">Release date</div>
					<div class="stat-value">{film.release_date}</div>
				</div>
			</div>
		</div>
	</div>
{/if}
