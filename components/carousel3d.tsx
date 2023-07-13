"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, LinkIcon, projects } from "@/utils";
import Image from "next/image";

const Carousel3d = () => {
	const [labelIndex, setLabelIndex] = useState(1);
	const savedCallback = useRef();

	const callback = () => {
		if (labelIndex === projects?.length) {
			setLabelIndex(1);
		} else {
			setLabelIndex(labelIndex + 1);
		}
	};

	useEffect(() => {
		// @ts-ignore
		savedCallback.current = callback;
	});

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
		<section className="absolute left-0 right-0 top-0 bottom-0 flex justify-center content-center">
			{projects.map((p, index) => {
				const isActive = labelIndex === index + 1;
				const isLeft = (labelIndex === 1 && index + 1 === projects.length) || (labelIndex > 1 && labelIndex - 2 === index);

				return (
					<div
						key={`card-${index + 1}`}
						className={`absolute left-0 right-0 top-28 w-3/4 lg:w-2/3 m-auto flex flex-col content-center transition text-center ${
							isActive && "group z-20"
						}`}>
						{/* Image project */}
						<div className="flex justify-center content-center">
							{isActive && (
								<button className="active:-translate-x-1 transition " onClick={handlePrev}>
									<ChevronLeft />
								</button>
							)}
							<Image
								src={p.image}
								alt={p.title}
								width="500"
								height="200"
								className={`w-full md:w-3/4 lg:w-2/3 h-auto mx-auto transition
                ${
									isActive
										? "drop-shadow-md translate-x-0 z-10"
										: isLeft
										? "hidden md:block opacity-5 blur-sm -z-10 translate-x-20 grayscale pointer-events-none text-transparent"
										: "hidden md:block opacity-5 blur-sm -translate-x-20 grayscale pointer-events-none -z-10 "
								}`}
							/>
							{isActive && (
								<button className="active:translate-x-1 transition" onClick={handleNext}>
									<ChevronRight />
								</button>
							)}
						</div>
						{/* Info active project */}
						{isActive && (
							<>
								<h2 className="text-xl sm:text-3xl font-bold pt-5">{p.title}</h2>
								<p className="pt-2 font-thin">{p.description}</p>
								<p className="pt-2 text-sm md:text-base font-semibold md:opacity-0 transition md:group-hover:opacity-100">
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
		</section>
	);
};

export default Carousel3d;
