import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const language = searchParams.get("language") || "en";

		// Fetch projects filtered by language
		const projects = await db.project.findMany({
			where: { language },
		});

		return NextResponse.json({ projects });
	} catch (error) {
		console.error("Error fetching projects:", error);
		return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}
