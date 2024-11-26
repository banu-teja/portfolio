<script lang="ts">
	export let message: { text: string; sender: 'user' | 'bot' };
</script>

<div
	class="chat-bubble relative my-2 max-w-[75%] transform rounded-2xl p-3 shadow-sm transition-all duration-200 ease-in-out hover:scale-105"
	class:user={message.sender === 'user'}
	class:bot={message.sender === 'bot'}
>
	<p class="text-sm leading-relaxed">{message.text}</p>
	<div class="absolute bottom-[-0.5rem] {message.sender === 'user' ? 'right-2' : 'left-2'}">
		<div
			class="bubble-tip h-0 w-0 border-solid border-transparent {message.sender === 'user'
				? 'border-r-teal-500'
				: 'border-l-gray-200'} border-8"
		/>
	</div>
</div>

<style>
	.chat-bubble {
		margin-left: auto; /* Align user messages to the right */
	}

	.chat-bubble.bot {
		background-color: #f8fafc; /* Light gray for bot messages */
		color: #4a5568; /* Dark gray for bot message text */
		margin-left: 0; /* Reset margin for bot messages */
	}

	.chat-bubble.user {
		background-color: #10b981; /* Teal for user messages */
		color: white; /* White text for user messages */
	}

	.bubble-tip.user {
		border-top-color: #10b981; /* Match the teal user bubble */
	}

	.bubble-tip.bot {
		border-top-color: #f8fafc;
	}
</style>
