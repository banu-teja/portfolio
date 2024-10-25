import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async () => {
	const postsDirectory = path.join(process.cwd(), 'src/posts');
	const filenames = await fs.readdir(postsDirectory);

	const posts: BlogPost[] = await Promise.all(
		filenames.map(async (filename) => {
			const filePath = path.join(postsDirectory, filename);
			const fileContents = await fs.readFile(filePath, 'utf8');
			const { data } = matter(fileContents);

			return {
				slug: filename.replace('.mdx', ''),
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				readingTime: data.readingTime
			};
		})
	);

	return {
		posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};
