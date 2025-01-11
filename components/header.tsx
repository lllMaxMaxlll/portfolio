"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import SwitcherLocale from "@/components/switcherLocale";
import ThemeToggle from "@/components/theme-toggle";

const Header = () => {
	const pathname = usePathname();
	const t = useTranslations("Navbar");
	const locale = useLocale();

	const navigation = [
		{ name: t("home"), href: "/" },
		{ name: t("projects"), href: "/projects" },
		{ name: t("about"), href: "/about" },
		{ name: t("blog"), href: "/blog" },
	];

	return (
		<header className="relative z-50 w-full">
			<div className="w-full mx-auto px-5 sm:px-6 lg:px-16">
				<div className="flex items-center justify-between py-5">
					<div className="text-xl md:text-2xl font-bold transition hover:text-neutral-300/75">
						<Link href="/">{"</>"}</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{navigation.map((link) => {
									const isActive = pathname.endsWith(link.href) || (link.name === "HOME" && pathname === "/en");

									return (
										<li key={link.href}>
											<Link
												href={`/${locale}/${link.href}`}
												className={`${
													isActive ? "font-semibold pointer-events-none" : "text-neutral-700 dark:text-neutral-500"
												} transition dark:hover:text-neutral-300 hover:text-neutral-600`}>
												{link.name}
											</Link>
										</li>
									);
								})}
								<li>
									<ThemeToggle />
								</li>
								<li>
									<SwitcherLocale />
								</li>
							</ul>
						</nav>
					</div>

					<div></div>
					{/* <NavMobile pathname={pathname} navigation={navigation} /> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
