import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/shared/lib/theme";

export const FeaturesSection = () => {
  const { theme } = useTheme();

  return (
    <section className="mb-16">
      <h2 className="text-navy-800 dark:text-cream-200 mb-8 text-center text-3xl font-bold">
        Особенности
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="border-cream-300 hover:border-cream-400 dark:border-navy-700 dark:hover:border-navy-600 bg-cream-50/50 dark:bg-navy-800/50 hover:bg-cream-100/80 dark:hover:bg-navy-700/80 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
          <div className="bg-navy-100 dark:bg-navy-800 border-navy-200 dark:border-navy-700 mb-4 flex h-12 w-12 items-center justify-center gap-6 rounded-lg border">
            {theme === "dark" ? (
              <Moon className="text-cream-400 h-6 w-6" />
            ) : (
              <Sun className="text-navy-600 h-6 w-6" />
            )}
          </div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-2 text-xl font-semibold">
            Темная/Светлая тема
          </h3>
          <p className="text-navy-600 dark:text-cream-300">
            Автоматическое переключение между светлой и тёмной темой с плавными
            анимациями и сохранением предпочтений пользователя.
          </p>
        </div>

        <div className="border-cream-300 hover:border-cream-400 dark:border-navy-700 dark:hover:border-navy-600 bg-cream-50/50 dark:bg-navy-800/50 hover:bg-cream-100/80 dark:hover:bg-navy-700/80 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
          <div className="bg-cream-200 dark:bg-cream-800 border-cream-300 dark:border-cream-700 mb-4 flex h-12 w-12 items-center justify-center rounded-lg border">
            <div className="bg-navy-600 dark:bg-cream-400 h-6 w-6 rounded" />
          </div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-2 text-xl font-semibold">
            Vite + React
          </h3>
          <p className="text-navy-600 dark:text-cream-300">
            Быстрая разработка с горячей перезагрузкой, современный сборщик и
            оптимизированная производительность из коробки.
          </p>
        </div>

        <div className="border-cream-300 hover:border-cream-400 dark:border-navy-700 dark:hover:border-navy-600 bg-cream-50/50 dark:bg-navy-800/50 hover:bg-cream-100/80 dark:hover:bg-navy-700/80 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
          <div className="bg-navy-200 dark:bg-navy-700 border-navy-300 dark:border-navy-600 mb-4 flex h-12 w-12 items-center justify-center rounded-lg border">
            <div className="bg-cream-600 dark:bg-navy-400 h-6 w-6 rounded-full" />
          </div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-2 text-xl font-semibold">
            Tailwind CSS
          </h3>
          <p className="text-navy-600 dark:text-cream-300">
            Утилитарный CSS фреймворк для быстрого создания адаптивных и
            красивых интерфейсов без написания CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
