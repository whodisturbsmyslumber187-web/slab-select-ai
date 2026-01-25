import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Import all gallery images
import marbleLivingRoom from "@/assets/marble-living-room.jpg";
import kitchenDramatic from "@/assets/kitchen-dramatic.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import bathroomDramatic from "@/assets/bathroom-dramatic.jpg";
import countertopDetail from "@/assets/countertop-detail.jpg";
import restaurantBar from "@/assets/restaurant-bar.jpg";
import heroMarbleKitchen from "@/assets/hero-marble-kitchen.jpg";
import marbleShowroom from "@/assets/marble-showroom.jpg";

const galleryImages = [
  { src: marbleLivingRoom, alt: "Luxury marble living room" },
  { src: kitchenDramatic, alt: "Dramatic marble kitchen" },
  { src: hotelLobby, alt: "Grand hotel lobby" },
  { src: bathroomDramatic, alt: "Luxury bathroom" },
  { src: heroMarbleKitchen, alt: "Modern marble kitchen" },
  { src: restaurantBar, alt: "Restaurant marble bar" },
  { src: countertopDetail, alt: "Marble countertop detail" },
  { src: marbleShowroom, alt: "Marble showroom" },
];

export const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, dir } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-width image slider */}
      <div className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          </motion.div>
        </AnimatePresence>

        {/* Floating text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center px-6"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 drop-shadow-2xl">
              <span className="text-gradient-gold">Timeless</span> Beauty
            </h2>
            <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto drop-shadow-lg">
              Every slab tells a story millions of years in the making
            </p>
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image grid preview */}
      <div className="container mx-auto px-6 lg:px-12 -mt-20 relative z-10">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`aspect-square overflow-hidden rounded-sm transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
