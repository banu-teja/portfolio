<script>
	import { projects } from '$lib/data/projects';
	import { posts } from '$lib/data/posts';
	import { Icon, ChatBubbleLeftRight, ArrowRight, ArrowLongRight } from 'svelte-hero-icons';
</script>

<svelte:head>
	<title>Bhanu Teja | Developer & Designer</title>
</svelte:head>

<!-- Hero Section -->
<section class="py-12 md:py-20 max-w-4xl">
	<div class="space-y-6">
		<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
			Crafting digital experiences with <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">code & design.</span>
		</h1>
		<p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
			Hi, I'm Bhanu. I build accessible, pixel-perfect, and performant web applications.
			Specializing in Python, Go, Next.js, and React Native.
		</p>

		<div class="flex flex-wrap gap-4 pt-4">
			<a
				href="/projects"
				class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
			>
				View Work
				<Icon src={ArrowRight} class="w-4 h-4 ml-2" solid />
			</a>
			<a
				href="/about"
				class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm"
			>
				More About Me
			</a>
		</div>
	</div>
</section>

<!-- Featured Projects -->
<section class="py-16">
	<div class="flex items-center justify-between mb-10">
		<h2 class="text-2xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
		<a href="/projects" class="group inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">
			View all
			<Icon src={ArrowLongRight} class="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects.slice(0, 3) as project}
			<a href={project.link} target="_blank" rel="noopener noreferrer"
				class="group flex flex-col h-full bg-white rounded-2xl border border-slate-200/60 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-teal-500/30 overflow-hidden relative"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

				<div class="relative z-10 flex flex-col flex-grow">
					<div class="flex items-start justify-between mb-4">
						<div class="p-3 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
							<!-- Placeholder Icon based on title first letter if no icon provided -->
							<span class="font-bold text-lg leading-none">{project.title.charAt(0)}</span>
						</div>
						<div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-2 -mt-2">
							<div class="p-2 text-slate-400 hover:text-teal-500">
								<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</div>
						</div>
					</div>

					<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
						{project.title}
					</h3>

					<p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
						{project.description}
					</p>

					<div class="mt-auto flex flex-wrap gap-2">
						{#each project.technologies.slice(0, 3) as tech}
							<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-white group-hover:border-teal-100 group-hover:text-teal-700 transition-colors">
								{tech}
							</span>
						{/each}
						{#if project.technologies.length > 3}
							<span class="inline-flex items-center px-2 py-0.5 text-xs font-medium text-slate-500">
								+{project.technologies.length - 3}
							</span>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- Latest Posts -->
<section class="py-16 border-t border-slate-200">
	<div class="flex items-center justify-between mb-10">
		<h2 class="text-2xl font-bold tracking-tight text-slate-900">Latest Writings</h2>
		<a href="/blog" class="group inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">
			Read all
			<Icon src={ArrowLongRight} class="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
		</a>
	</div>

	{#if posts.length === 0}
		<div class="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-12 flex flex-col items-center justify-center text-center">
			<div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
				</svg>
			</div>
			<p class="text-slate-500 font-medium">No posts available yet.</p>
			<p class="text-slate-400 text-sm mt-1">Check back soon for updates!</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each posts.slice(0, 2) as post}
				<a href="/blog" class="group block">
					<article class="flex flex-col h-full bg-transparent p-4 -mx-4 rounded-2xl transition-colors hover:bg-white hover:shadow-sm">
						<div class="flex items-center gap-2 text-xs font-medium text-teal-600 mb-2">
							<time datetime="2023-01-01">Oct 24, 2023</time> <!-- Placeholder date logic -->
							<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
							<span>Blog</span>
						</div>
						<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
							{post.title}
						</h3>
						<p class="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
							{post.excerpt}
						</p>
						<div class="mt-auto flex items-center text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
							Read Article
							<Icon src={ArrowRight} class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</section>

<!-- Call to Action -->
<section class="py-16 md:py-24">
	<div class="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 md:px-12 md:py-16 text-center shadow-2xl">
		<!-- Decorative blobs -->
		<div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

		<div class="relative z-10 max-w-2xl mx-auto space-y-6">
			<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to collaborate?</h2>
			<p class="text-slate-300 text-lg">
				I'm always open to discussing product design work or partnership opportunities.
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
				<a href="mailto:hello@example.com" class="w-full sm:w-auto px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all shadow-lg shadow-teal-500/25">
					Start a conversation
				</a>
				<a href="/contact" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all">
					<Icon src={ChatBubbleLeftRight} class="w-5 h-5 mr-2 text-slate-400" />
					Chat with Assistant
				</a>
			</div>
		</div>
	</div>
</section>
