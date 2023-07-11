import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
	title: "Max Herr Portfolio",
	description: "Max Herr Full Stack Web Developer",
	keywords: "Max Herr, Portfolio, Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${rubik.className} text-neutral-900 bg-neutral-200 dark:text-neutral-100 dark:bg-neutral-900 overflow-hidden`}
				suppressHydrationWarning>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
