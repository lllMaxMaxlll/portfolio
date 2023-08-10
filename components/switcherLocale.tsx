import { useLocale } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";

function SwitcherLocale() {
	const pathname = usePathname();
	const locale = useLocale();
	const isEng = locale === "en";
	const formattedPathname = pathname.slice(3);

	return (
		<button className="flex flex-col md:flex-row px-4 md:px-0">
			{isEng ? (
				<Link href={formattedPathname || "/"} locale="es" className="px-2 hover:text-neutral-400" title="Cambiar a Español">
					ES
				</Link>
			) : (
				<Link href={pathname} locale="en" className="px-2 md:px-0 hover:text-neutral-400 " title="Switch to English">
					EN
				</Link>
			)}
		</button>
	);
}

export default SwitcherLocale;
