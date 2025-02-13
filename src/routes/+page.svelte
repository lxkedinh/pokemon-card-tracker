<script lang="ts">
	import CardGrid from 'components/CardGrid/index.svelte';
	import AddCardButton from 'components/AddCardButton.svelte';
	import type { PokemonCard } from '$lib/types.js';
	import Card from '$lib/components/Card/index.svelte';

	let { data } = $props();
	let cards: PokemonCard[] = data.cards;
</script>

<AddCardButton />
<CardGrid>
	{#each cards as card, i (i)}
		<Card {...card} img={card.image} />
	{/each}
</CardGrid>
