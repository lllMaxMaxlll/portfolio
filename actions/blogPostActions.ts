"use server";

import { db } from "@/lib/db";

export const getAllPosts = async (locale: string) => {
	try {
		return await db.post.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				translations: {
					where: {
						language: locale,
					},
					select: {
						title: true,
						summary: true,
					},
				},
				tags: {
					include: {
						tag: true,
					},
				},
			},
		});
	} catch (error) {
		console.error("Error fetching blog posts:", error);
		throw error;
	}
};

export const getAllPostForParams = async () => {
	try {
		return db.post.findMany({
			select: {
				slug: true,
				translations: {
					select: { language: true },
				},
			},
		});
	} catch (error) {
		console.error("Error fetching post params:", error);
		throw error;
	}
};

export const getPostBySlug = async (slug: string, locale: string) => {
	try {
		return await db.post.findUnique({
			where: { slug },
			include: {
				translations: {
					where: { language: locale },
				},
				tags: {
					include: {
						tag: true,
					},
				},
			},
		});
	} catch (error) {
		console.error("Error fetching post by slug:", error);
		throw error;
	}
};

export const getBlogPostsByTag = async () => {
	return [];
};
