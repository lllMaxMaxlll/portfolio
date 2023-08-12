"use client";

import { aboutIcons } from "@/utils";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function AboutMe() {
	const t = useTranslations("About");

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 15 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="flex flex-col md:flex-row justify-center content-center h-[80vh] gap-5 mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center content-center">
				<h2 className="text-2xl sm:text-4xl font-bold py-5">{t("title")}</h2>
				<p>{t("firstP")}</p>
				<br />
				<p className="hidden sm:block">{t("secondP")}</p>
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 py-5">
					{aboutIcons.map((icon, i) => (
						<svg
							key={i}
							role="img"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className=" fill-neutral-900 dark:fill-neutral-200">
							<title>{icon.title}</title>
							<path d={icon.path} />
						</svg>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default AboutMe;
