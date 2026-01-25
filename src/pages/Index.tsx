import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImageGallery } from "@/components/ImageGallery";
import { CollectionSection } from "@/components/CollectionSection";
import { ProjectsSection } from "@/components/ProjectsSection";
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
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
    </main>
  );
};

export default Index;
