"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button onClick={toggleTheme} variant="ghost" aria-label="Toggle theme">
			{theme === "light" ? <Moon /> : <Sun />}
		</Button>
	);
};

export default ThemeToggle;
