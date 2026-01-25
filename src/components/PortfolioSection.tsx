import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Project 1: Luxury Villa Kitchen
import villaKitchen1 from "@/assets/projects/villa-kitchen-1.jpg";
import villaKitchen2 from "@/assets/projects/villa-kitchen-2.jpg";
import villaKitchen3 from "@/assets/projects/villa-kitchen-3.jpg";
import villaKitchen4 from "@/assets/projects/villa-kitchen-4.jpg";

// Project 2: Penthouse Bathroom
import penthouseBath1 from "@/assets/projects/penthouse-bath-1.jpg";
import penthouseBath2 from "@/assets/projects/penthouse-bath-2.jpg";
import penthouseBath3 from "@/assets/projects/penthouse-bath-3.jpg";
import penthouseBath4 from "@/assets/projects/penthouse-bath-4.jpg";

// Project 3: Corporate Office
import officeLobby1 from "@/assets/projects/office-lobby-1.jpg";
import officeLobby2 from "@/assets/projects/office-lobby-2.jpg";
import officeLobby3 from "@/assets/projects/office-lobby-3.jpg";
import officeLobby4 from "@/assets/projects/office-lobby-4.jpg";

// Project 4: Fine Dining Restaurant
import restaurant1 from "@/assets/projects/restaurant-1.jpg";
import restaurant2 from "@/assets/projects/restaurant-2.jpg";
import restaurant3 from "@/assets/projects/restaurant-3.jpg";
import restaurant4 from "@/assets/projects/restaurant-4.jpg";

// Project 5: Boutique Hotel
import hotelReception1 from "@/assets/projects/hotel-reception-1.jpg";
import hotelReception2 from "@/assets/projects/hotel-reception-2.jpg";
import hotelReception3 from "@/assets/projects/hotel-reception-3.jpg";
import hotelReception4 from "@/assets/projects/hotel-reception-4.jpg";

// Project 6: Mediterranean Villa
import villaFlooring1 from "@/assets/projects/villa-flooring-1.jpg";
import villaFlooring2 from "@/assets/projects/villa-flooring-2.jpg";
import villaFlooring3 from "@/assets/projects/villa-flooring-3.jpg";
import villaFlooring4 from "@/assets/projects/villa-flooring-4.jpg";

// Project 7: Private Spa
import spaWellness1 from "@/assets/projects/spa-wellness-1.jpg";
import spaWellness2 from "@/assets/projects/spa-wellness-2.jpg";
import spaWellness3 from "@/assets/projects/spa-wellness-3.jpg";
import spaWellness4 from "@/assets/projects/spa-wellness-4.jpg";

// Project 8: Bank Lobby
import bankLobby1 from "@/assets/projects/bank-lobby-1.jpg";
import bankLobby2 from "@/assets/projects/bank-lobby-2.jpg";
import bankLobby3 from "@/assets/projects/bank-lobby-3.jpg";
import bankLobby4 from "@/assets/projects/bank-lobby-4.jpg";

// Project 9: Fine Dining 2
import fineDining1 from "@/assets/projects/fine-dining-1.jpg";
import fineDining2 from "@/assets/projects/fine-dining-2.jpg";
import fineDining3 from "@/assets/projects/fine-dining-3.jpg";
import fineDining4 from "@/assets/projects/fine-dining-4.jpg";

// Project 10: Luxury Retail
import retailStore1 from "@/assets/projects/retail-store-1.jpg";
import retailStore2 from "@/assets/projects/retail-store-2.jpg";
import retailStore3 from "@/assets/projects/retail-store-3.jpg";
import retailStore4 from "@/assets/projects/retail-store-4.jpg";

// Project 11: Private Members Club
import membersClub1 from "@/assets/projects/members-club-1.jpg";
import membersClub2 from "@/assets/projects/members-club-2.jpg";
import membersClub3 from "@/assets/projects/members-club-3.jpg";
import membersClub4 from "@/assets/projects/members-club-4.jpg";

// Project 12: Art Gallery
import artGallery1 from "@/assets/projects/art-gallery-1.jpg";
import artGallery2 from "@/assets/projects/art-gallery-2.jpg";
import artGallery3 from "@/assets/projects/art-gallery-3.jpg";
import artGallery4 from "@/assets/projects/art-gallery-4.jpg";

interface Project {
  id: string;
  images: string[];
  category: "residential" | "commercial";
}

