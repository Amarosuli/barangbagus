<script>
	import '../app.css';
</script>

<div class="absolute top-0 -z-10 h-full w-full bg-stone-50">
	<div
		class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
	></div>
</div>
<div class="container mx-auto">
	<div class="flex h-12 w-full items-center justify-between border-b p-4 lg:p-8">
		<h1 class="font-nerko-one text-xl text-purple-800 lg:text-3xl">😍 Barang Bagus</h1>
		<h1 class="text-sm font-bold text-slate-600 lg:text-xl">Komentar & Testimonial</h1>
	</div>

	<slot></slot>
</div>
