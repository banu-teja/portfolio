<script lang="ts">
	import type { BlogPostFull } from '$lib/types/blog';

	export let post: BlogPostFull;
</script>

<article class="mx-auto max-w-2xl">
	<header class="mb-8">
		<h1 class="mb-2 text-4xl font-bold">{post.title}</h1>
		<div class="flex justify-between text-sm text-gray-500">
			<span>{post.date}</span>
			<span>{post.readingTime}</span>
		</div>
	</header>

	<div class="prose prose-lg">
		<slot />
	</div>
</article>
