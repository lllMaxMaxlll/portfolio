"use server";

import { db } from "@/lib/db";
import { ProjectData } from "@/types";
import { getLocale } from "next-intl/server";

export const getProjects = async (): Promise<ProjectData[]> => {
	try {
		const language = await getLocale();
		if (!language) {
			throw new Error("Language not found");
		}

		// Fetch projects filtered by language
		const projects = await db.project.findMany({
			where: { language },
		});

		if (!projects || projects.length === 0) {
			throw new Error("No projects found for language")
		}

		return projects;
	} catch (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
};
