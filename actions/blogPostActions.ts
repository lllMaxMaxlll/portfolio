"use server";

import {db} from "@/lib/db";
// import { headers } from "next/headers"
import {Post} from "@/types";

// const CLAP_LIMIT = 50 // Maximum claps per post per IP
// const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

export const getAllPosts = async (locale: string): Promise<Post[]> => {
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

    if (!posts || posts.length === 0) throw new Error("No posts found")

    return posts
        .filter((post) => post.translations[0]?.title)
        .map((post) => ({
            id: post.id,
            slug: post.slug,
            title: post.translations[0].title,
            summary: post.translations[0].summary,
            image: post.image,
            createdAt: post.createdAt,
            tags: post.tags.map((t) => ({name: t.tag.name, id: t.tag.id})),
        }));

};

export const getAllPostForParams = async () => {
    return db.post.findMany({
        select: {
            slug: true,
            translations: {
                select: {language: true},
            },
        },
    });

};

export const getPostBySlug = async (slug: string, locale: string) => {
    return db.post.findUnique({
        where: {slug},
        include: {
            translations: {
                where: {language: locale},
            },
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });

};

// export const getPostsByTag = async () => {
// 	return [];
// };

// export async function clapForPost(postId: string) {
//   try {
//     const headersList = await headers()

//     const getIp = () => {
//         const forwardedFor = headersList.get("x-forwarded-for");
//         const realIp = headersList.get("x-real-ip");

//         if (forwardedFor) return forwardedFor.split(",")[0].trim();
//         if (realIp) return realIp.trim()

//         return null
//     }


//     // Check total claps from this IP for this post
//     const totalClaps = await db.clap.count({
//       where: {
//         postId,
//         ipAddress: ip,
//       },
//     })

//     if (totalClaps >= CLAP_LIMIT) {
//       return { success: false, error: "Clap limit reached", count: totalClaps }
//     }

//     // Check rate limiting
//     const recentClap = await db.clap.findFirst({
//       where: {
//         postId,
//         ipAddress: ip,
//         createdAt: {
//           gte: new Date(Date.now() - RATE_LIMIT_WINDOW),
//         },
//       },
//     })

//     if (recentClap) {
//       return { success: false, error: "Please wait before clapping again", count: totalClaps }
//     }

//     // Create new clap
//     await db.clap.create({
//       data: {
//         postId,
//         ipAddress: ip,
//       },
//     })

//     const newTotal = await db.clap.count({
//       where: {
//         postId,
//       },
//     })

//     return { success: true, count: newTotal }
//   } catch (error) {
//     console.error("Failed to clap for post:", error)
//     return { success: false, error: "Failed to clap for post" }
//   }
