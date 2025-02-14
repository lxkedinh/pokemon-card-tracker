<script lang="ts">
	let { id, name, image } = $props();
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { toast } from 'svelte-sonner';
	import Button from 'components/ui/button/button.svelte';
	import { PokemonApiUrl } from '$lib/utils';
	let hovered = $state(false);

	async function addCard() {
		try {
			const response = await fetch(`${PokemonApiUrl}/cards/${id}`);
			if (response.status != 200) {
				throw new Error('Could not add card. Try again.');
			}

			const data = await response.json();
			console.log(data);
			toast('Added card!');
		} catch (err) {
			console.log(err);
			toast('Couldn not add card. Try again.');
		}
	}
</script>

<div
	role="img"
	class="relative h-full w-full"
	onmouseover={() => (hovered = true)}
	onfocus={() => (hovered = true)}
	onblur={() => (hovered = false)}
	onmouseout={() => (hovered = false)}
>
	<img src={image + '/high.webp'} alt={name} class={['h-full transition-all', { hovered }]} />
	<Button
		variant="ghost"
		size="icon"
		onclick={() => addCard()}
		class={`${hovered ? 'opacity-100' : 'opacity-0'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-ctp-green transition-all hover:bg-ctp-surface2 hover:text-ctp-green active:bg-ctp-surface0`}
	>
		<CheckOutline class="size-10" />
	</Button>
</div>

<style>
	img.hovered {
		filter: brightness(60%);
	}
</style>
