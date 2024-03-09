"use client";

import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SparklesCore } from "./";

function Landing() {
	const t = useTranslations("Homepage");

	const isDark = useTheme().resolvedTheme === "dark";

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 15 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="relative flex justify-center content-center h-[80vh]">
			<div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				{/* Particles */}
				<div className="w-full h-[100vh] fixed -z-10 inset-0 top-0">
					<SparklesCore
						id="tsparticlesfullpage"
						background="transparent"
						minSize={0.6}
						maxSize={1.4}
						particleDensity={100}
						className="w-full h-full"
						particleColor={isDark ? "#FFFFFF" : "#000000"}
					/>
				</div>

				{/* Text */}
				<div className="flex flex-col justify-center select-none">
					<p className="mb-2 ps-1 text-start  text-base md:text-xl">{t("subtitleTop")}</p>
					<h1 suppressHydrationWarning className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center">
						MAX HERR
					</h1>
					<div className="block text-end mt-2  text-base md:text-xl">
						<Typewriter
							options={{
								strings: t("typewriter").split(","),
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Landing;
