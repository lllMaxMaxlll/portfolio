export interface ProjectData {
	id: string;
	title: string;
	description: string;
	technologies: string;
	images: string[];
	githubLink?: string | null;
	websiteLink?: string | null;
	language: string;
}

export interface Feedback {
	id: string;
	happiness: number;
	comment: string | null;
}

export interface Post {
	id: string;
	slug: string;
	title: string;
	summary: string | null;
	image: string | null;
	createdAt: Date;
	tags: Tag[];
}

export interface Tag {
	id: string;
	name: string; // Unique tag name
	// postId: string
	// tagId: string
}
