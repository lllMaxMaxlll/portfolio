import { Instagram, Linkedin, Github, Mail } from "../utils";

function Footer() {
	return (
		<footer className="absolute bottom-0 left-0 right-0 w-screen h-[10vh] flex z-10">
			<div className="mx-auto px-5 sm:px-6 lg:px-16 flex content-center justify-center">
				<div className="flex justify-center items-center ">
					<ul className="flex items-center justify-center">
						<a
							className="fill-neutral-900 dark:fill-neutral-200 transition hover:fill-red-600/75 dark:hover:fill-red-600/75 px-2"
							href="mailto:max.herr.88@gmail.com"
							target="_blank"
							role="button">
							<Mail />
						</a>
						<a
							className="fill-neutral-900 dark:fill-neutral-200 transition hover:fill-sky-500/75 dark:hover:fill-sky-500/75  px-2"
							href="https://www.linkedin.com/in/maximiliano-herr-720634227/"
							target="_blank"
							role="button">
							<Linkedin />
						</a>
						<a
							className="fill-neutral-900 dark:fill-neutral-200 transition hover:opacity-75 dark:hover:opacity-75 px-2"
							href="https://github.com/lllMaxMaxlll"
							target="_blank"
							role="button">
							<Github />
						</a>
						<a
							className="fill-neutral-900 dark:fill-neutral-200 transition hover:fill-rose-500/75 dark:hover:fill-rose-500/75  px-2"
							href="https://www.instagram.com/_max_herr_/"
							target="_blank"
							role="button">
							<Instagram />
						</a>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
