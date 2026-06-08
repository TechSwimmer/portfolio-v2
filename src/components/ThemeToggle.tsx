"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="
        rounded-xl
        border
        border-gray-300
        px-4
        py-2
        transition-colors
        hover:bg-gray-100
        dark:border-gray-700
        dark:hover:bg-gray-800
      "
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-zinc-900" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </button>
  );
}
