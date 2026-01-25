import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-4">
              <span className="text-gradient-gold">Pietra</span>
              <span className="text-foreground">Dubai</span>
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-sm mb-6">
              Dubai's premier destination for luxury natural stone countertops. 
              From quarry to kitchen, we craft distinction.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.15em] uppercase text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Collection", "Services", "Process", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stone Types */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.15em] uppercase text-foreground mb-6">
              Stone Types
            </h4>
            <ul className="space-y-3">
              {["Italian Marble", "Spanish Marble", "Brazilian Granite", "Engineered Quartz"].map((stone) => (
                <li key={stone}>
                  <a
                    href="#"
                    className="font-sans text-muted-foreground hover:text-gold transition-colors"
                  >
                    {stone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 Pietra Dubai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
