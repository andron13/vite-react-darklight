import { Sun } from "lucide-react";

export const FeaturesSection = () => (
  <section className="mb-16">
    <h2 className="mb-8 text-center text-3xl font-bold">Особенности</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-700">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
          <Sun className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Темная/Светлая тема</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Автоматическое переключение между светлой и тёмной темой с плавными
          анимациями и сохранением предпочтений пользователя.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-700">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
          <div className="h-6 w-6 rounded bg-green-600 dark:bg-green-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Vite + React</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Быстрая разработка с горячей перезагрузкой, современный сборщик и
          оптимизированная производительность из коробки.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-700">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
          <div className="h-6 w-6 rounded-full bg-purple-600 dark:bg-purple-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Tailwind CSS</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Утилитарный CSS фреймворк для быстрого создания адаптивных и красивых
          интерфейсов без написания CSS.
        </p>
      </div>
    </div>
  </section>
);
