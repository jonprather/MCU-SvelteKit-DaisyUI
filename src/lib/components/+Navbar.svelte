<script>
</script>

<!-- 
<Popover style="position: relative;">
	<PopoverButton>Solutions</PopoverButton>

	<PopoverPanel style="position: absolute; z-index: 10;">
		<div class="panel-contents">
			<a href="/analytics">Analytics</a>
			<a href="/engagement">Engagement</a>
			<a href="/security">Security</a>
			<a href="/integrations">Integrations</a>
		</div>

		<img src="/solutions.jpg" alt="" />
	</PopoverPanel>
</Popover> -->

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</button>
			<button
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				><ul />
				<li><a href="/">Home</a></li>
				<li><a href="/movies">Movies</a></li>
			</button>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">MCU</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
	</div>
</div>

<style>
	.panel-contents {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
</style>
