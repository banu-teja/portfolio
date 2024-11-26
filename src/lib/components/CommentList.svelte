<script lang="ts">
	import type { Comment } from '$lib/types';

	export let comments: Comment[];
</script>

<div class="border-charcoal-200 mb-12 border-t pt-8">
	<h3 class="text-charcoal-800 mb-6 font-serif text-2xl font-bold">Comments ({comments.length})</h3>
	<div class="space-y-8">
		{#each comments as comment}
			<div class="flex space-x-4">
				<img src={comment.avatar} alt="{comment.name}'s Avatar" class="h-12 w-12 rounded-full" />
				<div>
					<h4 class="text-charcoal-800 font-semibold">{comment.name}</h4>
					<p class="text-charcoal-500 mb-2 text-sm">{comment.date}</p>
					<p class="text-charcoal-600">{comment.content}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
