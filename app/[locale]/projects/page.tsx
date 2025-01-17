import { getProjects } from "@/actions/projectsActions";
import { Card, Carousel } from "@/components/ui/cardsCarousel";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GrGithub, GrLink } from "react-icons/gr";

type ParamsType = Promise<{ locale: string }>;

type MetadataLayoutMessages = {
	title: string;
	projects: string;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, projects } = messages.MetadataLayout;

	return {
		title: `${title} | ${projects}`,
	};
}

export default async function ProjectsCarousel() {
	const t = await getTranslations("Projects");
	const projects = await getProjects();

	if (!projects.length) {
		return  notFound();
	}

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
									<GrGithub size="24px" />
								</Link>
							)}
							{project.websiteLink && (
								<Link href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="p-6 hover:text-neutral-400">
									<GrLink size="24px" />
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
		<div className="w-full min-h-[70vh] md:min-h-[80vh]">
			<h2 className="max-w-7xl pl-6 mx-auto text-xl md:text-5xl font-bold py-4">{t("title")}</h2>
			<Carousel items={cards} />
		</div>
	);
}
