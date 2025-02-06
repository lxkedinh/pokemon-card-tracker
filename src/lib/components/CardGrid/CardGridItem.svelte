<script lang="ts">
	import Card from '$lib/components/Card/index.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import CardInfo from 'components/Card/CardInfo.svelte';
	let { src, name } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Card {src} {name} />
	</Dialog.Trigger>
	<CardInfo {src} {name} />
</Dialog.Root>
