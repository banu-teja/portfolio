<script>
	import { projects } from '$lib/data/projects';
	import { posts } from '$lib/data/posts';
</script>

<svelte:head>
	<title>Bhanu Teja | Developer & Designer</title>
</svelte:head>

<main>
	<section class="mb-16">
		<h2 class="mb-6 text-2xl font-medium text-gray-800">About Me</h2>
		<p class="mb-6 text-gray-600 leading-relaxed">
			Hello! I'm Bhanu, a passionate developer and designer with a keen interest in creating
			beautiful, functional web experiences. I specialize in React, Next.js, and TailwindCSS.
		</p>

		<a
		href="/about"
		class="inline-flex items-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-teal-600 hover:transform hover:translate-y-[-1px]"
		>
		Learn More
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 ml-1"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
		</a>
	</section>

	<script>
		import { projects } from '$lib/data/projects'; // Assuming you have this data
	</script>

	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-medium text-gray-900">Featured Projects</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{#each projects.slice(0, 2) as project}
				<div
					class="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
				>
					<div class="p-6">
						<h3 class="mb-3 text-xl font-medium text-gray-800">
							{project.title}
						</h3>
						<p class="mb-4 text-gray-600 leading-relaxed">
							{project.description}
						</p>
						<div class="mb-4 flex flex-wrap gap-2">
							{#each project.technologies as tech}
              <span
								class="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600 ring-1 ring-inset ring-teal-500/20"
							>
                {tech}
              </span>
							{/each}
						</div>
					</div>
					<div class="border-t border-gray-100 px-6 py-4">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm font-medium text-teal-500 transition-colors group-hover:text-teal-600"
						>
							View Project
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>


	<section>
		<h2 class="mb-6 text-2xl font-medium text-gray-800">Latest Posts</h2>
		{#if posts.length === 0}
			<div class="rounded-lg border border-gray-200 bg-white p-16">
				<p class="text-center text-gray-600">No posts available yet. Check back soon!</p>
			</div>
		{:else}
			<ul class="space-y-4">
				{#each posts.slice(0, 2) as post}
					<li>
						<a
							href="/blog"
							class="group block rounded-lg border border-gray-200 p-6 transition-all hover:bg-gray-50"
						>
							<h3 class="mb-2 text-lg font-medium text-gray-800">{post.title}</h3>
							<p class="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
							<div class="mt-3">
              <span class="inline-flex items-center text-sm font-medium text-teal-500 transition-colors group-hover:text-teal-600">
                Read More
                <svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
                  <!-- SVG path -->
                </svg>
              </span>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</section>

</main>

<style>
    /* Optional: Add a smooth transition for the technology tags */
    span {
        transition: all 0.2s ease-in-out;
    }

    span:hover {
        transform: translateY(-1px);
    }
</style>