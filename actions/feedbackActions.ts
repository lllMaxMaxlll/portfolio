"use server";

import { db } from "@/lib/db";
import { FeedbackType } from "@/types";

type Props = {
	happiness: number;
	comment?: string;
};

export const createFeedback = async ({ happiness, comment }: Props): Promise<FeedbackType> => {
	try {
		if (!happiness || happiness < 1 || happiness > 4 || typeof happiness !== "number") {
			throw new Error("Happiness should be a number between 1 and 4");
		}

		const feedback = await db.feedback.create({
			data: {
				happiness,
				comment: comment,
			},
		});

		return feedback;
	} catch (error) {
		console.error("Error creating feedback:", error);
		throw error;
	}
};

export const getFeedback = async (): Promise<FeedbackType[]> => {
	try {
		const feedbacks = await db.feedback.findMany({});

		if (!feedbacks || feedbacks.length === 0) {
			console.log("No feedbacks found");
			return [];
		}

		return feedbacks;
	} catch (error) {
		console.error("Error fetching feedbacks:", error);
		throw error;
	}
};
