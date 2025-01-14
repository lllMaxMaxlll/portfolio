import { Card, Carousel } from "@/components/ui/cardsCarousel";
import { apiRequest } from "@/lib/apiRequest";
import { ProjectResponseType } from "@/types";
import { getLocale, getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { GrGithub, GrLink } from "react-icons/gr";

type Props = {
	params: { locale: string };
};

type MetadataLayoutMessages = {
	title: string;
	projects: string;
};

export async function generateMetadata({ params }: Props) {
	const locale = params.locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, projects } = messages.MetadataLayout;

	return {
		title: `${title} | ${projects}`,
	};
}

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
					<div className="text-primary-foreground dark:text-primary">
						<p>{project.description}</p>
						<div className="flex justify-center">
							{project.githubLink && (
								<Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-6 hover:text-neutral-400">
									<GrGithub size="2rem" />
								</Link>
							)}
							{project.websiteLink && (
								<Link href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="p-6 hover:text-neutral-400">
									<GrLink size="2rem" />
								</Link>
							)}
						</div>
					</div>
				),
			}}
			index={index}
		/>
	));

	return (
		<div className="w-full h-[80vh] py-4">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">{t("title")}</h2>
			<Carousel items={cards} />
		</div>
	);
}
