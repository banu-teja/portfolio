<script lang="ts">
	import type { Comment } from '$lib/types';

	export let comments: Comment[];
</script>

<div class="border-t border-zinc-800 pt-12 mb-12">
	<h3 class="text-white mb-8 text-2xl font-bold">Comments ({comments.length})</h3>
	<div class="space-y-8">
		{#each comments as comment}
			<div class="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-zinc-900/50">
				<div class="flex-shrink-0">
					<img
						src={comment.avatar}
						alt="{comment.name}"
						class="h-10 w-10 rounded-full ring-2 ring-zinc-800"
						loading="lazy"
					/>
				</div>
				<div class="flex-1">
					<div class="flex items-center justify-between mb-2">
						<h4 class="font-bold text-zinc-200 group-hover:text-white transition-colors">{comment.name}</h4>
						<time class="text-xs text-zinc-600 font-mono">{comment.date}</time>
					</div>
					<p class="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
						{comment.content}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
