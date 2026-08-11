"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-gray-200
        bg-gray-100
        text-gray-700
        transition-all
        duration-300
        hover:border-blue-300
        hover:bg-blue-50
        hover:text-blue-600
        dark:border-white/10
        dark:bg-white/5
        dark:text-gray-300
        dark:hover:border-blue-500/30
        dark:hover:bg-blue-500/10
        dark:hover:text-blue-400
      "
    >
      <Sun
        size={19}
        className="hidden dark:block"
      />

      <Moon
        size={19}
        className="block dark:hidden"
      />
    </button>
  );
}