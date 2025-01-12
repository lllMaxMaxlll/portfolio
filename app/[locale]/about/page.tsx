import AboutMe from "@/components/aboutMe";
import { getMessages } from "next-intl/server";

type Props = {
	params: Promise<{ locale: string }>;
};

type MetadataLayoutMessages = {
	title: string;
	about: string;
};

export async function generateMetadata(props: Props) {
	const params = await props.params;
	const { locale } = params;
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
