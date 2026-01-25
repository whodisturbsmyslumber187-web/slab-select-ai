import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { key: "collection" as const, href: "#collection" },
  { key: "services" as const, href: "#services" },
  { key: "process" as const, href: "#process" },
  { key: "about" as const, href: "#about" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

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
            <a href="#" className="group flex items-center gap-3">
              {/* Logo Icon - Stylized marble wave/oasis */}
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-primary via-gold-light to-primary opacity-90" />
                <div className="absolute inset-[3px] rounded-sm bg-background flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-6 h-6 lg:w-7 lg:h-7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Abstract marble veins / oasis waves */}
                    <path
                      d="M4 20C8 14 12 18 16 12C20 6 24 14 28 10"
                      stroke="url(#goldGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 26C10 20 14 24 20 18C24 14 28 18 28 16"
                      stroke="url(#goldGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(43, 85%, 55%)" />
                        <stop offset="50%" stopColor="hsl(43, 70%, 70%)" />
                        <stop offset="100%" stopColor="hsl(43, 85%, 55%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif text-xl lg:text-2xl font-light tracking-wide leading-tight">
                  <span className="text-gradient-gold">Oasis</span>
                  <span className="text-foreground/90"> Marble</span>
                </h1>
                <span className="text-[10px] lg:text-xs tracking-[0.25em] uppercase text-muted-foreground font-sans">
                  Interiors
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="font-sans text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {t.nav[item.key]}
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 text-sm font-sans text-foreground/70 hover:text-primary transition-colors border border-transparent hover:border-primary/30 rounded-sm"
              >
                <Globe size={18} />
                <span className="font-medium">{language === "en" ? "عربي" : "EN"}</span>
              </button>

              <Button variant="gold" size="lg">
                {t.nav.bookConsultation}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="text-foreground/70 hover:text-primary p-2"
              >
                <Globe size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
                    key={item.key}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
                  >
                    {t.nav[item.key]}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button variant="gold" size="xl">
                    {t.nav.bookConsultation}
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
