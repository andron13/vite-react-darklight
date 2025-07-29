import { Mail, Phone } from "lucide-react";

import { Logo } from "@/entities/logo";

export const Footer = () => (
  <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
            Современная заготовка для React приложений с поддержкой светлой и
            тёмной темы.
          </p>
          <div className="flex space-x-4">
            <a
              className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Продукт</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Особенности
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Документация
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                API
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Примеры
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Ресурсы</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Блог
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Сообщество
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Поддержка
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Обновления
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Контакты</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@myapp.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+7 (999) 123-45-67</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © 2025 MyApp. Все права защищены.
        </p>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          <a
            className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            href="#"
          >
            Политика конфиденциальности
          </a>
          <a
            className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            href="#"
          >
            Условия использования
          </a>
        </div>
      </div>
    </div>
  </footer>
);
