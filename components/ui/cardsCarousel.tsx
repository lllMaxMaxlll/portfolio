"use client";
import React, { useEffect, useRef, useState, createContext, useContext, JSX } from "react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { Badge } from "./badge";
import ProjectImagesCarousel from "../projects-images-carousel";

interface CarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
}

type Card = {
	src: string;
	title: string;
	tags: string[];
	images: string[];
	content: React.ReactNode;
};

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
			setCurrentIndex(index);
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	return (
		<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
			<div className="relative w-full">
				<div
					className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none]"
					ref={carouselRef}
					onScroll={checkScrollability}>
					<div className={cn("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}></div>

					<div className={cn("flex flex-row justify-start gap-4 pl-4", "max-w-7xl mx-auto")}>
						{items.map((item, index) => (
							<div key={"card" + index} className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
								{item}
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-end gap-2 mr-10">
					<button
						className="relative z-40 h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50"
						onClick={scrollLeft}
						disabled={!canScrollLeft}>
						<ArrowLeft className="h-6 w-6 text-gray-500" />
					</button>
					<button
						className="relative z-40 h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50"
						onClick={scrollRight}
						disabled={!canScrollRight}>
						<ArrowRight className="h-6 w-6 text-gray-500" />
					</button>
				</div>
			</div>
		</CarouselContext.Provider>
	);
};

export const Card = ({ card, index }: { card: Card; index: number }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { onCardClose, currentIndex } = useContext(CarouselContext);
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				handleClose();
			}
		}

		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		onCardClose(index);
	};

	return (
		<>
			<AnimatePresence>
				{open && (
					<div className="fixed inset-0 h-screen z-50 overflow-auto">
						<div className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
						<div ref={containerRef} className="max-w-5xl mx-auto  h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative">
							<button
								className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center text-neutral-100"
								onClick={handleClose}>
								<X className="h-6 w-6" />
							</button>
							<p className="text-2xl md:text-5xl font-semibold text-neutral-100 my-4">{card.title}</p>
							<div className="text-base font-medium text-neutral-100">
								{card.tags.map((tag) => {
									return (
										<Badge key={tag} variant="secondary" className="me-1">
											{tag}
										</Badge>
									);
								})}
							</div>
							<ProjectImagesCarousel images={card.images} />

							<>{card.content}</>
						</div>
					</div>
				)}
			</AnimatePresence>
			<button
				onClick={handleOpen}
				className="rounded-3xl h-80 w-56 md:h-96 md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 hover:-translate-y-2 transition">
				<div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-neutral-900/70 via-transparent to-transparent z-30 pointer-events-none" />
				<div className="relative z-40 p-8">
					<p className="text-neutral-100 text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
						{card.title}
					</p>
				</div>
				<BlurImage src={card.src} alt={card.title} sizes="50%" fill className="object-cover absolute z-10 inset-0" />
			</button>
		</>
	);
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<Image
			className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
			onLoad={() => setLoading(false)}
			src={src}
			width={width}
			height={height}
			loading="lazy"
			decoding="async"
			blurDataURL={typeof src === "string" ? src : undefined}
			alt={alt ? alt : "Screenshot"}
			{...rest}
		/>
	);
};
