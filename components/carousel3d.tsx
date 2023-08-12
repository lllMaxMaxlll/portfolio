"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Github, LinkIcon, projects } from "@/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Carousel3d = () => {
	const t = useTranslations("Projects");
	const [labelIndex, setLabelIndex] = useState(1);

	const handleNext = () => {
		if (labelIndex === projects?.length) {
			setLabelIndex(1);
		} else {
			setLabelIndex(labelIndex + 1);
		}
	};

	const handlePrev = () => {
		if (labelIndex === 1) {
			setLabelIndex(projects?.length);
		} else {
			setLabelIndex(labelIndex - 1);
		}
	};

	return (
		<motion.div initial={{ opacity: 0, translateY: 15 }} animate={{ opacity: 1, translateY: 0 }} className="relative h-[80vh]">
			{projects.map((p, index) => {
				const isActive = labelIndex === index + 1;
				const isLeft = (labelIndex === 1 && index + 1 === projects.length) || (labelIndex > 1 && labelIndex - 2 === index);
				const formattedTitle = p.title.split(" ").join("");
				//@ts-ignore
				const projectDescription = t(formattedTitle);

				return (
					<div
						key={`card-${index + 1}`}
						className={`absolute left-0 right-0 top-0 w-3/4 lg:w-2/3 h-full mx-auto py-5 flex flex-col ${isActive && "group z-10"}`}>
						<div className="flex justify-center h-auto">
							{isActive && (
								<button className="p-2 active:-translate-x-1 transition" onClick={handlePrev}>
									<ChevronLeft />
								</button>
							)}
							{/* Image project */}
							<Image
								src={p.image}
								alt={p.title}
								width="854"
								height="480"
								placeholder="blur"
								blurDataURL={p.imageBlur}
								className={`w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto mx-auto transition
                ${
									isActive
										? "drop-shadow-md translate-x-0 z-10"
										: isLeft
										? "hidden md:block opacity-5 blur-sm -z-10 translate-x-20 grayscale pointer-events-none"
										: "hidden md:block opacity-5 blur-sm -translate-x-20 grayscale pointer-events-none -z-10 "
								}`}
							/>
							{isActive && (
								<button className="active:translate-x-1 transition p-2 " onClick={handleNext}>
									<ChevronRight />
								</button>
							)}
						</div>
						{/* Info active project */}
						{isActive && (
							<>
								<h2 className="text-xl sm:text-3xl font-bold pt-5 text-center">{p.title}</h2>
								<p className="pt-2 font-thin">{projectDescription}</p>
								<p className="pt-2 text-sm md:text-base font-semibold md:opacity-0 transition md:group-hover:opacity-100 text-center">
									{p.technologies.join(" - ")}
								</p>

								{/* Buttons link projects */}

								<div className="py-3 mx-auto z-10 flex md:opacity-0 transition md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
									{p.demo && (
										<a href={p.demo} className="px-3 hover:opacity-75 transition" target="_blank" role="button">
											<LinkIcon />
										</a>
									)}
									{p.github && (
										<a
											href={p.github}
											className="px-3 fill-neutral-900 dark:fill-neutral-200 hover:opacity-75 transition"
											target="_blank"
											role="button">
											<Github />
										</a>
									)}
								</div>
							</>
						)}
					</div>
				);
			})}
		</motion.div>
	);
};

export default Carousel3d;
