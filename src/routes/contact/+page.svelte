<svelte:head>
    <title>Contact | Bhanu Teja</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-6 lg:px-8 py-12 md:py-20">
    <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
            Get in <span class="text-primary">touch.</span>
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm always open to discussing product design work, partnership opportunities, or just having a chat about tech.
        </p>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
            <div class="border border-border bg-surface p-8 hover:border-primary/50 transition-colors">
                <h3 class="text-lg font-bold text-foreground mb-2">Email</h3>
                <p class="text-muted-foreground text-sm mb-4">For general inquiries and projects.</p>
                <a href="mailto:hello@example.com" class="text-2xl font-semibold text-primary hover:text-foreground transition-colors">
                    hello@example.com
                </a>
            </div>

            <div class="border border-border bg-surface p-8 hover:border-primary/50 transition-colors">
                <h3 class="text-lg font-bold text-foreground mb-2">Socials</h3>
                <p class="text-muted-foreground text-sm mb-4">Follow my daily updates.</p>
                <div class="flex flex-col gap-3">
                    <a href="https://x.com/bhanuteja_naidu" target="_blank" class="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <span class="w-24 text-muted-foreground/70">Twitter</span>
                        <span class="font-medium">@bhanuteja_naidu</span>
                    </a>
                    <a href="https://github.com/banu-teja" target="_blank" class="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <span class="w-24 text-muted-foreground/70">GitHub</span>
                        <span class="font-medium">@banu-teja</span>
                    </a>
                    <a href="https://www.linkedin.com/in/bhanutejap/" target="_blank" class="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <span class="w-24 text-muted-foreground/70">LinkedIn</span>
                        <span class="font-medium">Bhanu Teja P</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Placeholder Form (Visual only for now) -->
        <div class="relative">
            <div class="border border-border bg-surface p-8">
                <h3 class="text-xl font-bold text-foreground mb-6">Send a message</h3>
                <form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label for="name" class="text-xs font-bold text-muted-foreground uppercase tracking-wide">Name</label>
                            <input type="text" id="name" class="w-full rounded-none bg-background border border-border px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" placeholder="Name" />
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-xs font-bold text-muted-foreground uppercase tracking-wide">Email</label>
                            <input type="email" id="email" class="w-full rounded-none bg-background border border-border px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" placeholder="Email" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="message" class="text-xs font-bold text-muted-foreground uppercase tracking-wide">Message</label>
                        <textarea id="message" rows="4" class="w-full rounded-none bg-background border border-border px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
                    </div>
                    <button class="w-full rounded-none bg-primary py-4 font-bold text-background hover:opacity-90 transition-opacity">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
