import type { Post } from './posts';
import type { FullPost } from './types';

// export function formatDate(date: string): string {
// 	try {
// 		console.log(date);
// 		// parseISO is specifically designed to parse ISO date strings
// 		const parsedDate = parseISO(date);

// 		// Check if the date is valid
// 		if (isNaN(parsedDate.getTime())) {
// 			throw new Error('Invalid date');
// 		}

// 		return format(parsedDate, 'yyyy-MM-dd');
// 	} catch (error) {
// 		throw new Error(`Failed to format date: ${error.message}`);
// 	}
// }

export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export async function getAllPosts(): Promise<Post[]> {
	const allPostFiles = import.meta.glob('../routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop()?.slice(0, -3);
			return {
				...metadata,
				slug
			};
		})
	);

	return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<FullPost> {
	const postFile = await import(`../routes/blog/${slug}.md`);
	const { metadata, default: content } = postFile;
	return {
		...metadata,
		slug,
		content: content // Get the HTML string
	};
}
