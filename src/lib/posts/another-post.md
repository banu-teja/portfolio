---
title: 'Automatic heading links in mdsvex'
date: '2023-10-26'
updated: '2023-10-26'
categories:
  - 'sveltekit'
  - 'markdown'
coverImage: '/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: Check out how heading links work with this starter in this post.
---

Here are some headings:

## Here's an h2

Lorem ipsum dolor sit amet

### This is an h3

Lorem ipsum dolor sit amet

#### As you've probably guessed, this is an h4

Lorem ipsum dolor sit amet

##### This, of course, is an h5

Lorem ipsum dolor sit amet

###### We're deep in h6 territory now

Lorem ipsum dolor sit amet

```html
<div class="w-full md:w-1/2 lg:w-1/3">
	<!-- Your content here -->
</div>
```

```python
print("hello")
```

// components.svelte

```svelte
// components.svelte
<script>
	import myComponent from '$lib/components/myComponent.svelte';

	export let myProp = undefined;
</script>

<div>
	<MyComponent prop={myProp}>
</div>
```
