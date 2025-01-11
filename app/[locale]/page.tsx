"use client";

import { ReactTyped } from "react-typed";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import DotHoverEffect from "@/components/dotHoverEffect";

const Landing = () => {
	const t = useTranslations("Homepage");

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 15 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="relative flex justify-center content-center h-[80vh] ">
			<div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				<DotHoverEffect>
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 0.5,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className="text-4xl lg:text-6xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
						{t("title")}
					</motion.h1>
					<motion.text
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 0.5,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className="text-center mx-auto">
						{/* Typewriter effect */}
						<ReactTyped
							strings={t("typewriter").split(",")}
							typeSpeed={50}
							loop
							backSpeed={20}
							cursorChar="|"
							showCursor={true}
							className=""
						/>
					</motion.text>
				</DotHoverEffect>
			</div>
		</motion.div>
	);
};

export default Landing;
