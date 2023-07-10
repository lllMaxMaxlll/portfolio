"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "./header";

function NavMobile({ pathname }: { pathname: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="absolute inset-y-0 right-4 flex items-center md:hidden z-20">
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-md p-2 text-neutral-200  hover:text-neutral-400 focus:outline-none"
					data-collapse-toggle="mobile-menu"
					aria-controls="mobile-menu"
					aria-expanded="false"
					onClick={() => setIsOpen(!isOpen)}>
					<span className="sr-only">Open main menu</span>
					<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						{isOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						)}
					</svg>
				</button>
			</div>
			<nav
				className={`absolute ${
					isOpen ? "translate-y-20" : "-translate-y-32 opacity-0"
				} bg-neutral-900 top-0 right-0 left-0 px-5 py-10 w-full transition`}>
				<ul className="flex flex-col gap-6 text-sm">
					{navigation.map((link) => {
						const isActive = pathname === link.href;

						return (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(!isOpen)}
								className={`${!isActive && "text-neutral-500"} transition hover:text-neutral-300`}>
								{link.name}
							</Link>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default NavMobile;
