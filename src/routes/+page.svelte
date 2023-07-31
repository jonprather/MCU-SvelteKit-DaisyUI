<script lang="ts">
	import Breadcrumbs from '$lib/components/+Breadcrumbs.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
</script>

<Breadcrumbs path={$page.url.pathname} />
<div class=" m-auto pt-20" />
