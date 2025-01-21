"use server";

import { db } from "@/lib/db";
import { Post } from "@/types";

export const getAllPosts = async (locale: string): Promise<Post[]> => {
	try {
		const posts = await db.post.findMany({
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

    return posts.map((post) => ({
          id: post.id,
          slug: post.slug,
          title: post.translations[0]?.title,
          summary: post.translations[0]?.summary,
          image: post.image,
          createdAt: post.createdAt,
          tags: post.tags.map((t) => {
            return { name: t.tag.name, id: t.tag.id }}),
        })).filter((post) => post.title)// Filter out posts without a translation
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

export const getPostsByTag = async () => {
	return [];
};
