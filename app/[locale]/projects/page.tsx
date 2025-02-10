import { getAllProjects } from "@/actions/projectsActions";
import { Card, Carousel } from "@/components/ui/cardsCarousel";
import { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
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
	const locale = await getLocale();
	const t = await getTranslations("Projects");
	const projects = await getAllProjects(locale);

	if (!projects.length) {
		return notFound();
	}

	const cards = projects.map((project, index) => (
		<Card
			key={project.slug}
			card={{
				title: project.title,
				tags: project.tags,
				images: project.images,
				src: project.images[0],
				content: (
					<div className="text-primary-foreground dark:text-primary">
						<p>{project.summary}</p>
						<div className="flex justify-center">
							{project.github && (
								<Link
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="p-6 hover:text-neutral-400 transition hover:scale-110">
									<GrGithub size="24px" />
								</Link>
							)}
							{project.website && (
								<Link
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									className="p-6 hover:text-neutral-400 transition hover:scale-110">
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
