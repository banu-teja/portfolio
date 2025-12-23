<svelte:head>
    <title>Contact | Bhanu Teja</title>
</svelte:head>

<!-- The layout already provides the dark background and header padding,
     but we can add a specific container for content spacing if needed.
     Using transparent backgrounds to let the layout's noise/glow show through. -->

<div class="mx-auto max-w-4xl px-6 lg:px-8 py-12 md:py-20">
    <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">touch.</span>
        </h1>
        <p class="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I'm always open to discussing product design work, partnership opportunities, or just having a chat about tech.
        </p>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
            <div class="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-700 transition-colors">
                <h3 class="text-lg font-bold text-white mb-2">Email</h3>
                <p class="text-zinc-500 text-sm mb-4">For general inquiries and projects.</p>
                <a href="mailto:hello@example.com" class="text-2xl font-semibold text-accent hover:text-white transition-colors">
                    hello@example.com
                </a>
            </div>

            <div class="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-700 transition-colors">
                <h3 class="text-lg font-bold text-white mb-2">Socials</h3>
                <p class="text-zinc-500 text-sm mb-4">Follow my daily updates.</p>
                <div class="flex flex-col gap-3">
                    <a href="https://x.com/bhanuteja_naidu" target="_blank" class="flex items-center text-zinc-300 hover:text-white transition-colors">
                        <span class="w-24 text-zinc-500">Twitter</span>
                        <span class="font-medium">@bhanuteja_naidu</span>
                    </a>
                    <a href="https://github.com/banu-teja" target="_blank" class="flex items-center text-zinc-300 hover:text-white transition-colors">
                        <span class="w-24 text-zinc-500">GitHub</span>
                        <span class="font-medium">@banu-teja</span>
                    </a>
                    <a href="https://www.linkedin.com/in/bhanutejap/" target="_blank" class="flex items-center text-zinc-300 hover:text-white transition-colors">
                        <span class="w-24 text-zinc-500">LinkedIn</span>
                        <span class="font-medium">Bhanu Teja P</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Placeholder Form (Visual only for now) -->
        <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-3xl opacity-20"></div>
            <div class="relative rounded-3xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-xl">
                <h3 class="text-xl font-bold text-white mb-6">Send a message</h3>
                <form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label for="name" class="text-xs font-bold text-zinc-500 uppercase tracking-wide">Name</label>
                            <input type="text" id="name" class="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" placeholder="Name" />
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-xs font-bold text-zinc-500 uppercase tracking-wide">Email</label>
                            <input type="email" id="email" class="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" placeholder="Email" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="message" class="text-xs font-bold text-zinc-500 uppercase tracking-wide">Message</label>
                        <textarea id="message" rows="4" class="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="How can I help you?"></textarea>
                    </div>
                    <button class="w-full rounded-full bg-white py-4 font-bold text-black hover:bg-zinc-200 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
