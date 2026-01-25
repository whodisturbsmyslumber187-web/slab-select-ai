import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CollectionSection } from "@/components/CollectionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CollectionSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
