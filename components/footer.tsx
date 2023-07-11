import { Instagram, Linkedin, Github, Mail } from "../utils";

function Footer() {
	return (
		<footer className="fixed bottom-5 w-screen z-50">
			<div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-16 py-2">
				<div className="flex justify-center items-center">
					<ul className="flex items-center justify-center gap-3">
						<a className="stroke-neutral-500 transition hover:stroke-red-600/75" href="mailto:max.herr.88@gmail.com" target="_blank">
							<Mail />
						</a>
						<a
							className="fill-neutral-500 transition hover:fill-sky-500/75"
							href="https://www.linkedin.com/in/maximiliano-herr-720634227/"
							target="_blank">
							<Linkedin />
						</a>
						<a className="fill-neutral-500 transition hover:fill-neutral-200/75" href="https://github.com/lllMaxMaxlll" target="_blank">
							<Github />
						</a>
						<a className="fill-neutral-500 transition hover:fill-rose-500/75" href="https://www.instagram.com/_max_herr_/" target="_blank">
							<Instagram />
						</a>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
