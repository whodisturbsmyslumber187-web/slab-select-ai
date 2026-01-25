import { motion } from "framer-motion";
import { Shield, Clock, Award, Maximize } from "lucide-react";

const features = [
  {
    icon: Maximize,
    title: "Jumbo Slabs",
    stat: "3.2m",
    description: "Maximum slab width available, reducing seams on large islands",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    stat: "7-10",
    unit: "Days",
    description: "From template to installation for standard projects",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    stat: "10",
    unit: "Years",
    description: "Warranty on fabrication and installation workmanship",
  },
  {
    icon: Award,
    title: "Premium Origins",
    stat: "50+",
    description: "Exclusive quarry partnerships across three continents",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
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
            Why Pietra Dubai
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            The <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Local fabrication, global sourcing. We combine the world's finest natural stone 
            with Dubai-based precision manufacturing.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <feature.icon
                  size={28}
                  strokeWidth={1}
                  className="text-gold group-hover:text-primary-foreground transition-colors"
                />
              </div>
              <div className="mb-4">
                <span className="font-serif text-5xl lg:text-6xl text-gradient-gold">
                  {feature.stat}
                </span>
                {feature.unit && (
                  <span className="font-sans text-lg text-foreground/70 ml-2">
                    {feature.unit}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
