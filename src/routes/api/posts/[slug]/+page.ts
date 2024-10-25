import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const response = await fetch(`/api/posts/${params.slug}`);

	if (response.ok) {
		const post = await response.json();
		console.log(post);
		return { post };
	} else {
		// If the post is not found, throw a 404 error
		throw error(404, 'Post not found');
	}
};
