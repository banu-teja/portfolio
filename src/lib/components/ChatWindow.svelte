<!-- src/lib/components/ChatWindow.svelte -->
<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterUpdate } from 'svelte';
	import ChatBubble from './ChatBubble.svelte';

	let isOpen = false;
	let messages: { text: string; sender: 'user' | 'bot' }[] = [];
	let inputMessage = '';
	let chatContainer: HTMLElement;
	let isBotTyping = false;

	function toggleChat() {
		isOpen = !isOpen;
	}

	async function sendMessage() {
		if (inputMessage.trim()) {
			messages = [...messages, { text: inputMessage, sender: 'user' }];
			inputMessage = '';

			isBotTyping = true;
			await new Promise((resolve) => setTimeout(resolve, 1000));

			messages = [
				...messages,
				{ text: "Thanks for checking out my portfolio! I'll be in touch if you leave your details.", sender: 'bot' }
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
			class="relative mb-4 flex h-[36rem] w-80 sm:w-96 transform flex-col overflow-hidden bg-background border border-border shadow-2xl transition-all duration-300 ease-in-out"
			in:fly={{ y: 50, duration: 300, easing: quintOut }}
			out:fly={{ y: 50, duration: 300, easing: quintOut }}
		>
			<!-- Header -->
			<div
				class="sticky top-0 z-10 flex w-full items-center justify-between border-b border-border bg-background p-4 text-primary"
			>
				<div class="flex items-center gap-3">
					<div class="relative flex h-8 w-8 items-center justify-center bg-surface border border-border">
						<span class="text-xs font-bold text-primary">AI</span>
						<span class="absolute bottom-0 right-0 block h-2 w-2 bg-green-500 border border-background"></span>
					</div>
					<div>
						<h3 class="text-sm font-semibold">Assistant</h3>
						<p class="text-[10px] text-muted-foreground">Always online</p>
					</div>
				</div>
				<button
					on:click={toggleChat}
					class="p-2 text-muted-foreground transition hover:bg-surface hover:text-primary"
					aria-label="Close chat"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>

			<!-- Messages -->
			<div bind:this={chatContainer} class="flex-1 space-y-4 overflow-y-auto bg-background px-4 py-4">
				{#if messages.length === 0}
					<div class="flex flex-col items-center justify-center h-full text-center space-y-2 opacity-50">
						<div class="w-12 h-12 bg-surface border border-border flex items-center justify-center mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-muted-foreground">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
							</svg>
						</div>
						<p class="text-sm text-muted-foreground">Ask me anything!</p>
					</div>
				{/if}
				{#each messages as message}
					<ChatBubble {message} />
				{/each}
				{#if isBotTyping}
					<div class="flex items-start">
						<div class="bg-surface border border-border px-4 py-3 text-muted-foreground">
							<div class="typing-indicator flex gap-1">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Footer Input -->
			<div class="sticky bottom-0 z-10 border-t border-border bg-background p-4">
				<form on:submit|preventDefault={sendMessage} class="relative flex items-center">
					<input
						type="text"
						bind:value={inputMessage}
						placeholder="Type a message..."
						class="flex-grow border border-border bg-surface px-4 py-3 text-sm text-primary placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
					/>
					<button
						type="submit"
						class="absolute right-1.5 bg-primary p-1.5 text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
						disabled={!inputMessage.trim()}
						aria-label="Send message"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 rotate-90"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
							/>
						</svg>
					</button>
				</form>
			</div>
		</div>
	{/if}

	<!-- Toggle Button -->
	<button
		on:click={toggleChat}
		class="group relative flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-95"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		aria-label="Toggle chat"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
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
	.typing-indicator span {
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #737373; /* neutral-500 */
		animation: typing 1.4s infinite ease-in-out both;
	}
	.typing-indicator span:nth-child(1) {
		animation-delay: -0.32s;
	}
	.typing-indicator span:nth-child(2) {
		animation-delay: -0.16s;
	}

	@keyframes typing {
		0%, 80%, 100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
</style>
