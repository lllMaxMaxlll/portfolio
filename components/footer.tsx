import { Instagram, Linkedin, Github } from "@/utils";

function Footer() {
	return (
		<footer className="fixed w-screen bottom-16">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 py-2">
				<div className="flex h-16 items-center justify-end">
					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block z-50">
							<ul className="flex flex-col items-center gap-6 text-sm ">
								<a
									className="fill-neutral-500 transition hover:fill-neutral-200/75 hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)]"
									href="https://github.com/lllMaxMaxlll"
									target="_blank">
									<Github />
								</a>
								<a
									className="fill-neutral-500 transition hover:fill-sky-500/75 hover:drop-shadow-[0_10px_10px_rgba(14,118,168,0.25)]"
									href="https://www.linkedin.com/in/maximiliano-herr-720634227/"
									target="_blank">
									<Linkedin />
								</a>
								<a
									className="fill-neutral-500 transition hover:fill-rose-500/75 hover:drop-shadow-[0_10px_10px_rgba(225,48,108,0.25)]"
									href="https://www.instagram.com/_max_herr_/"
									target="_blank">
									<Instagram />
								</a>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
