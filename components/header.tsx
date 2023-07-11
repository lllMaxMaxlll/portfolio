"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMobile, Switcher } from "../components";

export const navigation = [
	{ name: "HOME", href: "/" },
	{ name: "PROJECTS", href: "/projects" },
	{ name: "ABOUT", href: "/about" },
];

function Header() {
	const pathname = usePathname();

	return (
		<header className="fixed w-screen z-50">
			<div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-16 py-2">
				<div className="flex h-16 items-center justify-between">
					<div className="text-xl md:text-2xl font-bold transition hover:text-neutral-300/75">
						<Link href="/">{"</>"}</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{navigation.map((link) => {
									const isActive = pathname === link.href;

									return (
										<li key={link.href}>
											<Link
												href={link.href}
												className={`${
													isActive ? "font-semibold cursor-default" : "text-neutral-700 dark:text-neutral-500"
												} transition dark:hover:text-neutral-300 hover:text-neutral-600`}>
												{link.name}
											</Link>
										</li>
									);
								})}
								<li>
									<Switcher />
								</li>
							</ul>
						</nav>
					</div>
					<NavMobile pathname={pathname} />
				</div>
			</div>
		</header>
	);
}

export default Header;
