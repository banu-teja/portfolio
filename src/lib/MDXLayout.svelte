<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
</script>

<slot />

<svelte:component this={CodeBlock} {...$$props.code} />
