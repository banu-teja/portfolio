<script>
	const skills = [
		'JavaScript (ES6+)',
		'React',
		'Svelte',
		'Node.js',
		'TailwindCSS',
		'GraphQL',
		'Python',
		'UI/UX Design'
	];
</script>

<svelte:head>
	<title>About | Bhanu Teja</title>
</svelte:head>

<main>
	<h1 class="mb-6 text-3xl font-bold">About Me</h1>

	<section class="mb-12">
		<p class="mb-4 text-gray-600">
			Hello! I'm Bhanu Teja, a passionate developer and designer with over 5 years of experience in
			creating beautiful, functional web experiences. I specialize in front-end development with a
			focus on React and Svelte, but I'm also comfortable working with back-end technologies.
		</p>
		<p class="mb-4 text-gray-600">
			My journey in web development started when I built my first website for a local business.
			Since then, I've been constantly learning and improving my skills to stay up-to-date with the
			latest technologies and best practices in the industry.
		</p>
		<p class="mb-4 text-gray-600">
			When I'm not coding, you can find me exploring new design trends, contributing to open-source
			projects, or enjoying a good book on technology and innovation.
		</p>
	</section>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-bold">Skills</h2>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<span class="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
					{skill}
				</span>
			{/each}
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Work Experience</h2>
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold">Senior Front-end Developer</h3>
				<p class="text-gray-600">TechCorp Inc. | 2020 - Present</p>
				<ul class="mt-2 list-inside list-disc text-gray-600">
					<li>Lead development of multiple React-based web applications</li>
					<li>Mentor junior developers and conduct code reviews</li>
					<li>Implement best practices for performance optimization and accessibility</li>
				</ul>
			</div>
			<div>
				<h3 class="text-lg font-semibold">Web Developer</h3>
				<p class="text-gray-600">DesignStudio | 2018 - 2020</p>
				<ul class="mt-2 list-inside list-disc text-gray-600">
					<li>Developed responsive websites for various clients</li>
					<li>Collaborated with designers to implement pixel-perfect designs</li>
					<li>Optimized website performance and SEO</li>
				</ul>
			</div>
		</div>
	</section>
</main>
