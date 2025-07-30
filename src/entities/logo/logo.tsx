import { twMerge } from "tailwind-merge";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div
      className={twMerge(
        "bg-gradient-to-r from-blue-500 to-purple-600",
        "h-8 w-8 rounded-full",
      )}
    />
    <span className="text-xl font-bold">MyApp</span>
  </div>
);
