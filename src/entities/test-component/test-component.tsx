import { twMerge } from "tailwind-merge";

export const TestComponent = () => {
  return (
    <section
      className={twMerge(
        "flex items-center justify-center",
        "m-4 mb-0 p-2",
        "text-lg font-semibold",
        "rounded-2xl border-2",
        "border-navy-300 dark:border-cream-300",
        "bg-cream-100/50 dark:bg-navy-800/50",
      )}
    >
      Тест-компонент без dark/light стилей, берущий стили из body
    </section>
  );
};
