import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import kitchenResidential from "@/assets/kitchen-residential.jpg";
import commercialRestaurant from "@/assets/commercial-restaurant.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import bathroomLuxury from "@/assets/bathroom-luxury.jpg";

export const ProjectsSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-cream-section">
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
            <div className="w-16 h-px bg-gold-dark/50" />
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold-dark">
              {t.projects.tagline}
            </p>
            <div className="w-16 h-px bg-gold-dark/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            {t.projects.title1} <span className="text-gold-dark">{t.projects.title2}</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative overflow-hidden mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={kitchenResidential}
                    alt="Residential kitchen"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={bathroomLuxury}
                    alt="Luxury bathroom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Label */}
              <div className="absolute top-4 left-4 bg-charcoal text-cream px-4 py-2">
                <span className="font-sans text-xs tracking-[0.2em] uppercase">{t.projects.residential}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-3">{t.projects.residential}</h3>
            <p className="font-sans text-charcoal/70 leading-relaxed">{t.projects.residentialDesc}</p>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={hotelLobby}
                    alt="Hotel lobby"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={commercialRestaurant}
                    alt="Commercial restaurant"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Label */}
              <div className="absolute top-4 left-4 bg-gold-dark text-cream px-4 py-2">
                <span className="font-sans text-xs tracking-[0.2em] uppercase">{t.projects.commercial}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-3">{t.projects.commercial}</h3>
            <p className="font-sans text-charcoal/70 leading-relaxed">{t.projects.commercialDesc}</p>
          </motion.div>
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-4 font-sans text-sm tracking-[0.15em] uppercase text-gold-dark hover:text-charcoal transition-colors group"
          >
            <span>{t.projects.viewMore}</span>
            <span className="w-8 h-px bg-gold-dark group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
