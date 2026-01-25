import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/marble-showroom.jpg";

export const HeroSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury marble showroom in Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className={`max-w-3xl ${dir === "rtl" ? "mr-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-6"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-8 text-charcoal"
          >
            {t.hero.title1}
            <br />
            <span className="text-gradient-gold">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-10 max-w-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 ${dir === "rtl" ? "sm:flex-row-reverse" : ""}`}
          >
            <Button variant="gold" size="xl">
              {t.hero.cta1}
            </Button>
            <Button variant="luxury" size="xl">
              {t.hero.cta2}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
