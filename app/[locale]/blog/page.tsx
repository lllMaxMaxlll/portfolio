import { getAllPosts } from "@/actions/blogPostActions";
import { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import Link from "next/link";

type ParamsType = Promise<{ locale: string }>;

type MetadataLayoutMessages = {
	title: string;
	blog: string;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, blog } = messages.MetadataLayout;

	return {
		title: `${title} | ${blog}`,
	};
}

export default async function Blog() {
	const locale = await getLocale();
	const posts = await getAllPosts(locale);

	return (
		<div className="px-4 min-h-[70vh] md:min-h-[80vh]">
			<div className="max-w-4xl mx-auto py-8">
				{posts?.map((post) => (
					<article key={post.id} className="mb-8 pb-4 hover:bg-accent hover:text-accent-foreground">
						<Link href={`/${locale}/blog/${post.slug}`}>
							<h2 className="text-2xl font-semibold hover:underline py-2">{post.translations[0].title}</h2>
						</Link>
						<p className="text-gray-600 mb-2">{post.translations[0].summary}</p>
						<div className="flex flex-wrap gap-2 mb-2">
							{/*
              REPLACE WITH LINK TO FIND BY TAGS
              */}

							{post.tags.map((tag) => (
								<span key={tag.id} className="py-1 text-sm cursor-pointer">
									{tag.tag.name}
								</span>
							))}
						</div>
						<p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString(locale)}</p>
					</article>
				))}
			</div>{" "}
		</div>
	);
}
