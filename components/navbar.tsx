"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import SwitcherLocale from "@/components/switcherLocale";
import ThemeToggle from "@/components/theme-toggle";
import { MobileNavbar } from "./mobileNavbar";

const Navbar = () => {
	const pathname = usePathname();
	const t = useTranslations("Navbar");
	const locale = useLocale();

	const navigation = [
		{ name: t("home"), href: "/" },
		{ name: t("projects"), href: "/projects" },
		{ name: t("about"), href: "/about" },
		{ name: t("blog"), href: "/blog" },
	];

	const isActive = (linkHref: string) => pathname === `/${locale}${linkHref === "/" ? "" : linkHref}`;

	return (
		<header className="relative z-50 w-full">
			<div className="w-full mx-auto px-5 sm:px-6 lg:px-16">
				<div className="flex items-center justify-between py-5">
					<div className="text-xl md:text-2xl font-bold transition hover:text-neutral-300/75">
						<Link href="/">{"</>"}</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:items-center md:gap-12">
						<nav aria-label="Global">
							<ul className="flex items-center gap-6 text-sm">
								{navigation.map((link) => (
									<li key={link.href}>
										<Link
											href={`/${locale}${link.href}`}
											className={`${
												isActive(link.href)
													? "font-semibold text-black dark:text-white pointer-events-none"
													: "text-neutral-700 dark:text-neutral-500"
											} transition dark:hover:text-neutral-300 hover:text-neutral-600`}>
											{link.name}
										</Link>
									</li>
								))}
								<li>
									<ThemeToggle />
								</li>
								<li>
									<SwitcherLocale />
								</li>
							</ul>
						</nav>
					</div>

					{/* Mobile Navigation */}
					<MobileNavbar>
						<ul className="space-y-4 text-sm py-4 px-8">
							{navigation.map((link) => (
								<li key={link.href}>
									<Link
										href={`/${locale}${link.href}`}
										className={`${
											isActive(link.href) ? "font-semibold pointer-events-none" : "text-neutral-700 dark:text-neutral-500"
										} transition dark:hover:text-neutral-300 hover:text-neutral-600 text-lg`}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<div className="flex w-full justify-between gap-4 px-10">
							<ThemeToggle />
							<SwitcherLocale />
						</div>
					</MobileNavbar>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
