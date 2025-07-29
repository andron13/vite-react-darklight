export const BenefitsSection = () => (
  <section className="mb-16 rounded-2xl bg-gray-50 py-12 dark:bg-gray-800">
    <div className="text-center">
      <h2 className="mb-8 text-3xl font-bold">Преимущества</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">
            ⚡
          </div>
          <div className="mb-2 text-2xl font-bold">Быстро</div>
          <p className="text-gray-600 dark:text-gray-300">
            Мгновенная горячая перезагрузка и быстрая сборка
          </p>
        </div>
        <div>
          <div className="mb-2 text-4xl font-bold text-green-600 dark:text-green-400">
            🎨
          </div>
          <div className="mb-2 text-2xl font-bold">Красиво</div>
          <p className="text-gray-600 dark:text-gray-300">
            Современный дизайн с поддержкой тёмной темы
          </p>
        </div>
        <div>
          <div className="mb-2 text-4xl font-bold text-purple-600 dark:text-purple-400">
            🔧
          </div>
          <div className="mb-2 text-2xl font-bold">Гибко</div>
          <p className="text-gray-600 dark:text-gray-300">
            TypeScript и настраиваемые компоненты
          </p>
        </div>
      </div>
    </div>
  </section>
);
