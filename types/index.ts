export interface ProjectData {
	id: string;
	title: string;
	description: string;
	technologies: string;
	image: string;
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
	createdAt: Date;
	updatedAt: Date;
	slug: string;
	tags: TagOnPost[];
	translations: Translation[];
}

export interface Translation {
	id: string;
	postId: string;
	language: string; // e.g., 'en', 'es'
	title: string;
	content: string; // Markdown content
	summary?: string; // Optional meta description
	locale: string; // e.g., 'en-US', 'es-AR'
	post: Post;
}

export interface Tag {
	id: string;
	name: string; // Unique tag name
	posts: TagOnPost[];
}

export interface TagOnPost {
	id: string;
	postId: string;
	tagId: string;
	post: Post;
	tag: Tag;
}
