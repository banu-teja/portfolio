<script lang="ts">
	import type { PageData } from './$types';
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Bhanu Teja</title>
</svelte:head>

<main>
	<h1 class="mb-8 text-3xl font-bold">Blog</h1>

	<div class="space-y-8">
		{#each data.posts as post}
			<BlogPostCard {post} />
		{/each}
	</div>
</main>
