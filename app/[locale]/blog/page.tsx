import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

type ParamsType = Promise<{ locale: string }>;

type MetadataLayoutMessages = {
	title: string;
	blog: string;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
	const locale = (await params).locale;
	const messages = (await getMessages({ locale })) as { MetadataLayout: MetadataLayoutMessages };
	const { title, blog } = messages.MetadataLayout;

	return {
		title: `${title} | ${blog}`,
	};
}

export default function Blog() {
	const t = useTranslations("Blog");

	return (
		<div className="flex flex-col md:flex-row justify-center content-center min-h-[70vh] md:min-h-[80vh] mx-auto">
			<div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				<h1 className="text-2xl sm:text-4xl font-bold">{t("comingsoon")}</h1>
			</div>
		</div>
	);
}
