import { twMerge } from "tailwind-merge";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div
      className={twMerge(
        // "from-navy-600 to-cream-600 bg-gradient-to-r",
        "from-navy-500 via-navy-400 to-cream-500 bg-gradient-to-br", // Диагональный с переходом
        // "bg-gradient-to-r from-cream-600 to-navy-600", // Обратный градиент
        "h-8 w-8 rounded-full",
        "shadow-md",
        "transition-transform duration-200 hover:scale-110",
      )}
    />
    <span
      className={twMerge(
        "text-foreground text-xl font-bold",
        "dark:text-cream-400",
      )}
    >
      MyApp
    </span>
  </div>
);
