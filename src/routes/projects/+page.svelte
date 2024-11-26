<script>
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects | Bhanu Teja</title>
</svelte:head>

<main>
	<!--	<h1 class="mb-12 text-3xl font-medium text-gray-900">My Projects</h1>-->

	<div class="space-y-6">
		{#each projects as project}
			<div
				class="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
			>
				<div class="p-6">
					<h2 class="mb-3 text-xl font-medium text-gray-800">{project.title}</h2>
					<p class="mb-4 leading-relaxed text-gray-600">{project.description}</p>
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
							class="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
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
