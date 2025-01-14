import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function SwitcherLocale() {
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();

	const handleLanguageChange = (value: string) => {
		const path = pathname.split("/").slice(2).join("/");
		router.push(`/${value}/${path}`);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="flex items-center">
					<Globe className="h-4 w-4" />
					<span className="hidden md:block">{locale === "en" ? "English" : "Español"}</span>
					<ChevronDown className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[100px] backdrop-blur">
				<DropdownMenuRadioGroup value={locale} onValueChange={handleLanguageChange}>
					<DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
