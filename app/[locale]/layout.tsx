import "./globals.css";
import { Rubik } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin"] });

type Props = {
	params: { locale: string };
};

type MetadataLayoutMessages = {
	title: string;
	home: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, home } = messages.MetadataLayout;

	return {
		title: `${title} | ${home}`,
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
		<html lang={locale} suppressHydrationWarning>
			<body className={`${rubik.className} h-screen antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<NextIntlClientProvider messages={messages}>
						<main className="w-full">
							<Navbar />
							{children}
							<Footer />
						</main>
					</NextIntlClientProvider>
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
