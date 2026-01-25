import { motion } from "framer-motion";
import { Sparkles, Layers, Droplets, Bath } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Kitchen Countertops",
    description: "Precision-fabricated marble and granite surfaces with flawless seams. Available in polished, honed, or leathered finishes.",
  },
  {
    icon: Layers,
    title: "Waterfall Islands",
    description: "Bookmatched slabs flowing elegantly from surface to floor. The centerpiece your kitchen deserves.",
  },
  {
    icon: Droplets,
    title: "Full-Height Backsplashes",
    description: "Jumbo slabs spanning counter to ceiling. Minimal seams, maximum visual impact.",
  },
  {
    icon: Bath,
    title: "Bathroom Vanities",
    description: "Transform your ensuite into a spa retreat. Custom vessel sink cutouts and integrated basins available.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Crafted for
              <br />
              <span className="text-gradient-gold">Distinction</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-md">
              From template to installation, every surface is crafted with meticulous attention 
              to detail in our Dubai-based fabrication facility.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gold" />
              <p className="font-sans text-sm tracking-wider uppercase text-foreground/60">
                CNC Precision
              </p>
            </div>
          </motion.div>

          {/* Right Column - Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 border border-border/50 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
