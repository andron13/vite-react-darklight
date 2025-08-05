import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/shared/lib/theme/context";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Переключить тему"
      className="hover:bg-cream-200 dark:hover:bg-navy-700 focus:ring-navy-400 dark:focus:ring-cream-400 rounded-lg p-2 transition-colors duration-200 focus:ring-2 focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="text-cream-100 h-5 w-5" />
      ) : (
        <Moon className="text-navy-700 h-5 w-5" />
      )}
    </button>
  );
};
