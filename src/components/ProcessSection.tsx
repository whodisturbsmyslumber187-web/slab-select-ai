import { motion } from "framer-motion";
import { MessageSquare, Ruler, Cog, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Slab Selection",
    description: "Visit our slab yard and choose your exact piece. Our experts guide you through origins, veining patterns, and finish options.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Digital Templating",
    description: "Our technicians visit your site with laser measurement tools. Sub-millimeter precision ensures perfect fit.",
  },
  {
    number: "03",
    icon: Cog,
    title: "CNC Fabrication",
    description: "Your slab is precision-cut with CNC technology. Edge profiles from Ogee to Half-Bullnose, fabricated to specification.",
  },
  {
    number: "04",
    icon: Truck,
    title: "White-Glove Installation",
    description: "Our master installers deliver and install your countertops. Full cleanup and care instructions included.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Quarry to <span className="text-gradient-gold">Kitchen</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <span className="font-serif text-5xl lg:text-6xl text-gold/20">
                    {step.number}
                  </span>
                  <div className="w-8 h-px bg-gold/50" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 border border-gold/30 flex items-center justify-center relative">
                <step.icon size={40} strokeWidth={1} className="text-gold" />
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
