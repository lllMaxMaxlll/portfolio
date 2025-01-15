"use server";

import { db } from "@/lib/db";
import { ProjectDataType } from "@/types";
import { getLocale } from "next-intl/server";

export const getProjects = async (): Promise<ProjectDataType[]> => {
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
			console.log("No projects found for language:", language);
			return [];
		}

		return projects;
	} catch (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
};
