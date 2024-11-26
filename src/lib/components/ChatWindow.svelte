<!-- src/lib/components/ChatWindow.svelte -->
<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterUpdate } from 'svelte';
	import ChatBubble from './ChatBubble.svelte';

	let isOpen = false;
	let messages: { text: string; sender: 'user' | 'bot' }[] = []; // Explicitly type messages
	let inputMessage = '';
	let chatContainer: HTMLElement;
	let isBotTyping = false; // Typing indicator state

	function toggleChat() {
		isOpen = !isOpen;
	}

	async function sendMessage() {
		if (inputMessage.trim()) {
			messages = [...messages, { text: inputMessage, sender: 'user' }];
			inputMessage = '';

			// Simulate typing indicator
			isBotTyping = true;
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate thinking time

			// Simulate a response
			messages = [
				...messages,
				{ text: "Thanks for your message! I'll get back to you soon.", sender: 'bot' }
			];
			isBotTyping = false;
		}
	}

	afterUpdate(() => {
		if (chatContainer) {
			chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
		}
	});
</script>

<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
	{#if isOpen}
		<div
			class="hover:scale-101 relative mb-4 flex h-[36rem] w-96 scale-100 transform flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 ease-in-out"
			in:fly={{ y: 50, duration: 300, easing: quintOut }}
			out:fly={{ y: 50, duration: 300, easing: quintOut }}
		>
			<div
				class="sticky top-0 z-10 flex w-full items-center justify-between rounded-t-2xl bg-gradient-to-r from-teal-400 to-teal-500 p-4 text-white"
			>
				<h3 class="text-lg font-semibold">Chat Support</h3>
				<button on:click={toggleChat} class="text-white transition hover:text-teal-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div bind:this={chatContainer} class="flex-1 space-y-3 overflow-y-auto px-6 py-4">
				{#each messages as message}
					<ChatBubble {message} />
				{/each}
				{#if isBotTyping}
					<div class="chat-bubble bot flex items-center">
						<div class="typing-indicator">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				{/if}
			</div>
			<div class="sticky bottom-0 z-10 rounded-b-xl border-t border-gray-200 bg-gray-100 p-4">
				<form on:submit|preventDefault={sendMessage}>
					<div class="flex items-center">
						<input
							type="text"
							bind:value={inputMessage}
							placeholder="Type a message..."
							class="flex-grow rounded-lg border border-gray-300 bg-white px-4 py-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400"
						/>
						<button
							type="submit"
							class="ml-3 transform rounded-full bg-gradient-to-r from-teal-400 to-teal-500 p-2 text-white transition hover:scale-110 hover:from-teal-500 hover:to-teal-600 active:scale-90"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 rotate-90"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
	<button
		on:click={toggleChat}
		class="transform rounded-full bg-gradient-to-r from-teal-400 to-teal-500 p-3 text-white shadow-lg transition hover:scale-110 hover:from-teal-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-90"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
			/>
		</svg>
	</button>
</div>

<style>
	.typing-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.typing-indicator span {
		display: inline-block;
		width: 6px;
		height: 6px;
		margin: 0 2px;
		border-radius: 50%;
		background-color: #9ca3af;
		animation: typing 1.2s infinite ease-in-out;
	}
	.typing-indicator span:nth-child(1) {
		animation-delay: 0s;
	}
	.typing-indicator span:nth-child(2) {
		animation-delay: 0.2s;
	}
	.typing-indicator span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes typing {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(-5px);
			opacity: 0.7;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
