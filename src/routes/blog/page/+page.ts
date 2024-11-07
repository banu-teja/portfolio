// /routes/blog/page/+page.ts

import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	throw redirect(301, '/blog');
};

export const prerender = true;
