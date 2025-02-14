<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-4 grid grid-cols-2 gap-4 xl:w-[60%] xl:grid-cols-4">
	{@render children()}
</div>
