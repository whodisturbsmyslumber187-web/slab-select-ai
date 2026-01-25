import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImageGallery } from "@/components/ImageGallery";
import { CollectionSection } from "@/components/CollectionSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImageGallery />
      <CollectionSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
    </main>
  );
};

export default Index;
