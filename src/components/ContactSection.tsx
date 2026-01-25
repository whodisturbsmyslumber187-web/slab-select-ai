import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Begin Your
              <br />
              <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-10 max-w-md">
              Schedule a private consultation at our slab yard. Walk among hundreds 
              of exclusive stones and choose the perfect piece for your space.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-foreground/60 mb-1">Showroom</p>
                  <p className="font-sans text-foreground">
                    Al Quoz Industrial Area 4<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-foreground/60 mb-1">Phone</p>
                  <p className="font-sans text-foreground">+971 4 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-foreground/60 mb-1">Email</p>
                  <p className="font-sans text-foreground">hello@pietradubai.com</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-muted-foreground">
              Open Saturday - Thursday, 9AM - 6PM
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border/50 p-8 lg:p-12"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Request a Consultation
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-sm text-foreground/60 block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border/50 px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-sans text-sm text-foreground/60 block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border/50 px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your surname"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-sm text-foreground/60 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-border/50 px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-sans text-sm text-foreground/60 block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-border/50 px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="font-sans text-sm text-foreground/60 block mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-border/50 px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button variant="gold" size="xl" className="w-full">
                Schedule Visit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
