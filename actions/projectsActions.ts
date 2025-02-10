import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export type ProjectType = {
	slug: string;
	title: string;
	summary: string;
	date: string;
	tags: string[];
	images: string[];
	github?: string | null;
	website?: string | null;
};

export function getAllProjects(locale: string) {
	const dir = path.join(PROJECTS_DIR, locale);
	if (!fs.existsSync(dir)) return [];

	return fs.readdirSync(dir).map((file) => {
		const filePath = path.join(dir, file);
		const fileContents = fs.readFileSync(filePath, "utf-8");
		const { data } = matter(fileContents);

		return {
			slug: file.replace(".mdx", ""),
			title: data.title,
			summary: data.summary,
			date: data.date,
			tags: data.tags,
			images: data.images,
			github: data.github || null,
			website: data.website || null,
		} as ProjectType;
	});
}

export async function getProjectBySlug(slug: string, locale: string) {
	const filePath = path.join(PROJECTS_DIR, locale, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return null;

	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data } = matter(fileContents);

	return {
		slug,
		title: data.title,
		summary: data.summary,
		date: data.date,
		tags: data.tags || [],
		images: data.images || [],
		github: data.github || null,
		website: data.website || null,
	};
}
