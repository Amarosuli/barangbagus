<script lang="ts">
	import { fade } from 'svelte/transition';
	import '../app.css';
	import { goto } from '$app/navigation';

	let isCommentOpen: Boolean = false;
</script>

{#if isCommentOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div transition:fade={{ duration: 200 }} on:click={() => (isCommentOpen = false)} class="fixed z-30 flex h-full w-full items-center justify-center bg-purple-400/90">Form Comment</div>
{/if}

<div class="fixed top-0 -z-10 h-full w-full bg-stone-50">
	<div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
</div>
<div class="container mx-auto">
	<div class="flex h-12 w-full items-center justify-between border-b p-4 lg:p-8">
		<button on:click={() => goto('/')}>
			<h1 class="font-nerko-one text-xl text-purple-800 lg:text-3xl">😍 Barang Bagus</h1>
		</button>
		<button on:click={() => (isCommentOpen = true)} class="text-sm font-bold text-slate-600 lg:text-xl">Saran, Komentar & Testimonial</button>
	</div>

	<slot></slot>
</div>
