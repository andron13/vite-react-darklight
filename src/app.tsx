import { twMerge } from "tailwind-merge";

import { Footer, Header } from "@/entities";
import {
  BenefitsSection,
  CTASection,
  FeaturesSection,
  HeroSection,
} from "@/entities/dummy-sections";
import { TestComponent } from "@/entities/test-component";

const MainContent = () => (
  <main className="mx-auto max-w-6xl px-4 py-12">
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <CTASection />
  </main>
);

export const App = () => {
  return (
    <div
      className={twMerge(
        "min-h-screen",
        "transition-colors",
        "bg-white text-black",
        "dark:bg-gray-900 dark:text-white",
      )}
    >
      <Header />
      <TestComponent />
      <MainContent />
      <Footer />
    </div>
  );
};
