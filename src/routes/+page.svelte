<script lang="ts">
	import CardGrid from 'components/CardGrid/index.svelte';
	import AddCardButton from 'components/AddCardButton.svelte';
	import WebsiteHeading from 'components/WebsiteHeading.svelte';
	import type { Card } from '$lib/types.js';

	let { data } = $props();
</script>

<AddCardButton />
<CardGrid>
	{#each data.cards as card, i (i)}
		<p>{card.name}</p>
	{/each}
</CardGrid>
