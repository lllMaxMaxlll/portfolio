"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {Link} from "next-view-transitions";

export default function Error({ error }: { error: Error & { digest?: string }}) {
	const t = useTranslations("Error");

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="flex flex-col md:flex-row justify-center content-center h-[80vh] mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center items-center gap-y-5">
				<h2 className="text-2xl sm:text-4xl font-bold text-center">{t("title")}</h2>
				<p className="text-center">{t("message")}</p>
				<Button variant="ghost"  asChild>
					<Link href="/">
						{t("button")}
					</Link>
				</Button>
			</div>
		</section>
	);
}
