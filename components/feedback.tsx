"use client";

import { Angry, Check, CircleX, Frown, Laugh, Loader2, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { useSubmitFeedback } from "@/hooks/useSubmitFeedback";
import { useTranslations } from "next-intl";

const feedbackIcons = [
	{ happiness: 4, emoji: <Laugh size={16} className="stroke-inherit" /> },
	{ happiness: 3, emoji: <Smile size={16} className="stroke-inherit" /> },
	{ happiness: 2, emoji: <Frown size={16} className="stroke-inherit" /> },
	{ happiness: 1, emoji: <Angry size={16} className="stroke-inherit" /> },
];

export const Feedback = () => {
	const t = useTranslations("Feedback");

	const textRef = useRef<HTMLTextAreaElement>(null);
	const [happiness, setHappiness] = useState<null | number>(null);
	const { submitFeedback, isLoading, isSent, error } = useSubmitFeedback();

	// Cleanup the feedback form when happiness is deselected
	useEffect(() => {
		if (!happiness) {
			if (textRef.current) textRef.current!.value = ""; // Clear the comment textarea if no happiness level is selected.
		}
	}, [happiness]);

	// Show success or error messages for 2 seconds after submission
	useEffect(() => {
		let timer: NodeJS.Timeout | null = null;

		if (isSent || error) {
			timer = setTimeout(() => {
				setHappiness(null);
			}, 2000);
		}

		return () => {
			if (timer) clearTimeout(timer); // Clear timer on unmount or state change
		};
	}, [isSent, error]);

	return (
		<motion.div
			layout
			initial={{ borderRadius: "2rem" }}
			animate={happiness ? { borderRadius: "0.5rem", translateY: "-5rem" } : { borderRadius: "2rem" }}
			className={twMerge(
				"absolute left-4 z-20 w-fit overflow-hidden border py-2 shadow-sm backdrop-blur-xl",
				"hidden md:flex md:flex-col"
			)}>
			<span className="flex items-center justify-center gap-3 pl-4 pr-2 ">
				<div className="text-sm hidden md:block">{t("title")}</div>
				<div className="flex items-center">
					{feedbackIcons.map((e) => (
						<button
							onClick={() => setHappiness((prev) => (e.happiness === prev ? null : e.happiness))}
							className={twMerge(
								happiness === e.happiness
									? "bg-violet-500 stroke-violet-100 dark:bg-violet-900 dark:stroke-violet-500"
									: "stroke-neutral-600 dark:stroke-neutral-400",
								"flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-violet-100 hover:stroke-violet-500 hover:dark:bg-violet-900 hover:dark:stroke-violet-500"
							)}
							key={e.happiness}>
							{e.emoji}
						</button>
					))}
				</div>
			</span>

			<motion.div
				aria-hidden={happiness ? false : true}
				initial={{ height: 0, translateY: 15 }}
				className="px-2"
				transition={{ ease: "easeInOut", duration: 0.3 }}
				animate={happiness ? { minHeight: "4rem", height: "9.3rem" } : {}}>
				<AnimatePresence>
					{isSent || error ? (
						<motion.div
							variants={container}
							initial="hidden"
							animate="show"
							className="flex h-full w-full flex-col items-center justify-start gap-2 pt-4 text-sm font-normal">
							<motion.div
								variants={item}
								className={`flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full ${
									error ? "bg-red-500" : "bg-purple-500 dark:bg-violet-500"
								}`}>
								{isSent && <Check strokeWidth={2.5} size={16} className="stroke-white" />}
								{error && <CircleX strokeWidth={2.5} size={16} className="stroke-white" />}
							</motion.div>
							{isSent && !error && <motion.div variants={item}>{t("message")}</motion.div>}
							{error && <motion.div variants={item}>{t("error")}</motion.div>}
							{!error && <motion.div variants={item}>{t("footer")}</motion.div>}
						</motion.div>
					) : (
						<motion.span exit={{ opacity: 0 }} initial={{ opacity: 1 }}>
							<textarea
								ref={textRef}
								placeholder={t("placeholder")}
								className="hidden md:block min-h-24 w-full resize-none rounded-md border bg-transparent p-2 text-sm placeholder-neutral-500 focus:border-neutral-400 focus:outline-0 dark:border-neutral-800 focus:dark:border-white"
							/>
							<div className="flex h-fit w-full justify-end">
								<button
									onClick={() => submitFeedback(happiness!, textRef.current?.value || "")}
									className={cn("mt-1 flex h-9 items-center justify-center rounded-md border px-2 text-sm", {
										"": isLoading,
									})}>
									{isLoading ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											{t("submitting")}
										</>
									) : (
										<>{t("button")}</>
									)}
								</button>
							</div>
						</motion.span>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
};

const container = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
			staggerChildren: 0.04,
		},
	},
};

const item = {
	hidden: { y: 10 },
	show: { y: 0 },
};
