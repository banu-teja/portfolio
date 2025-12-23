<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { preloadCode } from '$app/navigation';
	import { navItems } from '$lib/config';
	import { onMount } from 'svelte';
	import { setPage } from '$lib/stores';
	import ChatWindow from '$lib/components/ChatWindow.svelte';

	let { children, data } = $props();

	setPage(data.path);

	onMount(() => {
		navItems.map((item) => item.route).forEach(preloadCode);
	});
</script>

<div class="relative flex min-h-screen flex-col bg-background text-primary selection:bg-white selection:text-black overflow-x-hidden">

	<Header />

	<div class="relative z-10 mx-auto w-full max-w-7xl flex-grow px-4 sm:px-6 lg:px-8 pt-24 pb-12">
		{#key data.path}
			<main
				id="main"
				tabindex="-1"
				in:fade={{ delay: 150, duration: 300 }}
				out:fade={{ duration: 150 }}
				class="w-full min-h-[60vh]"
			>
				{@render children()}
			</main>
		{/key}
	</div>

	<Footer />
	<ChatWindow />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		color-scheme: dark;
	}
	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: #000000;
		color: #ffffff;
	}

	/* Custom Scrollbar - Minimal */
	:global(::-webkit-scrollbar) {
		width: 6px;
	}
	:global(::-webkit-scrollbar-track) {
		background: #000000;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #333333;
		border-radius: 0px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #555555;
	}
</style>
