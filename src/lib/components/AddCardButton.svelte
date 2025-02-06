<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { PlusOutline } from 'flowbite-svelte-icons';
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Button
	id="desktop-add-card-button"
	variant="outline"
	href="/search"
	class="mb-4 hidden rounded-md border-ctp-rosewater bg-ctp-surface1 text-ctp-rosewater hover:bg-ctp-surface2 active:bg-ctp-surface0 xl:inline-block"
	>Add Card
</Button>

<Button
	id="mobile-add-card-button"
	variant="ghost"
	href="/search"
	size="icon"
	class="fixed bottom-4 right-4 z-[999] size-12 rounded-full bg-ctp-surface1 active:bg-ctp-surface0 xl:hidden"
>
	<PlusOutline class="size-6 text-ctp-rosewater" />
</Button>
