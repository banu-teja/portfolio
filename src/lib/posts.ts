// import { compile } from 'mdsvex';
// import { readdir, readFile } from 'fs/promises';
// import { join } from 'path';
// import yaml from 'js-yaml';

// export interface Post {
// 	slug: string;
// 	title: string;
// 	date: string;
// 	excerpt: string;
// 	readingTime: number;
// 	content: any;
// }

// const postsDirectory = join(process.cwd(), 'src', 'posts');

// export async function getPosts(): Promise<Omit<Post, 'content'>[]> {
// 	const slugs = await readdir(postsDirectory);
// 	const posts = await Promise.all(
// 		slugs.map(async (slug) => {
// 			const post = await getPost(slug.replace('.md', ''));
// 			return {
// 				slug: post.slug,
// 				title: post.title,
// 				date: post.date,
// 				excerpt: post.excerpt,
// 				readingTime: post.readingTime
// 			};
// 		})
// 	);

// 	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// }

// export async function getPost(slug: string): Promise<Post> {
// 	const filePath = join(postsDirectory, `${slug}.md`);

// 	try {
// 		const fileContent = await readFile(filePath, 'utf-8');

// 		// Split the content into frontmatter and markdown
// 		const [, frontmatter, markdown] = fileContent.split('---');

// 		// Parse the frontmatter
// 		const data = yaml.load(frontmatter) as { title: string; date: string; excerpt: string };

// 		if (!data.title || !data.date || !data.excerpt) {
// 			throw new Error('Missing required frontmatter');
// 		}

// 		// Compile the markdown content
// 		const { code } = await compile(markdown);

// 		return {
// 			slug,
// 			content: code,
// 			title: data.title,
// 			date: data.date,
// 			excerpt: data.excerpt,
// 			readingTime: Math.ceil(markdown.split(/\s+/).length / 200)
// 		};
// 	} catch (error) {
// 		console.error(`Error processing ${slug}:`, error);
// 		throw new Error('Post not found or invalid');
// 	}
// }
