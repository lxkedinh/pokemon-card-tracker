<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Card from '$lib/components/Card/index.svelte';
	let { src, name } = $props();
</script>

<Dialog.Content class="w-3/4 rounded-lg">
	<Dialog.Header>
		<Card {src} {name} />
		<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
		<Dialog.Description>
			This action cannot be undone. This will permanently delete your account and remove your data
			from our servers.
		</Dialog.Description>
	</Dialog.Header>
</Dialog.Content>
