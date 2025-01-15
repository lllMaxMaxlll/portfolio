"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "./ui/button";

export function MobileNavbar({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const overflow = isOpen ? "hidden" : "auto";
		document.documentElement.style.overflow = overflow;
	}, [isOpen]);

	useEffect(() => {
		const closeHamburgerNavigation = () => setIsOpen(false);
		window.addEventListener("orientationchange", closeHamburgerNavigation);
		window.addEventListener("resize", closeHamburgerNavigation);

		return () => {
			window.removeEventListener("orientationchange", closeHamburgerNavigation);
			window.removeEventListener("resize", closeHamburgerNavigation);
		};
	}, []);

	return (
		<>
			<Button variant="ghost" className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <X /> : <Menu />}
			</Button>
			{isOpen && (
				<div
					className="fixed inset-0 pt-[10vh] h-96 z-40 overflow-auto bg-primary-foreground/75 backdrop-blur rounded-b-3xl animate-in slide-in-from-top-24 md:hidden"
					onClick={() => setIsOpen(false)}>
					{children}
				</div>
			)}
		</>
	);
}
