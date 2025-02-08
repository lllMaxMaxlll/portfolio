import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
	images: string[];
	className?: string;
};

export default function ProjectImagesCarousel({ images, className }: Props) {
	return (
		<Carousel className="w-full py-4 ">
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem className="flex items-center justify-center" key={index}>
						<Image
							className={cn("transition duration-300", className)}
							src={image}
							width={600}
							height={400}
							loading="lazy"
							decoding="async"
							alt={`Screenshot_${index}`}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="text-neutral-100" />
			<CarouselNext className="text-neutral-100" />
		</Carousel>
	);
}
