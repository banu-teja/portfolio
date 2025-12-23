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

	let showBanner = $state(true);

	const dismissBanner = () => {
		showBanner = false;
	};

</script>

<svelte:head>
	<link rel="stylesheet" href="/css/vars.css" />
	<link rel="stylesheet" href="/css/fonts.css" />
	<link rel="stylesheet" href="/css/typography.css" />
	<link rel="stylesheet" href="/css/code.css" />
	<link rel="stylesheet" href="/css/prism.css" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
	{#if showBanner}
		<div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-100 text-yellow-800 px-4 py-3 sm:px-6 lg:px-8 text-center text-sm">
			<div class="flex items-center justify-center gap-2">
				<p class="font-medium">
					This portfolio is under active development. Expect awesome things soon! ✨
				</p>
        <button class="text-yellow-600 hover:text-yellow-900 transition-colors" onclick={dismissBanner} title="Dismiss" aria-label="Dismiss banner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18-18M6 6l12 12" />
          </svg>
        </button>
			</div>
		</div>
	{/if}

	<div class="mx-auto w-full max-w-6xl flex-grow px-4 sm:px-6 lg:px-8 pt-8 pb-12">
		<Header />
		{#key data.path}
			<main
				id="main"
				tabindex="-1"
				in:fade={{ delay: 100, duration: 150 }}
				out:fade={{ duration: 100 }}
				class="w-full"
			>
				{@render children()}
			</main>
		{/key}
	</div>
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-8">
		<Footer />
	</div>
</div>

<ChatWindow />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: #f8fafc; /* slate-50 */
	}
</style>
