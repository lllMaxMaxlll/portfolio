import { Footer, Header } from "@/components";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
	title: "I'm Max",
	description: "Portolio Max Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${rubik.className} text-neutral-100 bg-neutral-900`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
