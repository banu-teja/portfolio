<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';
	import { Icon, ArrowRight } from 'svelte-hero-icons';

	export let post: BlogPost;
</script>

<a href={`/blog/${post.slug}`} class="group block h-full">
	<article
		class="h-full flex flex-col justify-between border-t border-b border-border py-8 transition-all duration-300 hover:bg-surface group-hover:px-4"
	>
		<div>
			<div class="flex items-center gap-2 mb-4">
				<time class="text-xs font-mono text-muted-foreground">{post.date}</time>
				<span class="h-1 w-1 rounded-full bg-border"></span>
				<span class="text-xs text-muted-foreground">{post.readingTime}</span>
			</div>

			<h2 class="mb-3 text-2xl font-bold text-primary group-hover:underline decoration-1 underline-offset-4">
				{post.title}
			</h2>

			<p class="mb-6 text-muted-foreground leading-relaxed text-sm line-clamp-3">
				{post.excerpt}
			</p>
		</div>

		<div class="flex items-center text-sm font-semibold text-primary mt-auto">
			Read Article
			<Icon src={ArrowRight} class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
		</div>
	</article>
</a>
