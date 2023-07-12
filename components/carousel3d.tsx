"use client";

import React, { Children, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@/utils";

type Carousel3dProps = {
	children: React.ReactNode;
};

const Carousel3d = ({ children }: Carousel3dProps) => {
	const arrayChildren = Children.toArray(children);
	const [labelIndex, setLabelIndex] = useState(1);
	const savedCallback = useRef();

	const callback = () => {
		if (labelIndex === arrayChildren?.length) {
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
		if (labelIndex === arrayChildren?.length) {
			setLabelIndex(1);
		} else {
			setLabelIndex(labelIndex + 1);
		}
	};

	const handlePrev = () => {
		if (labelIndex === 1) {
			setLabelIndex(arrayChildren?.length);
		} else {
			setLabelIndex(labelIndex - 1);
		}
	};

	return (
		<section className="absolute flex justify-center content-center h-screen w-full overflow-hidden">
			{React.Children.map(arrayChildren, (child: React.ReactNode, index) => (
				<div
					key={`card-${index + 1}`}
					className={`absolute left-0 right-0 h-full w-3/4 md:w-2/3 lg:w-1/2 m-auto flex flex-col content-center justify-center transition group ${
						(labelIndex === 1 && index + 1 === arrayChildren.length) || (labelIndex > 1 && labelIndex - 2 === index)
							? "opacity-50 blur-md translate-x-20 text-transparent grayscale pointer-events-none"
							: labelIndex === index + 1
							? "drop-shadow-md translate-x-0 translate-y-0 z-10"
							: "opacity-50 blur-md -translate-x-20 text-transparent grayscale pointer-events-none"
					}`}>
					{child}
				</div>
			))}
			<div className="h-auto mx-auto absolute bottom-24 flex justify-between md:justify-around w-3/4 md:w-1/2 z-10">
				<button className="active:-translate-x-1 transition" onClick={handlePrev}>
					<ChevronLeft />
				</button>

				<button className="active:translate-x-1 transition" onClick={handleNext}>
					<ChevronRight />
				</button>
			</div>
		</section>
	);
};

export default Carousel3d;
