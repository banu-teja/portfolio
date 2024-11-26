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

<main>

	<section class="mb-12">
		<p class="mb-4 text-justify text-gray-700 leading-relaxed">
			I'm Bhanu Teja, a Senior Software Engineer specializing in cloud-native solutions, machine learning, and data engineering.  With 2+ years of experience, I build high-impact applications, from cross-platform mobile apps using Flutter and Golang to robust backends with Python and cloud technologies like GCP and Azure.  My expertise includes developing data pipelines, deploying ML models, and building chatbot APIs using LLMs. I hold Google Cloud certifications in Machine Learning, Data Engineering, and Cloud Databases.
		</p>
		<p class="mb-4 text-justify text-gray-700 leading-relaxed">
			My projects include a ride-sharing app and a real-time messaging application.  I'm proficient in Python, Go, JavaScript, C++, and frameworks like React, React Native, Flutter, and Svelte. My passion lies in leveraging cutting-edge technologies, particularly in the AI space, to create innovative solutions.
		</p>

	</section>

	<section class="mb-12">
		<p class="mb-4 font-semibold text-lg text-gray-800">Skills</p>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<span
					class="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600 ring-1 ring-inset ring-teal-500/20">
					{skill}
				</span>
			{/each}
		</div>
	</section>

	<section>
		<p class="mb-4 font-semibold text-lg text-gray-800">Work Experience</p>
		<div class="space-y-6">

			<div class="group overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-teal-50 to-yellow-50 transition-colors hover:bg-gradient-to-br hover:from-teal-100 hover:to-yellow-100 shadow-sm hover:shadow-md">
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold text-green-500 tracking-wide">Senior Software Engineer</h3>
					<p class="mb-3 text-sm font-medium text-gray-600">
						<span class="bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent">Persistent Systems</span> | Apr 2024 - Present
					</p>
					<ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
						<li>Automated content processing and analysis using Azure Cognitive Search.</li>
						<li>Developed a user feedback system with a chatbot for insights.</li>
					</ul>
				</div>
			</div>

			<div class="group overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-pink-50 to-orange-50 transition-colors hover:bg-gradient-to-br hover:from-pink-100 hover:to-orange-100 shadow-sm hover:shadow-md">
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold text-pink-500 tracking-wide">Software Engineer</h3>
					<p class="mb-3 text-sm font-medium text-gray-600">
						<span class="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Persistent Systems</span> | Jul 2022 - Mar 2024
					</p>
					<ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
						<li>Built a Microsoft Teams chatbot for information retrieval using LLMs.</li>
						<li>Migrated and managed data pipelines for near real-time updates.</li>
						<li>Created a tool for automated SQL code conversion between databases.</li>
					</ul>
				</div>
			</div>


			<div class="group overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-cyan-50 to-blue-50 transition-colors hover:bg-gradient-to-br hover:from-cyan-100 hover:to-blue-100 shadow-sm hover:shadow-md">
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold text-sky-500 tracking-wide">Software Engineer Intern</h3>
					<p class="mb-3 text-sm font-medium text-gray-600">
						<span class="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Persistent Systems</span> | Feb 2022 - Jun 2022
					</p>
					<ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
						<li>Developed a VM monitoring application providing real-time insights using Flask, GCP, and Cloud Logging.</li>
					</ul>
				</div>
			</div>


		</div>
	</section>
</main>