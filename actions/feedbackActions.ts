"use server";

import {db} from "@/lib/db";
import {Feedback} from "@/types";

type Props = {
    happiness: number;
    comment?: string;
};

export const createFeedback = async ({happiness, comment}: Props): Promise<Feedback> => {
    if (!happiness || happiness < 1 || happiness > 4) {
        throw new Error("Happiness should be a number between 1 and 4");
    }

    return db.feedback.create({
        data: {happiness, comment},
    });
};

export const getFeedback = async (): Promise<Feedback[]> => {
    const feedbacks = await db.feedback.findMany({});

    if (!feedbacks || feedbacks.length === 0) {
        throw new Error("No feedbacks found");
    }

    return feedbacks;
};
