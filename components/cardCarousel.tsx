import { Github, LinkIcon } from "@/utils";
import { ProjectData } from "@/utils/projects";
import Image from "next/image";

function CardCarousel({ image, title, description, technologies, github, demo }: ProjectData) {
	return (
		<div className="relative flex flex-col text-center justify-center items-center group">
			<Image src={image} alt={title} width="500" height="200" className="w-auto h-auto" />
			<h2 className="text-xl sm:text-3xl font-bold pt-5">{title}</h2>
			<p className="pt-2 font-thin">{description}</p>
			<p className="pt-2 text-sm md:text-base font-semibold md:opacity-0 transition md:group-hover:opacity-100">
				{technologies.join(" - ")}
			</p>
			<div className="z-10 flex py-5 md:opacity-0 transition md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
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
