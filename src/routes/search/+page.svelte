<script lang="ts">
	import Button from 'components/ui/button/button.svelte';
	import Input from 'components/ui/input/input.svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import CardGrid from 'components/CardGrid/index.svelte';
	import type { PokemonCardBrief } from '$lib/types';
	import CardPreview from 'components/Card/CardPreview.svelte';

	let { form } = $props();
	let results = form as PokemonCardBrief[];
</script>

<form class="flex gap-4" method="POST">
	<Input
		type="text"
		name="query"
		id="query"
		class="border-ctp-rosewater"
		placeholder="Search Pokemon Name"
	/>
	<Button
		type="submit"
		variant="ghost"
		size="icon"
		class="text-ctp-rosewater hover:bg-ctp-surface2 hover:text-ctp-rosewater active:bg-ctp-surface0"
	>
		<SearchOutline />
	</Button>
</form>

<CardGrid>
	{#each results as card, i (i)}
		{#if card.image}
			<CardPreview src={card.image + '/high.webp'} alt={card.name} />
		{/if}
	{/each}
</CardGrid>
