import { Mail, Phone } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Logo } from "@/entities/logo";

const linkClass =
  "transition-colors duration-200 hover:text-navy-900 dark:hover:text-cream-100";
const textMutedClass = "text-navy-600 dark:text-cream-300";
const footerLinkClass =
  "text-sm text-navy-600 transition-colors duration-200 hover:text-navy-900 dark:text-cream-300 dark:hover:text-cream-100";
const iconLinkClass =
  "text-navy-400 transition-colors duration-200 hover:text-navy-600 dark:text-cream-400 dark:hover:text-cream-300";

const productLinks = ["Особенности", "Документация", "API", "Примеры"];
const resourceLinks = ["Блог", "Сообщество", "Поддержка", "Обновления"];

export const Footer = () => (
  <footer className="border-cream-300 bg-cream-100 dark:border-navy-700 dark:bg-navy-800 border-t transition-colors duration-300">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className={`mt-4 mb-4 ${textMutedClass}`}>
            Современная заготовка для React приложений с поддержкой светлой и
            тёмной темы.
          </p>
          <div className="flex space-x-4">
            <a aria-label="GitHub" className={iconLinkClass} href="#">
              GitHub
            </a>
            <a aria-label="Email" className={iconLinkClass} href="#">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-4 font-semibold">
            Продукт
          </h3>
          <ul className={`space-y-2 ${textMutedClass}`}>
            {productLinks.map((text) => (
              <li key={text}>
                <a className={linkClass} href="#" tabIndex={0}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-4 font-semibold">
            Ресурсы
          </h3>
          <ul className={`space-y-2 ${textMutedClass}`}>
            {resourceLinks.map((text) => (
              <li key={text}>
                <a className={linkClass} href="#" tabIndex={0}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-navy-800 dark:text-cream-200 mb-4 font-semibold">
            Контакты
          </h3>
          <ul className={`space-y-2 ${textMutedClass}`}>
            <li className="flex items-center space-x-2">
              <Mail className="text-navy-500 dark:text-cream-400 h-4 w-4" />
              <span>hello@myapp.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-navy-500 dark:text-cream-400 h-4 w-4" />
              <span>+7 (999) 123-45-67</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={twMerge(
          "flex flex-col items-center justify-between pt-8",
          "sm:flex-row",
          "border-cream-300 dark:border-navy-700 border-t",
        )}
      >
        <p className={`text-sm ${textMutedClass}`}>
          © 2025 MyApp. Все права защищены.
        </p>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          <a className={footerLinkClass} href="#" tabIndex={0}>
            Политика конфиденциальности
          </a>
          <a className={footerLinkClass} href="#" tabIndex={0}>
            Условия использования
          </a>
        </div>
      </div>
    </div>
  </footer>
);
