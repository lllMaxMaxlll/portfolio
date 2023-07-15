import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
	title: "Max Herr | Home",
	description: "Max Herr Full Stack Web Developer",
	keywords: "Max Herr, Portfolio, Web Developer, Full Stack",
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: any }) {
	let messages;

	try {
		messages = (await import(`../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${rubik.className} text-neutral-900 bg-neutral-200 dark:text-neutral-100 dark:bg-neutral-900 overflow-hidden absolute top-0 w-screen h-screen`}
				suppressHydrationWarning>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
