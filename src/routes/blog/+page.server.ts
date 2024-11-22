// /routes/blog/+page.server.ts

export const prerender = true;

export function entries() {
	// This should return an array of all possible page numbers
	// You might need to calculate this based on your total number of posts
	return [
		{ post: 'first-post' },
		{ post: 'another-post' }

		// { page: 1 },
		// { page: 2 }
		// ... add more as needed
	];
}

export const load: PageServerLoad = async () => {
	// const postsDirectory = path.join(process.cwd(), 'src/posts');
	const posts: BlogPost[] = [];

	return {
		posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};
