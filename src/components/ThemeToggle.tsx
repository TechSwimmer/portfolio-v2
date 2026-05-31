"use client";

import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        rounded-xl
        border
        border-gray-300
        px-4
        py-2
        transition
        hover:bg-gray-100
        dark:border-gray-700
        dark:hover:bg-gray-800
      "
    >
      {theme === "light"
        ? "🌙"
        : "☀️"}
    </button>
  );
}