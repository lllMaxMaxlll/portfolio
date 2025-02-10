"use client";

import { useTranslations } from "next-intl";
import { LogoCarousel } from "@/components/ui/logoCarousel";

function AboutMe() {
	const t = useTranslations("About");

	return (
		<div className="flex flex-col md:flex-row justify-center content-center min-h-[70vh] md:min-h-[80vh] gap-5 mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center content-center">
				<h2 className="text-2xl sm:text-4xl font-bold py-5">{t("title")}</h2>
				<p>{t("firstP")}</p>
				<br />
				<p>{t("secondP")}</p>

				<LogoCarousel columnCount={4} />
			</div>
		</div>
	);
}

export default AboutMe;
