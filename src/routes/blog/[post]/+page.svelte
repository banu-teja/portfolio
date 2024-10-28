<script lang="ts">
	const { data }: { data: { PostContent: any; meta: any } } = $props();

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<title>{title} | Bhanu Teja's Blog</title>
</svelte:head>

<article class="mx-auto max-w-2xl">
	<header class="mb-8">
		<!-- <h1 class="mb-2 text-4xl font-bold">{data.post.title}</h1>
		<div class="flex justify-between text-sm text-gray-500">
			<span>{data.post.date}</span>
			<span>{data.post.readingTime}</span>
		</div> -->
	</header>

	<div class="prose prose-lg">
		<PostContent />
	</div>
</article>
