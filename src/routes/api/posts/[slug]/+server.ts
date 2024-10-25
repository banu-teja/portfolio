import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getPost } from '$lib/posts';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return json(post);
	} catch (e) {
		// If the post is not found, return a 404 error
		return error(404, 'Post not found');
	}
};
