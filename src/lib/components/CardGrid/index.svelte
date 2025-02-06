<script lang="ts">
	import CardGridItem from 'components/CardGrid/CardGridItem.svelte';
</script>

<div class="mx-4 grid grid-cols-2 gap-4 xl:w-[60%] xl:grid-cols-4">
	{#each Array(6) as _, i (i)}
		<CardGridItem src="/umbreon-high.png" name="umbreon ex" />
	{/each}
</div>
