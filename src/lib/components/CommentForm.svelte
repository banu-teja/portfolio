<script lang="ts">
	let name = $state('');
	let email = $state('');
	let comment = $state('');

	function handleSubmit(event: Event) {
		event.preventDefault();
		// Handle form submission logic here
		console.log({ name, email, comment });

		// Reset form
		name = '';
		email = '';
		comment = '';
	}
</script>

<div class="border border-border bg-surface p-6 md:p-8">
	<h3 class="text-xl font-bold text-foreground mb-6">Leave a Comment</h3>
	<form onsubmit={handleSubmit} class="space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="space-y-2">
				<label for="name" class="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					class="w-full rounded-none border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="John Doe"
				/>
			</div>
			<div class="space-y-2">
				<label for="email" class="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					class="w-full rounded-none border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="john@example.com"
				/>
			</div>
		</div>

		<div class="space-y-2">
			<label for="comment" class="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Comment</label>
			<textarea
				id="comment"
				bind:value={comment}
				rows="4"
				class="w-full rounded-none border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
				placeholder="Share your thoughts..."
			></textarea>
		</div>

		<div class="pt-2">
			<button
				type="submit"
				class="inline-flex items-center justify-center rounded-none bg-primary px-8 py-3 text-sm font-bold text-background transition-all hover:opacity-90 active:scale-95"
			>
				Post Comment
			</button>
		</div>
	</form>
</div>
