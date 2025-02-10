import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import { Badge } from "@/components/ui/badge";

export async function getMDXContent(content: string) {
	return compileMDX({
		source: content,
		options: {
			mdxOptions: {
				remarkPlugins: [remarkGfm, remarkMath],
				rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeSanitize, rehypePrettyCode],
			},
		},
		components: {
			Badge,
		},
	});
}
