<script lang="ts">
	import WebsiteHeading from 'components/WebsiteHeading.svelte';
	import Button from 'components/ui/button/button.svelte';
	import Input from 'components/ui/input/input.svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import CardGrid from 'components/CardGrid/index.svelte';

	let { form } = $props();
	console.log(form);
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

<CardGrid />
