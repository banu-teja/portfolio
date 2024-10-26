<script>
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects | Bhanu Teja</title>
</svelte:head>

<main>
	<h1 class="mb-8 text-3xl font-bold">My Projects</h1>

	<div class="space-y-12">
		{#each projects as project}
			<div
				class="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
			>
				<div class="p-6">
					<h2 class="mb-2 text-2xl font-semibold">{project.title}</h2>
					<p class="mb-4 text-gray-600">{project.description}</p>
					<div class="mb-4 flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<span class="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
								{tech}
							</span>
						{/each}
					</div>
				</div>
				<div class="bg-gray-50 px-6 py-4">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="font-medium text-teal-600 transition-colors duration-300 hover:text-teal-800"
					>
						View Project <span class="ml-1">→</span>
					</a>
				</div>
			</div>
		{/each}
	</div>
</main>
