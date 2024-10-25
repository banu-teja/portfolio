<script>
	import { projects } from '$lib/data/projects';
	import { posts } from '$lib/data/posts';
</script>

<svelte:head>
	<title>Bhanu Teja | Developer & Designer</title>
</svelte:head>

<main>
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-bold">About Me</h2>
		<p class="mb-4 text-gray-600">
			Hello! I'm Bhanu, a passionate developer and designer with a keen interest in creating
			beautiful, functional web experiences. I specialize in React, Next.js, and TailwindCSS.
		</p>
		<a
			href="/about"
			class="inline-block rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600"
		>
			Learn More
		</a>
	</section>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-bold">Featured Projects</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{#each projects.slice(0, 2) as project}
				<div class="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
					<h3 class="mb-2 text-lg font-semibold">{project.title}</h3>
					<p class="mb-4 text-sm text-gray-600">{project.description}</p>
					<a href="/projects" class="text-sm font-medium text-teal-500 hover:text-teal-600"
						>View Project →</a
					>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-bold">Latest Posts</h2>
		<ul class="space-y-4">
			{#each posts.slice(0, 2) as post}
				<li>
					<a href="/blog" class="block rounded-lg p-4 transition-colors hover:bg-gray-100">
						<h3 class="mb-1 text-lg font-semibold">{post.title}</h3>
						<p class="text-sm text-gray-600">{post.excerpt}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>

<!-- <script lang="ts">
	import { fly } from 'svelte/transition';

	const fullName = 'Bhanu Teja';
	const username = 'bteja';
</script>

<h1 class="transition-element pt-12 font-medium">
	<span class="sr-only">Bhanu Teja</span>
	<span aria-hidden="true" class="group relative block overflow-hidden">
		<span
			class="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full"
		>
			<p transition:fly class="text-2xl">{fullName}</p>
		</span>

		<span
			class="absolute left-0 top-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0"
		>
			<p transition:fly class="text-2xl">{username}</p>
		</span>
	</span>
</h1> -->
