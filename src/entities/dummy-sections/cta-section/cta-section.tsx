import { twMerge } from "tailwind-merge";

export const CTASection = () => (
  <section className="text-center">
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-3xl font-bold">Готовы начать?</h2>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Скачайте заготовку и начните создавать своё приложение уже сегодня. Всё
        необходимое уже настроено и готово к работе.
      </p>
      <button
        className={twMerge(
          "bg-gradient-to-r from-blue-600 to-purple-600",
          "text-lg font-medium text-white",
          "transform rounded-lg px-12 py-4 transition-all",
          "hover:scale-105 hover:from-blue-700 hover:to-purple-700",
        )}
      >
        Скачать сейчас
      </button>
    </div>
  </section>
);
