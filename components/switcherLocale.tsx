import { useLocale } from "next-intl";
import Link from "next-intl/link";

function SwitcherLocale() {
	const locale = useLocale();
	const isEng = locale === "en";

	return (
		<div className="flex flex-col md:flex-row px-4 md:px-0">
			<Link
				href="/"
				locale="en"
				className={`px-1 ${isEng ? "text-neutral-400 dark:text-neutral-600 pointer-events-none" : ""}`}
				title="Switch to English">
				EN
			</Link>
			<Link
				href="/"
				locale="es"
				className={`px-1 ${!isEng ? "text-neutral-400 dark:text-neutral-600 pointer-events-none" : ""}`}
				title="Cambiar a Español">
				ES
			</Link>
		</div>
	);
}

export default SwitcherLocale;
