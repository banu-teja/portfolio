<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'svelte-hero-icons';
	import { Icon } from 'svelte-hero-icons';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Work' },
		{ href: '/blog', label: 'Writing' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	let isScrolled = false;
	let isDark = true;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);

		// Check theme
		isDark = document.documentElement.classList.contains('dark');

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 transition-all duration-300 pointer-events-none" class:py-2={isScrolled}>
	<nav
		class="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/80 p-1.5 backdrop-blur-md transition-all duration-300 shadow-sm"
		class:scale-95={isScrolled}
	>
		<!-- Logo / Home Icon -->
		<a href="/" class="flex items-center justify-center rounded-full w-9 h-9 bg-primary text-primary-foreground hover:opacity-90 transition-opacity mr-1">
			<span class="font-bold text-lg font-mono">B</span>
		</a>

		<!-- Links -->
		<ul class="flex items-center">
			{#each navItems as { href, label }}
				{@const isActive = $page.url.pathname === href || (href !== '/' && $page.url.pathname.startsWith(href))}
				<li>
					<a
						{href}
						class="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 block whitespace-nowrap
						{isActive
							? 'text-primary-foreground'
							: 'text-muted-foreground hover:text-primary hover:bg-surface'}"
					>
						<span class="relative z-10">{label}</span>
						{#if isActive}
							<span class="absolute inset-0 -z-0 bg-primary rounded-full" style="view-transition-name: active-nav;"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Right Actions -->
		<div class="hidden sm:flex items-center gap-1 border-l border-border pl-2 ml-1">
			<!-- Theme Toggle -->
			<button
				onclick={toggleTheme}
				aria-label="Toggle Theme"
				class="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-surface transition-colors"
			>
				{#if isDark}
					<Icon src={Sun} class="w-5 h-5" />
				{:else}
					<Icon src={Moon} class="w-5 h-5" />
				{/if}
			</button>

			<a href="https://github.com/banu-teja" target="_blank" rel="noreferrer" aria-label="GitHub Profile" class="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-surface transition-colors">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
			</a>
		</div>
	</nav>
</header>
