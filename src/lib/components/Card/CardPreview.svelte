<script lang="ts">
	let { src, alt } = $props();
	import { CheckOutline } from 'flowbite-svelte-icons';
	import Button from 'components/ui/button/button.svelte';
	let hovered = $state(false);

	function addCard() {}
</script>

<button
	class="relative h-full w-full"
	onmouseover={() => (hovered = true)}
	onfocus={() => (hovered = true)}
	onblur={() => (hovered = false)}
	onmouseout={() => (hovered = false)}
>
	<img {src} {alt} class={['h-full transition-all', { hovered }]} />
	<Button
		variant="ghost"
		size="icon"
		class={`${hovered ? 'opacity-100' : 'opacity-0'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-ctp-green transition-all hover:bg-ctp-surface2 hover:text-ctp-green`}
	>
		<CheckOutline class="size-10" />
	</Button>
</button>

<style>
	img.hovered {
		filter: brightness(60%);
	}
</style>
