<script>
	import { page } from '$app/stores';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<header class="mb-8">
	<div class="mb-6">
		<h1 class="mb-3 text-3xl font-medium tracking-tight text-gray-900">
			<span class="inline-block text-teal-500 hover:text-teal-600 transition-colors duration-200">
				Bhanu
			</span>
		</h1>
		<p class="text-gray-600 text-lg">Developer, designer, and creator.</p>
	</div>

	<nav class="border-b border-gray-100">
		<ul class="flex -mb-px">
			{#each navItems as { href, label }}
				{@const isActive = $page.url.pathname === href}
				<li class="mr-6">
					<a
					{href}
					class="relative inline-flex items-center px-1 py-3 text-sm font-medium transition-all duration-200
					{isActive ? 'text-teal-500' : 'text-gray-600 hover:text-gray-900'}"
					>
					{label}
					{#if isActive}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 transition-all duration-200"
								aria-hidden="true"
							/>
					{:else}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 opacity-0 transition-all duration-200
									group-hover:opacity-25"
								aria-hidden="true"
							/>
					{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
    a:hover span {
        opacity: 0.25;
    }
</style>