"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static export, we'll show success and prompt to call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-20 lg:py-28 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              We&apos;ve received your enquiry. Please call us directly to
              confirm your booking.
            </p>
            <Button
              size="lg"
              className="mt-6 gap-2"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Book Your Service Today
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Fill in the form and we&apos;ll get back to you. Or call us
              directly for faster service.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="+256 7XX XXX XXX"
                />
              </div>
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Vehicle Make &amp; Model
                </label>
                <input
                  id="vehicle"
                  value={formData.vehicle}
                  onChange={(e) =>
                    setFormData({ ...formData, vehicle: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="e.g. Toyota Premio"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  What do you need?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Tell us about the issue or service needed..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-5 h-5" /> Send Enquiry
              </Button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-16"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-background border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+256701481223"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      Call or WhatsApp
                    </div>
                    <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      +256 701 481 223
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      Address
                    </div>
                    <div className="font-medium text-foreground">
                      Kajjansi Town Council
                      <br />
                      13km Entebbe Road, Kampala
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      Working Hours
                    </div>
                    <div className="font-medium text-foreground">
                      Mon – Sat: 8:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Prefer to call? We&apos;re just a phone call away.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-3 w-full gap-2"
                  asChild
                >
                  <a href="tel:+256701481223">
                    <Phone className="w-5 h-5" /> Call +256 701 481 223
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
