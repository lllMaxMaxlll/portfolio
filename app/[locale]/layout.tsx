import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Max Herr | Home",
	description: "Max Herr Full Stack Web Developer",
	keywords: "Max Herr, Portfolio, Web Developer, Full Stack",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { locale } = await params;
	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as "en" | "es")) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${rubik.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