const projects: Project[] = [
  {
    id: "villaKitchen",
    images: [villaKitchen1, villaKitchen2, villaKitchen3, villaKitchen4],
    category: "residential",
  },
  {
    id: "penthouseBath",
    images: [penthouseBath1, penthouseBath2, penthouseBath3, penthouseBath4],
    category: "residential",
  },
  {
    id: "officeLobby",
    images: [officeLobby1, officeLobby2, officeLobby3, officeLobby4],
    category: "commercial",
  },
  {
    id: "restaurant",
    images: [restaurant1, restaurant2, restaurant3, restaurant4],
    category: "commercial",
  },
  {
    id: "hotelReception",
    images: [hotelReception1, hotelReception2, hotelReception3, hotelReception4],
    category: "commercial",
  },
  {
    id: "villaFlooring",
    images: [villaFlooring1, villaFlooring2, villaFlooring3, villaFlooring4],
    category: "residential",
  },
  {
    id: "spaWellness",
    images: [spaWellness1, spaWellness2, spaWellness3, spaWellness4],
    category: "commercial",
  },
  {
    id: "bankLobby",
    images: [bankLobby1, bankLobby2, bankLobby3, bankLobby4],
    category: "commercial",
  },
  {
    id: "fineDining",
    images: [fineDining1, fineDining2, fineDining3, fineDining4],
    category: "commercial",
  },
  {
    id: "retailStore",
    images: [retailStore1, retailStore2, retailStore3, retailStore4],
    category: "commercial",
  },
  {
    id: "membersClub",
    images: [membersClub1, membersClub2, membersClub3, membersClub4],
    category: "commercial",
  },
  {
    id: "artGallery",
    images: [artGallery1, artGallery2, artGallery3, artGallery4],
    category: "commercial",
  },
];

export const PortfolioSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const getProjectInfo = (id: string) => {
    const projectData = t.portfolio?.projects?.[id as keyof typeof t.portfolio.projects];
    return projectData || { title: id, description: "", location: "", stone: "" };
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-px bg-primary/50" />
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary">
              {t.portfolio?.tagline || "Our Portfolio"}
            </p>
            <div className="w-12 md:w-16 h-px bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            {t.portfolio?.title1 || "Completed"}{" "}
            <span className="text-gradient-gold">{t.portfolio?.title2 || "Projects"}</span>
          </h2>
          <p className="font-sans text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
            {t.portfolio?.subtitle || "Explore our portfolio of completed marble installations across Dubai's most prestigious properties."}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 md:gap-4 mb-10 md:mb-14"
        >
          {(["all", "residential", "commercial"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 md:px-6 py-2 md:py-3 font-sans text-xs md:text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category === "all" 
                ? (t.portfolio?.filterAll || "All")
                : category === "residential"
                ? (t.portfolio?.filterResidential || "Residential")
                : (t.portfolio?.filterCommercial || "Commercial")}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const info = getProjectInfo(project.id);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  {/* Main Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.images[0]}
                      alt={info.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 md:top-4 left-3 md:left-4 px-3 py-1.5 ${
                      project.category === "residential" ? "bg-charcoal" : "bg-primary"
                    }`}>
                      <span className="font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase text-cream">
                        {project.category === "residential" 
                          ? (t.portfolio?.filterResidential || "Residential")
                          : (t.portfolio?.filterCommercial || "Commercial")}
                      </span>
                    </div>

                    {/* View More Indicator */}
                    <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex gap-1">
                      {project.images.slice(0, 4).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-foreground/50"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-muted-foreground">
                      {info.location} • {info.stone}
                    </p>
                  </div>

                  {/* Thumbnail Preview - Desktop Only */}
                  {!isMobile && (
                    <div className="hidden md:grid grid-cols-4 gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(project, i);
                          }}
                          className="aspect-square overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all"
                        >
                          <img
                            src={img}
                            alt={`${info.title} ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-foreground hover:text-primary transition-colors z-10"
            >
              <X size={isMobile ? 24 : 32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-muted/50 hover:bg-muted text-foreground rounded-full transition-colors"
            >
              <ChevronLeft size={isMobile ? 20 : 32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-muted/50 hover:bg-muted text-foreground rounded-full transition-colors"
            >
              <ChevronRight size={isMobile ? 20 : 32} />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.images[selectedImageIndex]}
                alt={getProjectInfo(selectedProject.id).title}
                className="w-full h-full object-contain"
              />
              
              {/* Image Info */}
              <div className="text-center mt-4 md:mt-6">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  {getProjectInfo(selectedProject.id).title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-muted-foreground">
                  {selectedImageIndex + 1} / {selectedProject.images.length}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex justify-center gap-2 mt-4">
                {selectedProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(i);
                    }}
                    className={`w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all ${
                      i === selectedImageIndex
                        ? "ring-2 ring-primary"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
