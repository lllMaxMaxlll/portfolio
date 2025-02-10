import "./globals.css";
import { Rubik } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";
import React from "react";
import { ViewTransitions } from "next-view-transitions";

const rubik = Rubik({ subsets: ["latin"] });

type ParamsType = Promise<{ locale: string }>;

type MetadataLayoutMessages = {
	title: string;
	home: string;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title } = messages.MetadataLayout;

	return {
		title: `${title} |  Full-Stack Developer Portfolio`,
		description: "Explore Max Herr's portfolio showcasing projects, blog posts, and developer journey.",
		openGraph: {
			title: "Max Herr | Full-Stack Developer Portfolio",
			description: "Discover Max Herr's journey as a developer and explore his projects and blog.",
			url: "https://www.maxherr.com",
			images: [
				{
					url: "https://www.maxherr.com/images/portfolio-preview.jpeg",
					width: 1200,
					height: 630,
					alt: "Max Herr's Portfolio Preview",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Max Herr | Full-Stack Developer Portfolio",
			description: "Discover Max Herr's journey as a developer and explore his projects and blog.",
			images: ["https://www.maxherr.com/images/portfolio-preview.jpeg"],
		},
		alternates: {
			canonical: "https://www.maxherr.com",
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { locale } = await params;
	if (!routing.locales.includes(locale as "en" | "es")) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<ViewTransitions>
			<html lang={locale} suppressHydrationWarning>
				<body className={`${rubik.className} antialiased`}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<NextIntlClientProvider messages={messages}>
							<main className="w-full">
								<Navbar />
								{children}
								<Footer />
							</main>
						</NextIntlClientProvider>
					</ThemeProvider>
					<SpeedInsights />
					<Analytics />
				</body>
			</html>
		</ViewTransitions>
	);
}
