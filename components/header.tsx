"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const navigation = [
	{ name: "HOME", href: "/" },
	{ name: "PROJECTS", href: "/projects" },
	{ name: "CONTACT", href: "/contact" },
];

function Header() {
	const pathname = usePathname();

	return (
		<header className="fixed w-screen z-10">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 py-2">
				<div className="flex h-16 items-center justify-between">
					<div className="text-2xl font-bold transition hover:text-neutral-300/75">
						<Link href="/">{"</>"}</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{navigation.map((link) => {
									const isActive = pathname.startsWith(link.href);

									return (
										<Link
											key={link.href}
											href={link.href}
											className={`${isActive ? "text-neutral-200 cursor-default" : "text-neutral-500"} transition hover:text-neutral-300`}>
											{link.name}
										</Link>
									);
								})}
							</ul>
						</nav>

						<div className="block md:hidden">
							<button className="rounded p-2 text-neutral-200 transition hover:text-neutral-500/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;

/*
<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

        </div>
*/
