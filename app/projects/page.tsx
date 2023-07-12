import { Carousel3d, CardCarousel } from "../../components";
import { projects } from "../../utils";

export default function Projects() {
	return (
		<Carousel3d>
			{projects.map((p, index) => (
				<CardCarousel
					key={index}
					image={p.image}
					title={p.title}
					description={p.description}
					demo={p.demo}
					github={p.github}
					technologies={p.technologies}
				/>
			))}
		</Carousel3d>
	);
}
