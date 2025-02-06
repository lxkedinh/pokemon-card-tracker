<script lang="ts">
	let { src, name } = $props();

	let mouse = $state({ x: 0, y: 0 });

	function onpointermove(event: MouseEvent) {
		mouse.x = event.offsetX;
		mouse.y = event.offsetY;
	}
</script>

<div class="card" {onpointermove}>
	<img {src} alt={name} />
</div>

<style>
	img {
		transition: all 250ms ease-in-out;
	}
</style>
