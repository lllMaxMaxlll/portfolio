import { Instagram, Linkedin, Github, Mail } from "../utils";
import { HoverEffect } from "./card-hover-effect";

const itemsFooter = [
	{
		icon: <Mail />,
		link: "mailto:max.herr.88@gmail.com",
		color: "fill-neutral-900 dark:fill-neutral-200 transition hover:fill-red-800 dark:hover:fill-red-400",
		background: "bg-red-300/[0.8] dark:bg-red-800/[0.8]",
	},
	{
		icon: <Linkedin />,
		link: "https://www.linkedin.com/in/maxherrwebdeveloper/",
		color: "fill-neutral-900 dark:fill-neutral-200 transition hover:fill-sky-800 dark:hover:fill-sky-400",
		background: "bg-sky-300/[0.8] dark:bg-sky-800/[0.8]",
	},
	{
		icon: <Github />,
		link: "https://github.com/lllMaxMaxlll",
		color: "fill-neutral-900 dark:fill-neutral-100 transition hover:fill-neutral-600 dark:hover:fill-neutral-300",
		background: "bg-neutral-300/[0.8] dark:bg-neutral-400/[0.8]",
	},
	{
		icon: <Instagram />,
		link: "https://www.instagram.com/_max_herr_/",
		color: "fill-neutral-900 dark:fill-neutral-200 transition hover:fill-rose-500 dark:hover:fill-rose-400",
		background: "bg-rose-300/[0.8] dark:bg-rose-800/[0.8]",
	},
];

function Footer() {
	return (
		<footer className="absolute bottom-0 left-0 right-0 w-screen h-[10vh] flex z-10">
			<div className="mx-auto px-5 sm:px-6 lg:px-16 flex items-center justify-center">
				<HoverEffect items={itemsFooter} />
			</div>
			<p className="absolute hidden md:block right-6 bottom-4 text-sm font-thin">Designed by me with &hearts;</p>
		</footer>
	);
}

export default Footer;
