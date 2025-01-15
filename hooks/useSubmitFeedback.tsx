"use client";

import { createFeedback } from "@/actions/feedbackActions";
import { useState } from "react";

export const useSubmitFeedback = () => {
	const [isLoading, setLoadingState] = useState(false);
	const [isSent, setRequestState] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submitFeedback = async (happiness: number, comment: string) => {
		setLoadingState(true);
		setRequestState(false);
		setError(null);

		try {
			createFeedback({ happiness, comment });
			setRequestState(true);
		} catch (err) {
			console.error(err);
			setError("Failed to submit feedback.");
		} finally {
			setLoadingState(false);
		}
	};

	return { submitFeedback, isLoading, isSent, error };
};
