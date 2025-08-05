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
        "transition-colors duration-300",
        "bg-cream-50 text-navy-800",
        "dark:bg-navy-900 dark:text-cream-100",
      )}
    >
      <Header />
      <TestComponent />
      <MainContent />
      <Footer />
    </div>
  );
};
