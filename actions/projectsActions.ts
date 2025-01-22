"use server";

import {db} from "@/lib/db";
import {ProjectData} from "@/types";
import {getLocale} from "next-intl/server";

export const getProjects = async (): Promise<ProjectData[]> => {
    const language = await getLocale();
    if (!language) throw new Error("Language not found");

    const projects = await db.project.findMany({where: {language}});

    if (!projects.length) throw new Error("No projects found for language");

    return projects;
};
