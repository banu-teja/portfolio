<script>
	import { projects } from '$lib/data/projects';
	import { posts } from '$lib/data/posts';
	import { Icon, ChatBubbleLeftRight, ArrowRight, ArrowLongRight } from 'svelte-hero-icons';
</script>

<svelte:head>
	<title>Bhanu Teja | Developer & Designer</title>
</svelte:head>

<!-- Hero Section -->
<section class="py-24 md:py-36 relative">
	<div class="relative z-10 max-w-5xl">
		<h1 class="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-primary leading-[1] md:leading-[0.9] mb-10">
			Crafting digital <br class="hidden sm:block" />
			experiences.
		</h1>
		<p class="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
			I build accessible, pixel-perfect, and performant web applications.
			Specializing in Python, Go, Next.js, and React Native.
		</p>

		<div class="flex flex-wrap gap-4 pt-12">
			<a
				href="/projects"
				class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-200 bg-secondary rounded-none border border-transparent hover:border-primary/20"
			>
				<span class="relative z-10 flex items-center">
					View Work
					<Icon src={ArrowRight} class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" solid />
				</span>
			</a>
			<a
				href="/about"
				class="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-muted-foreground transition-all duration-200 bg-transparent border border-border rounded-none hover:text-primary hover:border-primary"
			>
				More About Me
			</a>
		</div>
	</div>
</section>

<!-- Featured Projects (Bento Grid Style - Sharp Edges) -->
<section class="py-24">
	<div class="flex items-end justify-between mb-12 border-b border-border pb-6">
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-primary mb-2">Featured Projects</h2>
			<p class="text-muted-foreground">A selection of my recent work</p>
		</div>
		<a href="/projects" class="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
			View all
			<Icon src={ArrowLongRight} class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
		{#each projects.slice(0, 3) as project, i}
			<!-- Grid Items with visible borders -->
			<a href={project.link} target="_blank" rel="noopener noreferrer"
				class="group relative flex flex-col justify-between p-8 border-r border-b border-border bg-background transition-colors duration-300 hover:bg-surface
				{i === 0 ? 'md:col-span-2' : ''} h-[400px]"
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

						<h3 class="text-3xl font-bold text-primary mb-3 group-hover:underline decoration-1 underline-offset-4">
							{project.title}
						</h3>

						<p class="text-muted-foreground text-sm md:text-base line-clamp-3">
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

<!-- Latest Writings (Minimalist List) -->
<section class="py-24">
	<div class="grid grid-cols-1 md:grid-cols-12 gap-12">
		<div class="md:col-span-4">
			<h2 class="text-3xl font-bold tracking-tight text-primary mb-4">Latest Writings</h2>
			<p class="text-muted-foreground mb-6 max-w-xs">Thoughts on software development, design, and building products.</p>
			<a href="/blog" class="inline-flex items-center text-sm font-medium text-primary hover:underline decoration-1 underline-offset-4 transition-all">
				Read all articles
				<Icon src={ArrowLongRight} class="w-5 h-5 ml-2" />
			</a>
		</div>

		<div class="md:col-span-8">
			{#if posts.length === 0}
				<div class="border border-dashed border-border bg-surface/50 p-12 flex flex-col items-center justify-center text-center h-full">
					<div class="w-12 h-12 bg-surface border border-border flex items-center justify-center mb-4 text-muted-foreground">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
						</svg>
					</div>
					<p class="text-primary font-medium">No posts available yet.</p>
					<p class="text-muted-foreground text-sm mt-1">Check back soon for updates!</p>
				</div>
			{:else}
				<div class="divide-y divide-border border-t border-b border-border">
					{#each posts.slice(0, 3) as post}
						<a href="/blog" class="group block py-6 hover:bg-surface transition-colors duration-200">
							<article class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
								<h3 class="text-xl font-medium text-primary group-hover:underline decoration-1 underline-offset-4">
									{post.title}
								</h3>
								<time datetime="2023-01-01" class="text-sm font-mono text-muted-foreground whitespace-nowrap">Oct 24, 2023</time>
							</article>
							<p class="text-muted-foreground text-sm mt-2 line-clamp-1">
								{post.excerpt}
							</p>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Big Footer CTA -->
<section class="py-24 md:py-32 border-t border-border mt-10">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-6xl md:text-8xl font-black text-primary tracking-tighter mb-8">
			Let's build something <br />
			extraordinary.
		</h2>
		<p class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
			I'm currently available for freelance projects and open to full-time opportunities.
		</p>
		<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
			<a href="mailto:hello@example.com" class="min-w-[200px] px-8 py-4 bg-primary text-primary-foreground font-bold text-lg hover:bg-zinc-200 transition-colors">
				Say Hello
			</a>
			<a href="/contact" class="min-w-[200px] px-8 py-4 bg-transparent text-primary font-bold text-lg border border-border hover:bg-surface transition-colors">
				Collaborate
			</a>
		</div>
	</div>
</section>
