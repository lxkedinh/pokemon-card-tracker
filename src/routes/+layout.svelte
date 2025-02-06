<script lang="ts">
	import '../app.css';
	import WebsiteHeading from 'components/WebsiteHeading.svelte';
	let { children } = $props();
	import Button from 'components/ui/button/button.svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-col items-center gap-4">
	<WebsiteHeading />
	<Button variant="ghost" size="icon" class="hover:bg-ctp-surface1 active:bg-ctp-surface0" href="/"
		><HomeSolid class="size-10 text-ctp-sapphire" /></Button
	>
	{@render children()}
</div>
