import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import stoneCalacatta from "@/assets/stone-calacatta.jpg";
import stoneStatuario from "@/assets/stone-statuario.jpg";
import stoneNeroMarquina from "@/assets/stone-nero-marquina.jpg";
import stoneLeatheredGranite from "@/assets/stone-leathered-granite.jpg";

const stoneKeys = ["calacatta", "statuario", "neroMarquina", "leatheredGranite"] as const;
const stoneImages = [stoneCalacatta, stoneStatuario, stoneNeroMarquina, stoneLeatheredGranite];

export const CollectionSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="collection" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-primary/20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-primary/20" />

      <div className="container mx-auto px-6 lg:px-12 relative">
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
              {t.collection.tagline}
            </p>
            <div className="w-16 h-px bg-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            {t.collection.title1} <span className="text-gradient-gold">{t.collection.title2}</span>
          </h2>
        </motion.div>

        {/* Stone Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stoneKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-6 border border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                <img
                  src={stoneImages[index]}
                  alt={t.collection.stones[key].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="font-sans text-xs tracking-wider uppercase text-primary mb-1">
                      {t.collection.bestFor}
                    </p>
                    <p className="font-serif text-xl text-foreground">
                      {t.collection.stones[key].bestFor}
                    </p>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {t.collection.stones[key].name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {t.collection.stones[key].description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="font-sans text-muted-foreground mb-6">
            {t.collection.inventoryNote}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 font-sans text-sm tracking-[0.15em] uppercase text-primary hover:text-gold-light transition-colors group"
          >
            <span>{t.collection.viewInventory}</span>
            <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
