# ⚡ Vite React Dark/Light Template

Простой и масштабируемый стартовый шаблон на базе **React + TypeScript + Vite + TailwindCSS** с поддержкой **Dark/Light темы**, реализованной через `Context API` и архитектуру **FSD (Feature-Sliced Design)**.

🔗 [Деплой на Vercel](https://vite-react-darklight.vercel.app/)

---

## 🚀 Стек

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Lucide Icons**
- **Feature-Sliced Design**
- **Dark/Light Theme Toggle**
- **Context API + localStorage**
- **ESLint + TypeScript-aware rules**

---

## 🗂️ Архитектура (FSD)

Пример структуры:

```
src/
├── app/ # точка входа, провайдеры
├── shared/
│ ├── lib/ # context, хелперы
├── features/ # feature-компоненты с логикой
├── entities/ # UI-сущности (header, footer и т.д.)
```

---

## 🌗 Переключатель темы

> На основе Context API + localStorage. При инициализации учитывает `prefers-color-scheme`.

```tsx
import { ThemeProvider } from "@/shared/lib/theme";

const App = () => (
  <ThemeProvider>
    <YourApp />
  </ThemeProvider>
);
```

⸻

### 🧩 ESLint + TS + React

### ‍💻 Автор

@andron13

Разработано с ❤️ для фронтендеров, которые ценят чистую архитектуру и UX.
