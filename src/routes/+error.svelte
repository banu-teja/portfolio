<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - {$page.error?.message || 'Error'}</title>
</svelte:head>

<main class="mx-auto max-w-2xl py-16 text-center">
	<h1 class="mb-4 text-4xl font-bold">{$page.status}</h1>
	<p class="mb-8 text-xl text-gray-600">{$page.error?.message || 'An error occurred'}</p>
	<a href="/" class="font-medium text-teal-600 hover:text-teal-800">Go back to home</a>
</main>
