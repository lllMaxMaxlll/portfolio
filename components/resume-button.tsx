"use client";

import {Button} from "@/components/ui/button";
import {FileDown} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {useTranslations} from "next-intl";

export function ResumeButton() {
    const t = useTranslations("Footer");

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" onClick={() => window.open("/resume.pdf", "_blank")}>
                        <FileDown className="w-4 h-4"/>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>{t("downloadResume")}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
