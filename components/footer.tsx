import { GrInstagram, GrLinkedin, GrGithub, GrMail } from "react-icons/gr";

import { IconHoverEffect } from "@/components/ui/iconHoverEffect";
import { Feedback } from "./feedback";
import { useTranslations } from "next-intl";

const itemsFooter = [
	{
		icon: <GrMail size={"1.5em"} />,
		link: "mailto:max.herr.88@gmail.com",
		color: " transition hover:fill-red-800 dark:hover:fill-red-400",
		background: "bg-red-300/[0.8] dark:bg-red-800/[0.8]",
	},
	{
		icon: <GrLinkedin size={"1.5em"} />,
		link: "https://www.linkedin.com/in/maxherrwebdeveloper/",
		color: " transition hover:fill-sky-800 dark:hover:fill-sky-400",
		background: "bg-sky-300/[0.8] dark:bg-sky-800/[0.8]",
	},
	{
		icon: <GrGithub size={"1.5em"} />,
		link: "https://github.com/lllMaxMaxlll",
		color: "transition hover:fill-neutral-600 dark:hover:fill-neutral-300",
		background: "bg-neutral-300/[0.8] dark:bg-neutral-400/[0.8]",
	},
	{
		icon: <GrInstagram size={"1.5em"} />,
		link: "https://www.instagram.com/_max_herr_/",
		color: " transition hover:fill-purple-500 dark:hover:fill-purple-400",
		background: "bg-purple-300/[0.8] dark:bg-purple-800/[0.8]",
	},
];

function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="w-full text-center">
			<div className="relative flex flex-col items-center">
				<Feedback />
				<IconHoverEffect items={itemsFooter} />
				<p className="hidden md:block cursor-default text-sm font-thin">{t("designedText")} &hearts;</p>
			</div>
		</footer>
	);
}

export default Footer;
