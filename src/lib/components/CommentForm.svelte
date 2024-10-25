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
	<h3 class="text-xl font-serif font-bold text-charcoal-800 mb-4">Leave a Comment</h3>
	<form method="POST" action="logout">
		<div class="mb-4">
			<label for="name" class="block text-sm font-medium text-charcoal-700 mb-1">Name</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				class="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block text-sm font-medium text-charcoal-700 mb-1">Email</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				class="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
		<div class="mb-4">
			<label for="comment" class="block text-sm font-medium text-charcoal-700 mb-1">Comment</label>
			<textarea
				id="comment"
				bind:value={comment}
				rows="4"
				class="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
			></textarea>
		</div>
		<button
			type="submit"
			class="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
			>Post Comment</button
		>
	</form>
</div>
