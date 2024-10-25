import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const response = await fetch(`/api/posts/${params.slug}`);
	const post = await response.json();

	return {
		post
	};
};
