import AboutMe from "@/components/aboutMe";
import { getMessages } from "next-intl/server";

type Props = {
	params: { locale: string };
};

type MetadataLayoutMessages = {
	title: string;
	about: string;
};

export async function generateMetadata({ params }: Props) {
	const locale = params.locale;
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
