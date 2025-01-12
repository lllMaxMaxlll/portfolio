import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { happiness, comment } = await request.json();

		if (!happiness || happiness < 1 || happiness > 4 || typeof happiness !== "number") {
			return NextResponse.json({ message: "Invalid happiness value" }, { status: 400 });
		}

		await db.feedback.create({
			data: {
				happiness,
				comment: comment || null,
			},
		});

		return NextResponse.json({ message: "Feedback submitted successfully!" });
	} catch (error) {
		console.error("Error saving feedback:", error);
		return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 });
	}
}
