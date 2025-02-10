import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPostType = {
	slug: string;
	title: string;
	summary: string;
	date: string;
	image: string;
	tags: string[];
};

export function getAllPostForParams() {
	const locales = ["en", "es"];
	return locales.flatMap((locale) => {
		const dir = path.join(BLOG_DIR, locale);
		if (!fs.existsSync(dir)) return [];

		return fs.readdirSync(dir).map((file) => ({
			slug: file.replace(".mdx", ""),
			translations: [{ language: locale }],
		}));
	});
}

export function getAllPost(locale: string) {
	const dir = path.join(BLOG_DIR, locale);
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.map((file) => {
			const filePath = path.join(dir, file);
			const fileContents = fs.readFileSync(filePath, "utf-8");
			const { data } = matter(fileContents);

			return {
				slug: file.replace(".mdx", ""),
				title: data.title,
				summary: data.summary,
				date: data.date,
				image: data.image,
				tags: data.tags || [],
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as BlogPostType[];
}

export function getPostBySlug(slug: string, locale: string) {
	const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return null;

	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		createdAt: data.date,
		image: data.image || null,
		tags: data.tags,
		translations: [
			{
				language: locale,
				title: data.title,
				summary: data.summary,
				content,
			},
		],
	};
}
