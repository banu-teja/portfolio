<script>
	export let lang = '';
</script>

<pre class={`language-${lang}`}><slot /></pre>

<style>
	pre {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border-radius: 0.3em;
		background: #f5f2f0;
	}
</style>
