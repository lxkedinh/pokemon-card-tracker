<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import CardImage from './CardImage.svelte';
	let { card } = $props();
</script>

<Dialog.Content class="flex w-3/4 flex-col justify-between rounded-lg">
	<Dialog.Header class="flex items-center">
		<CardImage {...card} />
		<Dialog.Title>{card.name}</Dialog.Title>
		<Dialog.Description>
			Set: {card.set}
		</Dialog.Description>
	</Dialog.Header>
</Dialog.Content>
