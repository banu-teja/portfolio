import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	try {
		const post = await import(`$lib/posts/${params.post}.md`);

		console.log(post.default);

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err: unknown) {
		throw error(404, (err as Error).message);
	}
};
