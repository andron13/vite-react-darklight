import { twMerge } from "tailwind-merge";

const NAVIGATION_ITEMS = [
  { href: "#", label: "Главная" },
  { href: "#", label: "О проекте" },
  { href: "#", label: "Услуги" },
  { href: "#", label: "Контакты" },
];

const LINK_STYLES = twMerge(
  "transition-colors duration-200",
  "text-navy-600 hover:text-navy-900",
  "dark:text-cream-300 dark:hover:text-cream-100",
  "hover:underline underline-offset-4 decoration-2",
  "focus:outline-none focus:ring-2 focus:ring-navy-400 dark:focus:ring-cream-400 focus:ring-offset-2 focus:ring-offset-background rounded-sm px-1 py-0.5",
);
export const Navigation = () => (
  <nav className="hidden items-center space-x-8 md:flex">
    {NAVIGATION_ITEMS.map(({ href, label }) => (
      <a className={LINK_STYLES} href={href} key={label}>
        {label}
      </a>
    ))}
  </nav>
);
