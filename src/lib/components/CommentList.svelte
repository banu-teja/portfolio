<script lang="ts">
	import type { Comment } from '$lib/types';

	export let comments: Comment[];
</script>

<div class="border-t border-charcoal-200 pt-8 mb-12">
	<h3 class="text-2xl font-serif font-bold text-charcoal-800 mb-6">Comments ({comments.length})</h3>
	<div class="space-y-8">
		{#each comments as comment}
			<div class="flex space-x-4">
				<img src={comment.avatar} alt="{comment.name}'s Avatar" class="w-12 h-12 rounded-full" />
				<div>
					<h4 class="font-semibold text-charcoal-800">{comment.name}</h4>
					<p class="text-sm text-charcoal-500 mb-2">{comment.date}</p>
					<p class="text-charcoal-600">{comment.content}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
