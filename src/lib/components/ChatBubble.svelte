<script lang="ts">
	export let message: { text: string; sender: 'user' | 'bot' };
</script>

<div
	class="flex flex-col mb-4 transition-all duration-300 animate-fade-in"
	class:items-end={message.sender === 'user'}
	class:items-start={message.sender === 'bot'}
>
	<div
		class="relative max-w-[85%] px-4 py-2.5 text-sm border"
		class:bg-primary={message.sender === 'user'}
		class:text-primary-foreground={message.sender === 'user'}
		class:border-transparent={message.sender === 'user'}

		class:bg-surface={message.sender === 'bot'}
		class:text-muted-foreground={message.sender === 'bot'}
		class:border-border={message.sender === 'bot'}
	>
		<p class="leading-relaxed">{message.text}</p>
	</div>
</div>
