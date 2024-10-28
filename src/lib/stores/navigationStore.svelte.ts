// src/lib/stores/navigationStore.ts

type PageName = 'home' | 'about' | 'contact' | 'blog' | 'blogPost' | string;

interface BlogNavigation {
	currentSlug: string | null;
	previousSlug: string | null;
	nextSlug: string | null;
}

export const navigationStore = $state({
	currentPage: 'home' as PageName,
	previousPage: null as PageName | null,
	blogNavigation: {
		currentSlug: null,
		previousSlug: null,
		nextSlug: null
	} as BlogNavigation
});

export function setPage(pageName: PageName) {
	navigationStore.previousPage = navigationStore.currentPage;
	navigationStore.currentPage = pageName;
}

export function setBlogNavigation(current: string, previous: string | null, next: string | null) {
	navigationStore.previousPage = navigationStore.currentPage;
	navigationStore.currentPage = 'blogPost';
	navigationStore.blogNavigation = {
		currentSlug: current,
		previousSlug: previous,
		nextSlug: next
	};
}

export function resetNavigation() {
	navigationStore.currentPage = 'home';
	navigationStore.previousPage = null;
	navigationStore.blogNavigation = {
		currentSlug: null,
		previousSlug: null,
		nextSlug: null
	};
}
