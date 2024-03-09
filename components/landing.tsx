"use client";

import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SparklesCore } from "./";
import { CardBody, CardContainer, CardItem } from "./3d-card";

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

				<CardContainer className="inter-var">
					<CardBody className="relative group/card select-none">
						<CardItem as="p" translateZ={30} className="mb-2 ms-2 text-start text-base md:text-xl">
							{t("subtitleTop")}
						</CardItem>
						<CardItem
							// suppressHydrationWarning
							as="h1"
							className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center">
							MAX HERR
						</CardItem>
						<CardItem translateZ={20} className="text-end mt-2 text-base md:text-xl ms-2">
							<Typewriter
								options={{
									strings: t("typewriter").split(","),
									autoStart: true,
									loop: true,
								}}
							/>
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
		</motion.div>
	);
}

export default Landing;
