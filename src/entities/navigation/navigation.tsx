import { twMerge } from "tailwind-merge";

const NAVIGATION_ITEMS = [
  { href: "#", label: "Главная" },
  { href: "#", label: "О проекте" },
  { href: "#", label: "Услуги" },
  { href: "#", label: "Контакты" },
];

const LINK_STYLES = twMerge(
  "transition-colors",
  "text-gray-600 hover:text-gray-900",
  "dark:text-gray-300 dark:hover:text-white",
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
