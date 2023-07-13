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
		<header className="relative top-0 left-0 right-0 h-[10vh] w-full">
			<div className="w-full mx-auto px-5 sm:px-6 lg:px-16">
				<div className="flex items-center justify-between py-5">
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
