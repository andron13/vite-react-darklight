import { twMerge } from "tailwind-merge";

import { Logo } from "@/entities/logo";
import { Navigation } from "@/entities/navigation";
import { ThemeToggle } from "@/features/theme-toggle";

export const Header = () => (
  <header
    className={twMerge(
      "border-b border-gray-200 bg-white/80 backdrop-blur-sm",
      "dark:border-gray-700 dark:bg-gray-900/80",
    )}
  >
    <div className="mx-auto max-w-6xl px-4 py-4">
      <nav className="flex items-center justify-between">
        <Logo />
        <Navigation />
        <ThemeToggle />
      </nav>
    </div>
  </header>
);
