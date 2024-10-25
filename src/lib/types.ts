import type { Action } from '@sveltejs/kit';

export interface Author {
	name: string;
	avatar: string;
}

export interface Comment {
	name: string;
	avatar: string;
	date: string;
	content: string;
}

type Actions<
	Params extends Partial<Record<string, string>> = Partial<Record<string, string>>,
	OutputData extends Record<string, any> | void = Record<string, any> | void,
	RouteId extends string | null = string | null
> = Record<string, Action<Params, OutputData, RouteId>>;

import type { SvelteComponent } from 'svelte';
import type { Post } from './posts';

export interface FullPost extends Post {
	content: string;
}
