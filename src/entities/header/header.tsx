import { twMerge } from "tailwind-merge";

import { Logo } from "@/entities/logo";
import { Navigation } from "@/entities/navigation";
import { ThemeToggle } from "@/features/theme-toggle";

export const Header = () => (
  <header
    className={twMerge(
      "border-cream-300 bg-cream-50/80 border-b backdrop-blur-sm",
      "dark:border-navy-700 dark:bg-navy-900/80",
      "transition-colors duration-300",
      "shadow-sm",
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
