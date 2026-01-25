import { motion } from "framer-motion";
import { Sparkles, Layers, Droplets, Bath } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Sparkles, Layers, Droplets, Bath];
const serviceKeys = ["countertops", "islands", "backsplashes", "vanities"] as const;

export const ServicesSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-primary" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-primary" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary">
                {t.services.tagline}
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t.services.title1}
              <br />
              <span className="text-gradient-gold">{t.services.title2}</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-md">
              {t.services.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary/50" />
              <p className="font-sans text-sm tracking-wider uppercase text-primary/70">
                {t.services.cncNote}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Services Grid */}
          <div className="space-y-6">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon size={26} strokeWidth={1} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {t.services.items[key].title}
                      </h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {t.services.items[key].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
