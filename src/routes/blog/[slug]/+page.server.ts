import type { PageServerLoad } from './$types';
import type { BlogPostContent } from '$lib/types/blog';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from 'mdsvex';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const filePath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`);
	const fileContents = await fs.readFile(filePath, 'utf8');
	const { data, content } = matter(fileContents);

	const compiledContent = await compile(content, {
		remarkPlugins: [],
		rehypePlugins: [],
		highlight: {
			highlighter: (code, lang) => {
				// Return pre-rendered HTML for code blocks
				return `<pre class="language-${lang}-banu"><code class="language-${lang}">${code}</code></pre>`;
			}
		}
	});

	if (!compiledContent) {
		throw new Error('Failed to compile MDX content');
	}

	const post: BlogPostContent = {
		slug,
		title: data.title,
		date: data.date,
		excerpt: data.excerpt,
		readingTime: data.readingTime,
		content: compiledContent.code
	};

	console.log(post);

	return {
		post
	};
};
