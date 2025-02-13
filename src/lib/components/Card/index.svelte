<script lang="ts">
	import { scaleConversion } from '$lib/utils';

	let { img, name, set, id } = $props();

	const maxRotation = 30;

	const width = 275;
	const height = 380;

	let rotX = $state(0);
	let rotY = $state(0);
	let brightness = $state(1);
	let style = $derived(`
		--rotateX: ${rotX}deg;
		--rotateY: ${rotY}deg;
		--brightness: ${brightness};
	`);

	function onmousemove(event: MouseEvent) {
		rotX = scaleConversion(event.offsetY, [0, height], [-maxRotation, maxRotation]);
		rotY = scaleConversion(event.offsetX, [0, width], [maxRotation, -maxRotation]);
		brightness = scaleConversion(event.offsetY, [0, width], [1.2, 0.7]);
	}

	function onmouseleave(event: MouseEvent) {
		rotX = 0;
		rotY = 0;
		brightness = 1;
	}
</script>

<div class="card" {onmousemove} {onmouseleave} role="img">
	<img {style} src={img + '/high.webp'} alt={name + ' ' + set} width="{width}px" />
</div>

<style>
	.card {
		--rotateX: 0;
		--rotateY: 0;

		transform: scale(1);
		perspective: 600px;
	}

	.card:hover {
		transform: scale(1.2);
	}

	.card,
	img {
		transition: all 150ms ease-in-out;
	}

	img {
		transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
		filter: brightness(var(--brightness));
	}
</style>
