import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

// Lazy load below-the-fold components to reduce initial bundle size
const ImageGallery = lazy(() => 
  import("@/components/ImageGallery").then(module => ({ default: module.ImageGallery }))
);
const CollectionSection = lazy(() => 
  import("@/components/CollectionSection").then(module => ({ default: module.CollectionSection }))
);
const PortfolioSection = lazy(() => 
  import("@/components/PortfolioSection").then(module => ({ default: module.PortfolioSection }))
);
const ServicesSection = lazy(() => 
  import("@/components/ServicesSection").then(module => ({ default: module.ServicesSection }))
);
const ProcessSection = lazy(() => 
  import("@/components/ProcessSection").then(module => ({ default: module.ProcessSection }))
);
const WhyChooseUsSection = lazy(() => 
  import("@/components/WhyChooseUsSection").then(module => ({ default: module.WhyChooseUsSection }))
);

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <ImageGallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CollectionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUsSection />
      </Suspense>
    </main>
  );
};

export default Index;
