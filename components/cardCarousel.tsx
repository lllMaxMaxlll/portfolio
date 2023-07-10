import { ProjectData } from "@/utils/projects";
import Image from "next/image";

function CardCarousel({ image, title, description, technologies }: ProjectData) {
	return (
		<div className="flex flex-col text-center justify-center content-center">
			<Image src={image} alt={title} width="700" height="300" />
			<h2 className="text-3xl font-bold  pt-5">{title}</h2>
			<p className="pt-2">{description}</p>
		</div>
	);
}

export default CardCarousel;
