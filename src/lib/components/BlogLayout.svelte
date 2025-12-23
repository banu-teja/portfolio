<script lang="ts">
	import type { BlogPostFull } from '$lib/types/blog';

	export let post: BlogPostFull;
</script>

<article class="mx-auto max-w-3xl px-4 sm:px-6">
	<header class="mb-12 text-center md:text-left">
		<div class="flex items-center justify-center md:justify-start gap-3 mb-6">
			<span class="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-none border border-primary/20">
				Blog Post
			</span>
			<time class="text-xs text-muted-foreground font-mono uppercase tracking-widest">{post.date}</time>
		</div>

		<h1 class="mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
			{post.title}
		</h1>

		<div class="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground border-b border-border pb-8">
			<div class="flex items-center gap-2">
				<div class="h-6 w-6 rounded-none bg-secondary"></div> <!-- Author Avatar Placeholder -->
				<span class="font-medium text-foreground">Bhanu Teja</span>
			</div>
			<span class="text-muted-foreground">•</span>
			<span>{post.readingTime} read</span>
		</div>
	</header>

	<div class="prose prose-zinc dark:prose-invert prose-lg max-w-none
		prose-headings:font-bold prose-headings:text-foreground
		prose-p:text-muted-foreground
		prose-a:text-primary prose-a:no-underline hover:prose-a:underline
		prose-strong:text-foreground
		prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded-none
		prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-none">
		<slot />
	</div>
</article>
