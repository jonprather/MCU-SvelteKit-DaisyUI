<script lang="ts">
	export let videoUrl = '';
	function convertYouTubeUrl(url: string) {
		if (url.includes('youtu.be')) {
			const videoId = url.split('/').pop();
			return `https://www.youtube.com/embed/${videoId}`;
		} else {
			return url;
		}
	}
	const embeddableUrl = convertYouTubeUrl(videoUrl);
</script>

<div class="video-responsive">
	<iframe
		title="Video Player"
		width="853"
		height="480"
		src={embeddableUrl}
		frameborder="0"
		allowfullscreen
	/>
</div>

<style>
	.video-responsive {
		position: relative;
		padding-bottom: 56.25%; /* Aspect ratio */
		height: 0;
		overflow: hidden;
		object-position: cover;
	}

	.video-responsive iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
