import Link from "next/link";
import { useTranslations } from "next-intl";

function NotFound() {
	const t = useTranslations("NotFound");

	return (
		<section className="flex flex-col md:flex-row justify-center content-center h-[80vh] gap-5 mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center content-center text-center">
				<h3 className="text-2xl sm:text-4xl font-bold text-center py-5">{t("title")}</h3>
				<Link href="/" className="transition hover:opacity-75">
					{t("button")}
				</Link>
			</div>
		</section>
	);
}

export default NotFound;
