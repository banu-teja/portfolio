<script lang="ts">
	import type { Comment } from '$lib/types';

	export let comments: Comment[];
</script>

<div class="border-t border-border pt-12 mb-12">
	<h3 class="text-foreground mb-8 text-2xl font-bold">Comments ({comments.length})</h3>
	<div class="space-y-8">
		{#each comments as comment}
			<div class="group flex gap-4 p-4 transition-colors hover:bg-surface/50">
				<div class="flex-shrink-0">
					<img
						src={comment.avatar}
						alt="{comment.name}"
						class="h-10 w-10 rounded-full ring-2 ring-border"
						loading="lazy"
					/>
				</div>
				<div class="flex-1">
					<div class="flex items-center justify-between mb-2">
						<h4 class="font-bold text-foreground transition-colors">{comment.name}</h4>
						<time class="text-xs text-muted-foreground font-mono">{comment.date}</time>
					</div>
					<p class="text-muted-foreground leading-relaxed text-sm transition-colors">
						{comment.content}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
