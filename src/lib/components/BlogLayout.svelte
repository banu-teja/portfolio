<script lang="ts">
	import type { BlogPostFull } from '$lib/types/blog';

	export let post: BlogPostFull;
</script>

<article class="mx-auto max-w-3xl px-4 sm:px-6">
	<header class="mb-12 text-center md:text-left">
		<div class="flex items-center justify-center md:justify-start gap-3 mb-6">
			<span class="px-3 py-1 text-xs font-semibold tracking-wide uppercase text-accent bg-accent/10 rounded-full border border-accent/20">
				Blog Post
			</span>
			<time class="text-xs text-zinc-500 font-mono uppercase tracking-widest">{post.date}</time>
		</div>

		<h1 class="mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
			{post.title}
		</h1>

		<div class="flex items-center justify-center md:justify-start gap-4 text-sm text-zinc-400 border-b border-zinc-800 pb-8">
			<div class="flex items-center gap-2">
				<div class="h-6 w-6 rounded-full bg-zinc-700"></div> <!-- Author Avatar Placeholder -->
				<span class="font-medium text-zinc-200">Bhanu Teja</span>
			</div>
			<span class="text-zinc-600">•</span>
			<span>{post.readingTime} read</span>
		</div>
	</header>

	<div class="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-400 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-accent prose-code:bg-zinc-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
		<slot />
	</div>
</article>
