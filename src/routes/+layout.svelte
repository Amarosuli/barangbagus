<script lang="ts">
	import '../app.css';

	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let isCommentOpen: Boolean = $state(false);
</script>

{#if isCommentOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div transition:fade={{ duration: 200 }} onclick={() => (isCommentOpen = false)} class="fixed z-30 flex h-full w-full items-center justify-center bg-purple-400/90">Form Comment</div>
{/if}

<div class="fixed top-0 -z-10 h-full w-full bg-stone-50">
	<div class="absolute top-0 right-0 bottom-auto left-auto h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
</div>
<div class="container mx-auto">
	<div class="flex h-12 w-full items-center justify-between border-b p-4 lg:p-8">
		<button onclick={() => goto('/')}>
			<h1 class="font-nerko-one text-md font-extrabold text-purple-800 transition-colors ease-in-out hover:text-slate-500 lg:text-2xl">😍 Barang Bagus</h1>
		</button>
		<button onclick={() => (isCommentOpen = true)} class="text-md font-semibold text-slate-600 transition-colors ease-in-out hover:text-purple-700 lg:text-2xl">Saran & Testimonial</button>
	</div>

	{@render children?.()}
</div>
