<!-- src/lib/components/ChatWindow.svelte -->
<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterUpdate } from 'svelte';

	let isOpen = false;
	let messages = [];
	let inputMessage = '';
	let chatContainer;

	function toggleChat() {
		isOpen = !isOpen;
	}

	function sendMessage() {
		if (inputMessage.trim()) {
			messages = [...messages, { text: inputMessage, sender: 'user' }];
			inputMessage = '';
			// Simulate a response (replace with actual API call)
			setTimeout(() => {
				messages = [
					...messages,
					{ text: "Thanks for your message! I'll get back to you soon.", sender: 'bot' }
				];
			}, 1000);
		}
	}

	// Auto-scroll to the bottom when new messages are added
	afterUpdate(() => {
		if (chatContainer) {
			chatContainer.scrollTo({
				top: chatContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	});
</script>

<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
	{#if isOpen}
		<div
			class="mb-4 flex h-[32rem] w-96 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
			in:fly={{ y: 50, duration: 300, easing: quintOut }}
			out:fly={{ y: 50, duration: 300, easing: quintOut }}
		>
			<div class="flex items-center justify-between bg-teal-500 p-4 text-white">
				<div class="flex items-center space-x-3">
					<div class="h-3 w-3 rounded-full bg-teal-200"></div>
					<h3 class="text-lg font-semibold">Chat Support</h3>
				</div>
				<button on:click={toggleChat} class="text-white transition-colors hover:text-teal-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div bind:this={chatContainer} class="flex-1 space-y-4 overflow-y-auto p-4">
				{#each messages as message}
					<div class={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
						<div
							class={`max-w-[70%] rounded-2xl p-3 ${
								message.sender === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-800'
							}`}
						>
							{message.text}
						</div>
					</div>
				{/each}
			</div>
			<div class="bg-gray-50 p-4">
				<form on:submit|preventDefault={sendMessage} class="flex items-center space-x-2">
					<input
						type="text"
						bind:value={inputMessage}
						placeholder="Type a message..."
						class="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
					/>
					<button
						type="submit"
						class="rounded-full bg-teal-500 p-2 text-white transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
							/>
						</svg>
					</button>
				</form>
			</div>
		</div>
	{/if}

	<button
		on:click={toggleChat}
		class="rounded-full bg-teal-500 p-4 text-white shadow-lg transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
			/>
		</svg>
	</button>
</div>
