<script lang="ts">
	let name = $state('');
	let email = $state('');
	let comment = $state('');

	function handleSubmit() {
		// Handle form submission
		console.log({ name, email, comment });
		// Reset form
		name = '';
		email = '';
		comment = '';
	}
</script>

<div class="bg-charcoal-50 rounded-lg p-6">
	<h3 class="text-charcoal-800 mb-4 font-serif text-xl font-bold">Leave a Comment</h3>
	<form method="POST" action="logout">
		<div class="mb-4">
			<label for="name" class="text-charcoal-700 mb-1 block text-sm font-medium">Name</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				class="border-charcoal-300 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="text-charcoal-700 mb-1 block text-sm font-medium">Email</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				class="border-charcoal-300 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
		<div class="mb-4">
			<label for="comment" class="text-charcoal-700 mb-1 block text-sm font-medium">Comment</label>
			<textarea
				id="comment"
				bind:value={comment}
				rows="4"
				class="border-charcoal-300 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
			></textarea>
		</div>
		<button
			type="submit"
			class="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
			>Post Comment</button
		>
	</form>
</div>
