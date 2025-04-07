<script lang="ts">
	import { goto } from '$app/navigation';

	const products = [
		{
			title: 'Ebook',
			url: '/ebook'
		},
		{
			title: 'Music',
			url: '#'
		},
		{
			title: 'Digital Art',
			url: '#'
		},
		{
			title: 'Application',
			url: '#'
		}
	];
</script>

<section class="mt-8 flex w-full select-none items-center justify-center p-12">
	<div class="flex flex-col items-center justify-center lg:flex-row">
		<img class="w-[80%] rounded-full pb-4 lg:hidden" src="./headline-welcome.jpg" alt="welcome" />
		<div class="flex w-full flex-col lg:w-[40rem] lg:pr-12">
			<h1 class="font-nerko-one text-6xl font-bold text-purple-700 lg:text-[6rem] lg:leading-[4.5rem]">Selamat Datang di Barang Bagus</h1>
			<p class="hidden text-justify font-mono text-lg text-slate-700 shadow-lg shadow-rose-500 lg:py-12">
				Banyak hal yang bisa meningkatkan value dan kualitas dirimu. Barang Bagus adalah tempat terbaik untuk produk digital yang kamu butuhkan. Kualitas adalah hal yang paling kami utamakan, kami bahkan menyediakan kolom kritik dan saran untuk kebutuhan testimonial maupun koreksi bagi kami. Jangan
				ragu, beli sekarang! Kualitas maksimal dengan harga yang masuk akal.
			</p>
			<p class="py-6 text-justify text-lg text-slate-700">Barang Bagus adalah tempat terbaik untuk produk digital yang kamu butuhkan. Jangan ragu, beli sekarang! Kamu akan mendapatkan produk berkualitas dengan harga yang masuk akal.</p>
			<button class="w-fit place-self-center rounded-full bg-purple-400 px-12 py-6 text-lg font-bold text-white shadow-md active:shadow-lg lg:place-self-start">Check All Products</button>
		</div>
		<img class="hidden w-[40%] rounded-full py-2 lg:block" src="./headline-welcome.jpg" alt="welcome" />
	</div>
</section>

<section class="flex w-full select-none flex-col items-center justify-center p-12">
	<h1 class="text-center font-nerko-one text-4xl font-bold text-slate-700">Pilih Produk Digital mu</h1>
	<div class="mt-6 flex w-max snap-x snap-mandatory justify-center gap-4 overflow-auto">
		{#each products as product}
			<button class="flex h-60 w-60 snap-always items-center justify-center rounded-2xl bg-purple-300 font-nerko-one text-xl text-purple-600" on:click={() => goto(product.url)}>{product.title}</button>
		{/each}
	</div>
</section>
