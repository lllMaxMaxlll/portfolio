import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import mdx from "@next/mdx";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ksrabfjypxaylapkwyvw.supabase.co",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"], // Add MDX support
};

export default withNextIntl(
	mdx({
		extension: /\.mdx?$/,
	})(nextConfig)
);
