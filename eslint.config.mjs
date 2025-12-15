// eslint.config.mjs
import globals from "globals";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    // ----------------------------------------------------
    // 1. КОНФИГУРАЦИЯ БАЗОВОГО ФОРМАТА
    // ----------------------------------------------------
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        // Указывает ESLint использовать TypeScript Language Service для проверки типов
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // ----------------------------------------------------
    // 2. ИГНОРИРУЕМ ФАЙЛЫ
    // ----------------------------------------------------
    ignores: [
      "dist",
      "**/*.js",
      "**/*.d.ts",
      "**/*.config.ts",
      "upgrade",
      ".react-router",
    ],
  },
  {
    // ----------------------------------------------------
    // 3. ПРАВИЛА ДЛЯ .ts И .tsx ФАЙЛОВ
    // ----------------------------------------------------
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Базовые правила ESLint
      eslint.configs.recommended,
      // Базовые рекомендуемые правила TypeScript-ESLint
      ...tseslint.configs.recommended,
      // Интеграция с Prettier (всегда должна быть последней)
      eslintPluginPrettier,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Правила React (для поддержки JSX)
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules, // Для React 17+ (новый JSX transform)

      // Правила TypeScript (для отключения базовых правил, которые конфликтуют с TS)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      // Обеспечивает работу HMR (Hot Module Replacement)
      "react-refresh/only-export-components": [
        "off",
        { allowConstantExport: true },
      ],

      // Важно: Отключаем все правила, которые вызывали ошибки резолва
      "import/no-unresolved": "off",
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
);
