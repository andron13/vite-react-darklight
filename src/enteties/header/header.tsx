import { Logo } from "@/enteties/logo/logo";
import { Navigation } from "@/enteties/navigation/navigation";
import { ThemeToggle } from "@/enteties/theme-toggle/theme-toggle";

export const Header = () => (
  <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
    <div className="mx-auto max-w-6xl px-4 py-4">
      <nav className="flex items-center justify-between">
        <Logo />
        <Navigation />
        <ThemeToggle />
      </nav>
    </div>
  </header>
);
