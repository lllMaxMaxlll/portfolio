import { Card, Carousel } from "@/components/ui/cardsCarousel";
import { apiRequest } from "@/lib/apiRequest";
import { ProjectResponseType } from "@/types";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

const getProjects = async (language: string): Promise<ProjectResponseType> => {
	const res = await apiRequest(`/api/projects?language=${language}`, "GET");
	return res as ProjectResponseType;
};

export default async function ProjectsCarousel() {
	const t = await getTranslations("Projects");
	const locale = await getLocale();

	const { projects } = await getProjects(locale);

	const cards = projects.map((project, index) => (
		<Card
			key={project.id}
			card={{
				title: project.title,
				technologies: project.technologies,
				src: project.image,
				content: (
					<div className="text-white">
						<p>{project.description}</p>
						{project.githubLink && (
							<Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="m-6">
								<GrGithub size={20} />
							</Link>
						)}
						{project.websiteLink && <a href={project.websiteLink} target="_blank" rel="noopener noreferrer"></a>}
					</div>
				),
			}}
			index={index}
		/>
	));

	return (
		<div className="w-full h-full py-4">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">{t("title")}</h2>
			<Carousel items={cards} />
		</div>
	);
}
