"use client";

import { Footer, Header } from "@/components";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class">
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</ThemeProvider>
	);
}
