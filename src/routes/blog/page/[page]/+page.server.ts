import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/data/fetchPosts';

export const prerender = true;

export function entries() {
	// Calculate the total number of pages based on your total posts
	// This is an example; adjust based on your actual total number of posts
	const totalPosts = 2; // Replace with your actual total number of posts
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	return Array.from({ length: totalPages }, (_, i) => ({
		page: (i + 1).toString()
	}));
}

export const load: PageServerLoad = async ({ url, params, fetch }) => {
	const page = params.page ? parseInt(params.page, 10) : 1;

	// Keeps from duplicating the blog index route as page 1
	if (page <= 1) {
		throw redirect(301, '/blog');
	}

	const offset = (page - 1) * postsPerPage;

	try {
		const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
		if (!totalPostsRes.ok) {
			throw new Error(`HTTP error! status: ${totalPostsRes.status}`);
		}
		const total = (await totalPostsRes.json()) as number;

		const { posts } = await fetchPosts({ offset, limit: postsPerPage });

		if (posts.length === 0 && page !== 1) {
			throw error(404, 'Page not found');
		}

		return {
			posts,
			page,
			totalPosts: total
		};
	} catch (err) {
		console.error('Failed to load posts:', err);
		throw error(500, 'Failed to load posts');
	}
};
