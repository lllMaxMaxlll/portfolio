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

export interface BlogPost {
	id: string;
	title: MultilingualContent;
	content: MultilingualContent;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
	published: boolean;
	coverImage?: string;
	tags: BlogPostTag[];
}

export interface BlogPostTag {
	id: string;
	blogPostId: string;
	tagId: string;
	tag: Tag;
	blogPost: BlogPost;
}

export interface Tag {
	id: string;
	name: MultilingualContent;
	posts?: BlogPostTag[];
}

export interface MultilingualContent {
	[key: string]: string; // where key is the language code
}
