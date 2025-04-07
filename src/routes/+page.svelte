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

<section class="mt-8 flex w-full items-center justify-center p-12 select-none">
	<div class="flex flex-col items-center justify-center lg:flex-row">
		<img class="animate-roll-wiggle w-[80%] rounded-full pb-4 lg:hidden" src="./headline-welcome.jpg" alt="welcome" />
		<div class="flex w-full flex-col lg:w-[40rem] lg:pr-12">
			<h1 class="font-nerko-one text-5xl font-extrabold text-purple-700 lg:text-[5rem] lg:leading-[4.5rem]">Selamat Datang di Barang Bagus</h1>
			<p class="hidden text-justify font-mono text-lg text-slate-700 text-shadow-lg text-shadow-rose-500 lg:py-12">
				Banyak hal yang bisa meningkatkan value dan kualitas dirimu. Barang Bagus adalah tempat terbaik untuk produk digital yang kamu butuhkan. Kualitas adalah hal yang paling kami utamakan, kami bahkan menyediakan kolom kritik dan saran untuk kebutuhan testimonial maupun koreksi bagi kami. Jangan
				ragu, beli sekarang! Kualitas maksimal dengan harga yang masuk akal.
			</p>
			<p class="py-6 text-justify text-lg text-slate-700">Barang Bagus adalah tempat terbaik untuk produk digital yang kamu butuhkan. Jangan ragu, beli sekarang! Kamu akan mendapatkan produk berkualitas dengan harga yang masuk akal.</p>
			<button class="w-fit place-self-center rounded-full bg-purple-400 px-12 py-6 text-lg font-bold text-white shadow-md active:shadow-lg lg:place-self-start">Check All Products</button>
		</div>
		<img class="animate-roll-wiggle hidden w-[40%] rounded-full py-2 lg:block" src="./headline-welcome.jpg" alt="welcome" />
	</div>
</section>

<h1 class="font-nerko-one text-center text-xl font-extrabold text-purple-800 lg:text-2xl">Pilih Produk Digital mu</h1>
<section class="snap-x snap-mandatory scroll-pl-4 overflow-x-auto scroll-smooth pb-8 lg:overflow-x-visible">
	<div class="mt-6 flex w-max gap-4 lg:w-full lg:justify-center">
		{#each products as product}
			<button
				class="font-nerko-one flex h-40 w-50 flex-shrink-0 cursor-pointer snap-center rounded-2xl bg-purple-400 mask-r-from-10% mask-b-from-50% mask-radial-from-100% mask-radial-to-50% mask-radial-at-bottom-right p-8 text-xl font-bold text-white shadow-lg transition-all ease-in-out hover:bg-amber-300 hover:mask-r-from-0% hover:mask-b-from-0% hover:mask-radial-to-100% hover:mask-radial-at-top-left hover:text-slate-800 lg:h-60 lg:w-70"
				onclick={() => goto(product.url)}>{product.title}</button
			>
		{/each}
	</div>
</section>

<style lang="postcss">
	@keyframes roll-wiggle {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(5px) rotate(5deg);
		}
		100% {
			transform: translateX(0);
		}
	}

	.animate-roll-wiggle {
		animation: roll-wiggle 1s ease-in-out infinite;
		transform-origin: bottom center; /* This is the magic! */
	}
</style>
