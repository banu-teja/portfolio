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
	<!-- <link rel="stylesheet" href="/css/root.css" /> -->
	<link rel="stylesheet" href="/css/fonts.css" />
	<link rel="stylesheet" href="/css/typography.css" />
	<!-- <link rel="stylesheet" href="/css/layout.css" /> -->
	<!-- <link rel="stylesheet" href="/css/components.css" /> -->
	<!-- <link rel="stylesheet" href="/css/header-and-footer.css" /> -->
	<!-- <link rel="stylesheet" href="/css/forms.css" /> -->
	<!-- <link rel="stylesheet" href="/css/animation.css" />
	<link rel="stylesheet" href="/css/utilities.css" /> -->
	<link rel="stylesheet" href="/css/code.css" />
	<link rel="stylesheet" href="/css/prism.css" />
	<!-- <link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="http://{siteURL}/api/rss.xml"
	/> -->
</svelte:head>

<div class="flex min-h-screen flex-col">
	{#if showBanner}
		<div class="bg-yellow-100 border-b border-yellow-200 text-yellow-700 px-4 py-3 sm:px-6 lg:px-8 text-center">
			<div class="flex items-center justify-center">
				<p class="text-sm font-medium">
					This portfolio is under active development. Expect awesome things soon! ✨
				</p>
				<span class="ml-2 cursor-pointer" on:click|preventDefault={dismissBanner} role="button" title="Dismiss">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18-18M6 6l12 12" />
          </svg>
        </span>
			</div>
		</div>
	{/if}

	<div class="mx-auto w-full max-w-2xl flex-grow px-4 py-12 sm:px-6 lg:px-8">
		<Header />
		{#key data.path}
			<main
				id="main"
				tabindex="-1"
				in:fade={{ delay: 150, duration: 150 }}
				out:fade={{ duration: 100 }}
			>
				{@render children()}
			</main>
		{/key}
	</div>
	<div class="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
		<Footer />
	</div>
</div>

<ChatWindow />

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
