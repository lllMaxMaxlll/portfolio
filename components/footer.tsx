import { Instagram, Linkedin, Github } from "../utils";

function Footer() {
	return (
		<footer className="fixed w-screen bottom-8">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 py-2">
				<div className="flex items-center md:gap-12 justify-center ">
					<ul className="flex items-center gap-6 text-sm ">
						<a className="fill-neutral-500 transition hover:fill-neutral-200/75" href="https://github.com/lllMaxMaxlll" target="_blank">
							<Github />
						</a>
						<a
							className="fill-neutral-500 transition hover:fill-sky-500/75"
							href="https://www.linkedin.com/in/maximiliano-herr-720634227/"
							target="_blank">
							<Linkedin />
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
