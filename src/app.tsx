import { Footer, Header } from "@/entities";
import {
  BenefitsSection,
  CTASection,
  FeaturesSection,
  HeroSection,
} from "@/entities/dummy-sections";

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
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
