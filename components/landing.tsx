"use client";

import { useMousePosition } from "../utils";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function Landing() {
	const t = useTranslations("Homepage");

	const [position, setPosition] = useState({ x: 0, y: 0 });
	const mousePosition = useMousePosition();

	const isDark = useTheme().resolvedTheme === "dark";

	useEffect(() => {
		setPosition(mousePosition);
	}, [mousePosition]);

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 15 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="relative flex justify-center content-center h-[80vh]">
			<div
				className="hidden md:block absolute -top-32 -left-40 -z-10 rounded-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  dark:from-neutral-700  dark:via-neutral-800 to-transparent blur-3xl"
				style={{ transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`, width: "50%", height: "30rem" }}></div>
			<div className="flex flex-col justify-center select-none">
				<p className="mb-2 ps-1 text-start dark:text-neutral-500 text-base md:text-xl">{t("subtitleTop")}</p>
				<h1
					suppressHydrationWarning
					className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center"
					style={{
						filter: `drop-shadow(${position.x * 0.01}px ${position.y * 0.01 + 5}px 10px ${
							isDark || isDark === undefined ? "#000000" : "#00000090"
						})`,
					}}>
					MAX HERR
				</h1>
				<div className="block text-end mt-2 dark:text-neutral-500 text-base md:text-xl">
					<Typewriter
						options={{
							strings: t("typewriter").split(","),
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default Landing;
