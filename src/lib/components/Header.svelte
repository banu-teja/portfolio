<script>
	import { page } from '$app/stores';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<header class="mb-12 pt-6">
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
		<a href="/" class="group">
			<div class="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
				Bhanu
				<span class="text-teal-500">.</span>
			</div>
			<p class="text-sm font-medium text-gray-500 tracking-wide mt-0.5">Developer & Designer</p>
		</a>

		<nav class="flex overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
			<ul class="flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/50 shadow-sm md:shadow-none md:border-transparent md:bg-transparent">
				{#each navItems as { href, label }}
					{@const isActive = $page.url.pathname === href || ($page.url.pathname === '/' && href === '/')}
					<li>
						<a
							{href}
							class="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 block whitespace-nowrap
							{isActive
								? 'bg-white text-teal-700 shadow-sm ring-1 ring-gray-200 md:bg-teal-50 md:text-teal-700 md:ring-0'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}"
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
