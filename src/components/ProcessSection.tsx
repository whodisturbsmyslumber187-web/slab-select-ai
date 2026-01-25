import { motion } from "framer-motion";
import { MessageSquare, Ruler, Cog, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepIcons = [MessageSquare, Ruler, Cog, Truck];
const stepKeys = ["consultation", "templating", "fabrication", "installation"] as const;

export const ProcessSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="process" className="py-24 lg:py-32 bg-gold-section relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-obsidian/30" />
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-obsidian/70">
              {t.process.tagline}
            </p>
            <div className="w-16 h-px bg-obsidian/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian">
            {t.process.title1} <span className="text-obsidian/80">{t.process.title2}</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map((key, index) => {
            const Icon = stepIcons[index];
            const stepNumber = String(index + 1).padStart(2, "0");
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                {/* Step Number */}
                <div className="mb-6">
                  <span className="font-serif text-6xl lg:text-7xl text-obsidian/20 group-hover:text-obsidian/40 transition-colors">
                    {stepNumber}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-obsidian/30 flex items-center justify-center group-hover:bg-obsidian group-hover:border-obsidian transition-all duration-300">
                  <Icon
                    size={28}
                    strokeWidth={1}
                    className="text-obsidian group-hover:text-gold transition-colors"
                  />
                </div>

                <h3 className="font-serif text-xl lg:text-2xl text-obsidian mb-4">
                  {t.process.steps[key].title}
                </h3>
                <p className="font-sans text-sm text-obsidian/70 leading-relaxed">
                  {t.process.steps[key].description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
