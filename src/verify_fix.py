from playwright.sync_api import sync_playwright

def verify_redesign():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Create a context with predefined viewport for consistency
        context = browser.new_context(viewport={'width': 1280, 'height': 2000})
        page = context.new_page()

        # 1. Verify Contact Page in Light and Dark Mode
        print("Navigating to Contact...")
        page.goto("http://localhost:4173/contact")
        page.wait_for_load_state("networkidle")

        # Ensure we are in Light Mode first (or capturing whatever default is)
        # To be safe, let's force light mode if we can, or just toggle.

        # Take initial screenshot
        page.screenshot(path="/home/jules/verification/contact_initial.png")
        print("Captured Contact Initial")

        # Toggle Theme
        toggle_btn = page.locator('button[aria-label="Toggle Theme"]')
        if toggle_btn.is_visible():
            print("Toggling theme...")
            toggle_btn.click()
            page.wait_for_timeout(500) # Wait for transition
            page.screenshot(path="/home/jules/verification/contact_toggled.png")

            # Toggle back to original state for consistency if needed, but we can just move on.
            toggle_btn.click()
            page.wait_for_timeout(500)
        else:
            print("Theme toggle not found")

        # 2. Verify Blog Layout (Mocking a blog post view is hard without a running backend/data,
        # but we can try to find a link if one exists, or just check the Contact page thoroughly as a proxy for text colors).
        # Actually, let's check the Components by navigating to a known blog post URL if possible.
        # Since I don't know the exact slugs, I will rely on the Contact page as proof of 'inner page' fixes.
        # But wait, I can check if there are links on the home page.

        print("Navigating to Home to find a blog link...")
        page.goto("http://localhost:4173/")

        # Find a link in the "Latest Writings" section
        # The structure is typically an <a> tag inside the list.
        # Let's try to click the first one.
        blog_link = page.locator('a[href^="/blog/"]').first
        if blog_link.count() > 0:
            print("Found blog link, navigating...")
            blog_link.click()
            page.wait_for_load_state("networkidle")
            page.screenshot(path="/home/jules/verification/blog_post_initial.png")

            # Toggle Theme on Blog Post
            if toggle_btn.is_visible():
                toggle_btn.click()
                page.wait_for_timeout(500)
                page.screenshot(path="/home/jules/verification/blog_post_toggled.png")
        else:
            print("No blog links found on home page.")

        browser.close()

if __name__ == "__main__":
    verify_redesign()
