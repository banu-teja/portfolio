export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readingTime: string;
}

export interface BlogPostContent extends BlogPost {
	content: string;
}
