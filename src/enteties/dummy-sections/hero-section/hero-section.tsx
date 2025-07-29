export const HeroSection = () => (
  <section className="mb-16 text-center">
    <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
      Vite React Dark/Light Theme Starter
    </h1>
    <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
      Современная заготовка для создания React приложений с поддержкой светлой и
      тёмной темы, построенная на Vite, Tailwind CSS и TypeScript.
    </p>
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700">
        Начать работу
      </button>
      <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
        Документация
      </button>
    </div>
  </section>
);
