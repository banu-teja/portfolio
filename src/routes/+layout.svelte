<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
	<Header />
	{@render children()}
	<Footer />
</div>

<!-- <div class="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
	<main class="max-w-[60ch] mx-auto w-full space-y-6">
	</main>
</div> -->

<!-- 

<main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
</main> -->

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
