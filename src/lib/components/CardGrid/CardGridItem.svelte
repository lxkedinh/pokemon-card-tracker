<script lang="ts">
	let { card } = $props();
	import * as Dialog from '$lib/components/ui/dialog';
	import CardImage from 'components/Card/CardImage.svelte';
	import CardInfo from 'components/Card/CardInfo.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<CardImage {...card} />
	</Dialog.Trigger>
	<CardInfo {card} />
</Dialog.Root>
