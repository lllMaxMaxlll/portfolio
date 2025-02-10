import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { BlogPostType, getAllPost } from "@/actions/blogPostActions";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	return { title: locale === "en" ? "Blog" : "Blog en Español" };
}

export default async function Blog() {
	const locale = await getLocale();

	const posts = (await getAllPost(locale)) as BlogPostType[];

	if (!posts) return notFound();

	return (
		<div className="px-4 min-h-[70vh] md:min-h-[80vh]">
			<div className="max-w-4xl mx-auto py-8">
				{posts.map((post) => (
					<article key={post.slug} className="mb-8 p-4 hover:bg-accent hover:text-accent-foreground rounded-lg">
						<Link href={`/${locale}/blog/${post.slug}`}>
							<h2 className="text-2xl font-semibold hover:underline pb-2">{post.title}</h2>
						</Link>
						<p className="text-neutral-600 mb-2">{post.summary}</p>
						<div className="my-2">
							{post.tags.map((tag) => (
								<Badge key={tag} variant="secondary" className="me-1">
									{tag}
								</Badge>
							))}
						</div>
						<p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString(locale)}</p>
					</article>
				))}
			</div>
		</div>
	);
}
