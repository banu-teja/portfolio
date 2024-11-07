<script>
	import { page } from '$app/stores';
</script>

<header class="mb-12">
	<h1 class="mb-2 text-3xl font-bold text-teal-600">Bhanu</h1>
	<p class="text-gray-600">Developer, designer, and creator.</p>
</header>

<nav class="mb-12">
	<ul class="flex space-x-6">
		<li>
			<a
				href="/"
				class="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
				class:text-gray-900={$page.url.pathname === '/'}>Home</a
			>
		</li>
		<li>
			<a
				href="/about"
				class="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
				class:text-gray-900={$page.url.pathname === '/about'}>About</a
			>
		</li>
		<li>
			<a
				href="/projects"
				class="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
				class:text-gray-900={$page.url.pathname === '/projects'}>Projects</a
			>
		</li>
		<li>
			<a
				href="/blog"
				class="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
				class:text-gray-900={$page.url.pathname === '/blog'}>Blog</a
			>
		</li>
	</ul>
</nav>
