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
    <section id="collection" className="py-24 lg:py-32 bg-background marble-texture">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t.collection.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
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
              <div className="relative aspect-square overflow-hidden mb-6 bg-card shadow-soft rounded-sm">
                <img
                  src={stoneImages[index]}
                  alt={t.collection.stones[key].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <div className="text-card">
                    <p className="font-sans text-xs tracking-wider uppercase text-primary">
                      {t.collection.bestFor}
                    </p>
                    <p className="font-serif text-lg">
                      {t.collection.stones[key].bestFor}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-2 group-hover:text-primary transition-colors">
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
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.15em] uppercase text-primary hover:text-gold-dark transition-colors"
          >
            {t.collection.viewInventory}
            <span className="w-8 h-px bg-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
