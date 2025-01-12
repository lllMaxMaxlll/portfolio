"use client";

import { apiRequest } from "@/lib/apiRequest";
import { useState } from "react";

interface FeedbackResponse {
	message: string;
}

export const useSubmitFeedback = () => {
	const [isLoading, setLoadingState] = useState(false);
	const [isSent, setRequestState] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submitFeedback = async (happiness: number, comment: string) => {
		setLoadingState(true);
		setRequestState(false);
		setError(null);

		try {
			const response = (await apiRequest("/api/feedback", "POST", { happiness, comment })) as FeedbackResponse;

			if (response.message) {
				setRequestState(true);
			}
		} catch (err) {
			console.error(err);
			setError("Failed to submit feedback.");
		} finally {
			setLoadingState(false);
		}
	};

	return { submitFeedback, isLoading, isSent, error };
};
