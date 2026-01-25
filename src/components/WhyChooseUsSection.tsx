import { motion } from "framer-motion";
import { Shield, Clock, Award, Maximize } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [Maximize, Clock, Shield, Award];
const featureKeys = ["slabs", "turnaround", "warranty", "origins"] as const;

export const WhyChooseUsSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-primary/50" />
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary">
              {t.whyUs.tagline}
            </p>
            <div className="w-16 h-px bg-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            {t.whyUs.title1} <span className="text-gradient-gold">{t.whyUs.title2}</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            const feature = t.whyUs.features[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-8 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <Icon
                    size={32}
                    strokeWidth={1}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <div className="mb-4">
                  <span className="font-serif text-5xl lg:text-6xl text-gradient-gold">
                    {feature.stat}
                  </span>
                {"unit" in feature && feature.unit && (
                    <span className="font-sans text-lg text-foreground/70 ml-2">
                      {feature.unit}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
