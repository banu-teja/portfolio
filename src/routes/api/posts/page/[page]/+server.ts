import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/data/fetchPosts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

// export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const page = params.page ? parseInt(params.page, 10) : 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
};
