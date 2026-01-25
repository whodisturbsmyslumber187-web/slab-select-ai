import { motion } from "framer-motion";
import stoneCalacatta from "@/assets/stone-calacatta.jpg";
import stoneStatuario from "@/assets/stone-statuario.jpg";
import stoneNeroMarquina from "@/assets/stone-nero-marquina.jpg";
import stoneLeatheredGranite from "@/assets/stone-leathered-granite.jpg";

const stones = [
  {
    name: "Calacatta Borghini",
    image: stoneCalacatta,
    description: "White canvas with bold gold and gray veining. The ultimate statement piece.",
    bestFor: "Grand Kitchen Islands",
  },
  {
    name: "Statuario",
    image: stoneStatuario,
    description: "Luminous white background with soft, elegant gray veins. Timeless sophistication.",
    bestFor: "Modern Minimalist Kitchens",
  },
  {
    name: "Nero Marquina",
    image: stoneNeroMarquina,
    description: "Dramatic black with striking white veining. Bold contrast for the contemporary home.",
    bestFor: "Statement Backsplashes",
  },
  {
    name: "Leathered Granite",
    image: stoneLeatheredGranite,
    description: "Textured matte finish that hides fingerprints. Practical luxury for busy families.",
    bestFor: "High-Traffic Kitchens",
  },
];

export const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Curated <span className="text-gradient-gold">Stone</span>
          </h2>
        </motion.div>

        {/* Stone Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stones.map((stone, index) => (
            <motion.div
              key={stone.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/90 backdrop-blur-sm p-4 w-full">
                    <p className="font-sans text-xs tracking-wider uppercase text-gold">
                      Best For
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      {stone.bestFor}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                {stone.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {stone.description}
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
            Over 500 exclusive slabs in stock. Visit our showroom to choose your exact piece.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors"
          >
            View Full Inventory
            <span className="w-8 h-px bg-gold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
