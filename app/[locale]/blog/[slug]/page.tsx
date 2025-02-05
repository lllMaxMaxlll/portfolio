import Image from "next/image";
import { getAllPostForParams, getPostBySlug } from "@/actions/blogPostActions";
import { getLocale, getTranslations } from "next-intl/server";
import { markdownToHtml } from "@/lib/markdownToHtml";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {Metadata} from "next";

export async function generateStaticParams() {
	const posts = await getAllPostForParams();

	return posts.flatMap((post) =>
		post.translations.map((translation) => ({
			locale: translation.language,
			slug: post.slug,
		}))
	);
}


export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
	const slug = (await params).slug;
	const post = await getPostBySlug(slug, await getLocale());

	if (!post) {
		return { title: "Post Not Found", description: "The requested blog post does not exist." };
	}

	const translation = post.translations[0];
	return {
		title: `${translation.title} | Max Herr Blog`,
		description: translation.summary,
		openGraph: {
			title: translation.title,
			description: translation.summary || "",
			url: `https://www.maxherr.com/blog/${post.slug}`,
			images: [{ url: post.image || "/images/fallback.jpg" }],
		},
		twitter: {
			card: "summary_large_image",
			title: translation.title,
			description: translation.summary || "",
			images: [post.image || "/images/fallback.jpg"],
		},
	};
};


export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const locale = await getLocale();
	const t = await getTranslations("Blog");

	const post = await getPostBySlug(slug, locale);

	if (!post || post.translations.length === 0) {
		return (
			<div className="text-center py-16">
				<h1 className="text-2xl font-semibold">Post Not Found</h1>
				<p className="text-neutral-600 mt-2">The blog post you’re looking for does not exist or has been removed.</p>
				<Link href={`/${locale}/blog`} className="text-blue-600 hover:underline mt-4">
					Back to Blog
				</Link>
			</div>
		);
	}

	const translation = post.translations[0];
	const content = await markdownToHtml(translation.content);

	return (
		<article className="px-4 py-6 md:px-6 md:py-12 lg:py-16 min-h-[100dvh]">
			<div className="prose prose-neutral max-w-3xl mx-auto dark:prose-invert">
				<Link
					href={`/${locale}/blog`}
					className="inline-flex items-center p-2 rounded-lg mb-4 hover:bg-accent hover:text-accent-foreground transition-all">
					<ArrowLeft className="w-4 h-4 mr-2" />
					{t("backButton")}
				</Link>
				<h1 className="text-4xl font-bold mb-4">{translation.title}</h1>
				<h2 className="text-neutral-600 dark:text-neutral-400 mb-2 text-lg">{translation.summary}</h2>
				<span className="text-neutral-500 mb-8 text-sm">{new Date(post.createdAt).toLocaleDateString(locale)}</span>
				<div>
					{post.tags.length > 0 && (
						<div>
							{post.tags.map(({ tag }) => (
								<Badge key={tag.id} className="me-1">
									{tag.name}
								</Badge>
							))}
						</div>
					)}
				</div>
				{post.image && <Image src={post.image} alt={translation.title || "Blog post image"} width={800} height={400}  className="my-4 mx-auto rounded-lg shadow-md max-w-full" />}
				<div className="prose prose-neutral max-w-none dark:prose-invert py-2" dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</article>
	);
}
