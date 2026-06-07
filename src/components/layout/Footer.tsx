import { Wrench, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Vehicle Scanning & Diagnostics",
  "Engine Overhaul",
  "Smart Panel Beating",
  "Smart Spraying & T-Cut",
  "Wheel Balancing & Alignment",
  "Key Programming",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-foreground/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-primary-foreground">
                  Kajjansi Smart
                </span>
                <span className="text-[10px] font-medium leading-tight -mt-0.5 text-foreground/50">
                  AUTO GARAGE
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-foreground/60 max-w-xs">
              Advanced auto services, smart repairs, and vehicle maintenance
              experts serving Kampala since 2012.
            </p>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/WalusimbisGarage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                aria-label="Follow us on Facebook"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:+256701481223"
                className="w-9 h-9 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+256701481223"
                  className="text-sm flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +256 701 481 223
                </a>
              </li>
              <li className="text-sm flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Kajjansi Town Council
                  <br />
                  13km Entebbe Road, Kampala
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Kajjansi Smart Auto Garage Ltd.
            All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground hover:underline font-medium transition-colors"
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
