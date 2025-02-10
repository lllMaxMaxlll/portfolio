"use client";

import { ReactTyped } from "react-typed";
import { useTranslations } from "next-intl";
import DotHoverEffect from "@/components/ui/dotHoverEffect";

const Landing = () => {
	const t = useTranslations("Homepage");

	return (
		<div className="relative flex justify-center content-center min-h-[70vh] md:min-h-[80vh]">
			<div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				<DotHoverEffect>
					<h1 className="text-4xl lg:text-6xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto cursor-default">
						{t("title")}
					</h1>
					<div className="text-center mx-auto">
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
					</div>
				</DotHoverEffect>
			</div>
		</div>
	);
};

export default Landing;
