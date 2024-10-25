<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';

	export let post: BlogPost;
</script>

<a href={`/blog/${post.slug}`} class="block">
	<article
		class="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
	>
		<div class="p-6">
			<h2 class="mb-2 text-2xl font-semibold">{post.title}</h2>
			<p class="mb-4 text-gray-600">{post.excerpt}</p>
			<div class="flex justify-between text-sm text-gray-500">
				<span>{post.date}</span>
				<span>{post.readingTime}</span>
			</div>
		</div>
	</article>
</a>
