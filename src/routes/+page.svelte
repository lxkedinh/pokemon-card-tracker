<script lang="ts">
	import CardGrid from 'components/CardGrid/index.svelte';
	import AddCardButton from 'components/AddCardButton.svelte';
	import type { PokemonCard } from '$lib/types.js';
	import CardImage from '$lib/components/Card/CardImage.svelte';
	import CardInfo from 'components/Card/CardInfo.svelte';
	import CardGridItem from 'components/CardGrid/CardGridItem.svelte';

	let { data } = $props();
	let cards: PokemonCard[] = data.cards;
</script>

<AddCardButton />
<CardGrid>
	{#each cards as card, i (i)}
		<CardGridItem {card} />
	{/each}
</CardGrid>
