import { Moon } from "lucide-react";

export const ThemeToggle = () => (
  <button
    aria-label="Переключить тему"
    className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <Moon className="h-5 w-5" />
  </button>
);
