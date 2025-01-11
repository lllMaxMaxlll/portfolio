import { GrInstagram, GrLinkedin, GrGithub, GrMail } from "react-icons/gr";

import { IconHoverEffect } from "@/components/ui/iconHoverEffect";

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
	return (
		<footer className="absolute mb-20 md:relative flex items-center justify-center w-full bottom-4 md:bottom-0 z-10">
			<div className="mx-auto px-5 flex items-center justify-center">
				<IconHoverEffect items={itemsFooter} />
			</div>
			<p className="hidden md:block absolute right-6 bottom-2 cursor-default text-sm font-thin">Designed by me with &hearts;</p>
		</footer>
	);
}

export default Footer;
