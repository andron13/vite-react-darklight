import { BenefitsSection } from "@/enteties/dummy-sections/benefits-section/benefits-section";
import { CTASection } from "@/enteties/dummy-sections/cta-section/cta-section";
import { FeaturesSection } from "@/enteties/dummy-sections/features-section/features-section";
import { HeroSection } from "@/enteties/dummy-sections/hero-section/hero-section";
import { Footer } from "@/enteties/footer/footer";
import { Header } from "@/enteties/header/header";

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
