import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof window === "undefined"
      ? false
      : document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark(root.classList.contains("dark"));
  };

  return (
    <button
      aria-label="Переключить тему"
      className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};
