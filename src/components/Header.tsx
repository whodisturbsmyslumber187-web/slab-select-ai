import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-dark py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="group">
              <h1 className="font-serif text-2xl lg:text-3xl font-light tracking-wider">
                <span className="text-gradient-gold">Pietra</span>
                <span className="text-foreground">Dubai</span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="goldOutline" size="lg">
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-lg">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl text-foreground hover:text-gold transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button variant="gold" size="xl">
                    Book Consultation
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
