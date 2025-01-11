import { getMessages } from "next-intl/server";

type Props = {
	params: { locale: string };
};

type MetadataLayoutMessages = {
	title: string;
	blog: string;
};

export async function generateMetadata({ params: { locale } }: Props) {
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, blog } = messages.MetadataLayout;

	return {
		title: `${title} | ${blog}`,
	};
}

export default function Blog() {
	return (
		<div className="flex flex-col md:flex-row justify-center content-center h-[80vh] mx-auto">
			<div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				<h1 className="text-2xl sm:text-4xl font-bold">COMING SOON</h1>
			</div>
		</div>
	);
}
