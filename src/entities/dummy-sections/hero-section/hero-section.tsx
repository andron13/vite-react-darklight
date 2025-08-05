export const HeroSection = () => (
  <section className="mb-16 text-center">
    <h1 className="from-navy-600 to-cream-600 mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
      Vite React Dark/Light Theme Starter
    </h1>
    <p className="text-navy-600 dark:text-cream-300 mx-auto mb-8 max-w-3xl text-xl">
      Современная заготовка для создания React приложений с поддержкой светлой и
      тёмной темы, построенная на Vite, Tailwind CSS и TypeScript.
    </p>
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <button className="bg-navy-600 text-cream-50 hover:bg-navy-700 focus:ring-navy-400 focus:ring-offset-background transform rounded-lg px-8 py-3 font-medium shadow-lg transition-colors duration-200 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none">
        Начать работу
      </button>
      <button className="border-cream-300 hover:bg-cream-200 dark:border-navy-600 dark:hover:bg-navy-700 focus:ring-navy-400 dark:focus:ring-cream-400 focus:ring-offset-background transform rounded-lg border px-8 py-3 font-medium shadow-md transition-colors duration-200 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none">
        Документация
      </button>
    </div>
  </section>
);
