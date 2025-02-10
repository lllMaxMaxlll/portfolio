import { getAllPostForParams } from "@/actions/blogPostActions";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getMDXContent } from "@/lib/mdx";
import { Metadata } from "next";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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
	const locale = await getLocale();
	const slug = (await params).slug;

	const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return {};

	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = matter(fileContent);

	return {
		title: data.title,
		description: data.summary,
		openGraph: {
			title: data.title,
			description: data.summary,
			images: data.image ? [{ url: data.image, width: 800, height: 400, alt: data.title }] : [],
		},
	};
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const locale = await getLocale();
	const t = await getTranslations("Blog");

	const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return notFound();

	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);
	const mdxContent = await getMDXContent(content);

	return (
		<article className="px-4 py-6 md:px-6 md:py-12 lg:py-16 min-h-[100dvh]">
			<div className="prose prose-neutral max-w-3xl mx-auto dark:prose-invert">
				<Link
					href={`/${locale}/blog`}
					className="inline-flex items-center p-2 rounded-lg mb-4 hover:bg-accent hover:text-accent-foreground transition-all">
					<ArrowLeft className="w-4 h-4 mr-2" />
					{t("backButton")}
				</Link>
				<h1 className="text-4xl font-bold mb-4">{data.title}</h1>
				<h2 className="text-neutral-600 dark:text-neutral-400 mb-2 text-lg">{data.summary}</h2>
				<span className="text-neutral-500 mb-8 text-sm">{new Date(data.date).toLocaleDateString(locale)}</span>
				<div>
					{data.tags.map((tag: string) => (
						<Badge key={tag} className="me-1">
							{tag}
						</Badge>
					))}
				</div>
				<Image
					src={data.image}
					alt={data.title || "Blog post image"}
					width={800}
					height={400}
					className="my-4 mx-auto rounded-lg shadow-md max-w-full"
				/>
				{mdxContent.content}
			</div>
		</article>
	);
}
