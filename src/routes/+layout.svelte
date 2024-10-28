<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { preloadCode } from '$app/navigation';
	import { navItems } from '$lib/config';
	import { onMount } from 'svelte';
	import { setPage } from '$lib/stores';

	let { children, data } = $props();

	setPage(data.path);

	onMount(() => {
		navItems.map((item) => item.route).forEach(preloadCode);
	});
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

<div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
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
