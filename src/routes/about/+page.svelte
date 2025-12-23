<script>
	const skills = [
		'Python',
		'Go',
		'PostgreSQL',
		'Docker',
		'GCP / Azure',
		'JavaScript',
		'React',
		'React Native',
		'Flutter',
		'Svelte',
		'Next.js',
		'gRPC',
		'UI/UX Design'
	];
</script>

<svelte:head>
	<title>About | Bhanu Teja</title>
</svelte:head>

<section class="py-24 max-w-4xl">
	<h1 class="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12">
		About Me
	</h1>

	<div class="prose prose-lg dark:prose-invert prose-neutral mb-16 font-light leading-relaxed">
		<p>
			I'm Bhanu Teja, a Senior Software Engineer specializing in cloud-native solutions, machine learning, and data engineering.  With 2+ years of experience, I build high-impact applications, from cross-platform mobile apps using Flutter and Golang to robust backends with Python and cloud technologies like GCP and Azure.  My expertise includes developing data pipelines, deploying ML models, and building chatbot APIs using LLMs. I hold Google Cloud certifications in Machine Learning, Data Engineering, and Cloud Databases.
		</p>
		<p>
			My projects include a ride-sharing app and a real-time messaging application.  I'm proficient in Python, Go, JavaScript, C++, and frameworks like React, React Native, Flutter, and Svelte. My passion lies in leveraging cutting-edge technologies, particularly in the AI space, to create innovative solutions.
		</p>
	</div>

	<!-- Skills Section -->
	<div class="mb-20">
		<h2 class="text-2xl font-bold tracking-tight text-primary mb-6 pb-4 border-b border-border">Technical Skills</h2>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<span
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-border bg-surface hover:bg-surfaceHighlight transition-colors"
				>
					{skill}
				</span>
			{/each}
		</div>
	</div>

	<!-- Experience Section -->
	<div>
		<h2 class="text-2xl font-bold tracking-tight text-primary mb-8 pb-4 border-b border-border">Work Experience</h2>
		<div class="border-l border-border ml-2 space-y-12">

			<!-- Job 1 -->
			<div class="relative pl-8">
				<div class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-border bg-background"></div>
				<h3 class="text-xl font-bold text-primary">Senior Software Engineer</h3>
				<div class="text-sm font-mono text-muted-foreground mb-4">
					Persistent Systems | Apr 2024 - Present
				</div>
				<ul class="list-disc list-outside ml-4 text-muted-foreground space-y-2">
					<li>Automated content processing and analysis using Azure Cognitive Search.</li>
					<li>Developed a user feedback system with a chatbot for insights.</li>
				</ul>
			</div>

			<!-- Job 2 -->
			<div class="relative pl-8">
				<div class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-border bg-background"></div>
				<h3 class="text-xl font-bold text-primary">Software Engineer</h3>
				<div class="text-sm font-mono text-muted-foreground mb-4">
					Persistent Systems | Jul 2022 - Mar 2024
				</div>
				<ul class="list-disc list-outside ml-4 text-muted-foreground space-y-2">
					<li>Built a Microsoft Teams chatbot for information retrieval using LLMs.</li>
					<li>Migrated and managed data pipelines for near real-time updates.</li>
					<li>Created a tool for automated SQL code conversion between databases.</li>
				</ul>
			</div>

			<!-- Job 3 -->
			<div class="relative pl-8">
				<div class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-border bg-background"></div>
				<h3 class="text-xl font-bold text-primary">Software Engineer Intern</h3>
				<div class="text-sm font-mono text-muted-foreground mb-4">
					Persistent Systems | Feb 2022 - Jun 2022
				</div>
				<ul class="list-disc list-outside ml-4 text-muted-foreground space-y-2">
					<li>Developed a VM monitoring application providing real-time insights using Flask, GCP, and Cloud Logging.</li>
				</ul>
			</div>

		</div>
	</div>
</section>
