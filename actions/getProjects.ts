"use server";

import { apiRequest } from "@/lib/apiRequest";
// should recived the language locale

export const getProjects = async () => {
	const projects = await apiRequest("/api/projects?language=es", "GET");
	return projects;
};
