import { Github, LinkIcon } from "@/utils";
import { ProjectData } from "@/utils/projects";
import Image from "next/image";

function CardCarousel({ image, title, description, github, demo }: ProjectData) {
	return (
		<div className="relative flex flex-col text-center justify-center items-center group">
			<Image src={image} alt={title} width="700" height="300" />
			<h2 className="text-xl sm:text-3xl font-bold pt-5">{title}</h2>
			<p className="pt-2 font-thin">{description}</p>
			<div className="absolute -bottom-11 flex p-3 opacity-0 transition group-hover:translate-y-4 group-hover:opacity-100 ">
				{demo && (
					<a href={demo} className="px-3 hover:opacity-75 transition" target="_blank" role="button">
						<LinkIcon />
					</a>
				)}
				{github && (
					<a
						href={github}
						className="px-3 fill-neutral-900 dark:fill-neutral-200 hover:opacity-75 transition"
						target="_blank"
						role="button">
						<Github />
					</a>
				)}
			</div>
		</div>
	);
}

export default CardCarousel;
