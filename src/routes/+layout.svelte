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
	import { browser } from '$app/environment';

	let { children, data } = $props();

	setPage(data.path);

	onMount(() => {
		navItems.map((item) => item.route).forEach(preloadCode);

		// Initialize Theme
		if (browser) {
			const isDark = localStorage.getItem('theme') === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
</script>

<div class="relative flex min-h-screen flex-col bg-background text-primary selection:bg-primary selection:text-background overflow-x-hidden">

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
