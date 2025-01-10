import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
