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

<div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
	<h3 class="text-xl font-bold text-white mb-6">Leave a Comment</h3>
	<form onsubmit={handleSubmit} class="space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="space-y-2">
				<label for="name" class="block text-xs font-medium uppercase tracking-wider text-zinc-500">Name</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					class="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
					placeholder="John Doe"
				/>
			</div>
			<div class="space-y-2">
				<label for="email" class="block text-xs font-medium uppercase tracking-wider text-zinc-500">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					class="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
					placeholder="john@example.com"
				/>
			</div>
		</div>

		<div class="space-y-2">
			<label for="comment" class="block text-xs font-medium uppercase tracking-wider text-zinc-500">Comment</label>
			<textarea
				id="comment"
				bind:value={comment}
				rows="4"
				class="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
				placeholder="Share your thoughts..."
			></textarea>
		</div>

		<div class="pt-2">
			<button
				type="submit"
				class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
			>
				Post Comment
			</button>
		</div>
	</form>
</div>
