import Image from "next/image";
import { getAllPostForParams, getPostBySlug } from "@/actions/blogPostActions";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { markdownToHtml } from "@/lib/markdownToHtml";

export async function generateStaticParams() {
	const posts = await getAllPostForParams();

	return posts.flatMap((post) =>
		post.translations.map((translation) => ({
			locale: translation.language,
			slug: post.slug,
		}))
	);
}

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const locale = await getLocale();

	const post = await getPostBySlug(slug, locale);

	if (!post || post.translations.length === 0) {
		notFound();
	}

	const translation = post.translations[0];
	const content = await markdownToHtml(translation.content);

	return (
		<article className="px-4 py-6 md:px-6 md:py-12 lg:py-16 min-h-[100dvh]">
			<div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
				<h1 className="text-4xl font-bold mb-4">{translation.title}</h1>
				<h2 className="text-gray-600 mb-2 text-lg">{translation.summary}</h2>
				<span className="text-gray-500 mb-8">{new Date(post.createdAt).toLocaleDateString(locale)}</span>
				<div className="flex flex-wrap gap-2 mb-4">
					{post.tags.map(({ tag }) => (
						<span key={tag.id} className="py-1 text-sm">
							{tag.name}
						</span>
					))}
				</div>
				{post.image && (
					<Image src={post.image || "/placeholder.svg"} alt={translation.title} width={400} height={400} className="my-4 mx-auto" />
				)}
				<div className="prose prose-gray max-w-none dark:prose-invert py-2" dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</article>
	);
}
