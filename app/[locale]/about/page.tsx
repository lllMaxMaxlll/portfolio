import AboutMe from "@/components/aboutMe";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

type ParamsType = Promise<{ locale: string }>;

type MetadataLayoutMessages = {
	title: string;
	about: string;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, about } = messages.MetadataLayout;

	return {
		title: `${title} | ${about}`,
	};
}

const About = () => {
	return <AboutMe />;
};

export default About;
