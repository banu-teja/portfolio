<script>
	import { projects } from '$lib/data/projects';
	import { Icon, ArrowRight } from 'svelte-hero-icons';
</script>

<svelte:head>
	<title>Projects | Bhanu Teja</title>
</svelte:head>

<section class="py-24">
	<div class="mb-12 border-b border-border pb-6">
		<h1 class="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-4">
			Selected Work
		</h1>
		<p class="text-xl text-muted-foreground max-w-2xl font-light">
			A collection of projects exploring web development, cloud infrastructure, and AI.
		</p>
	</div>

	<!-- Sharp Edges Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
		{#each projects as project}
			<a href={project.link} target="_blank" rel="noopener noreferrer"
				class="group relative flex flex-col justify-between p-8 border-r border-b border-border bg-background transition-colors duration-300 hover:bg-surface h-[400px]"
			>
				<!-- Content -->
				<div class="relative z-20 h-full flex flex-col justify-between">
					<div>
						<div class="flex gap-2 mb-6">
							{#each project.technologies.slice(0, 3) as tech}
								<span class="px-2 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border">
									{tech}
								</span>
							{/each}
						</div>

						<h3 class="text-2xl font-bold text-primary mb-3 group-hover:underline decoration-1 underline-offset-4">
							{project.title}
						</h3>

						<p class="text-muted-foreground text-sm leading-relaxed line-clamp-4">
							{project.description}
						</p>
					</div>

					<div class="inline-flex items-center text-sm font-semibold text-primary mt-auto">
						View Project
						<Icon src={ArrowRight} class="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
