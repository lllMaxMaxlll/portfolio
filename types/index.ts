export type ProjectDataType = {
	id: number;
	title: string;
	description: string;
	technologies: string;
	image: string;
	githubLink?: string | null;
	websiteLink?: string | null;
	language: string;
};

export type FeedbackType = {
	id: number;
	happiness: number;
	comment: string | null;
};
