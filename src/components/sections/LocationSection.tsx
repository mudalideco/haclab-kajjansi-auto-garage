"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Visit Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Find Us at Kajjansi
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Conveniently located on the Kampala-Entebbe Road, we&apos;re easy
              to find and easy to reach.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    Kajjansi Town Council
                    <br />
                    13km Along Entebbe Road
                    <br />
                    Kampala, Uganda
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Working Hours
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Call or WhatsApp
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    <a
                      href="tel:+256701481223"
                      className="hover:text-primary transition-colors"
                    >
                      +256 701 481 223
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://maps.google.com/?q=Kajjansi+Town+Council+Entebbe+Road+Kampala+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5" /> Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-surface border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6549!2d32.5667!3d0.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKajjansi%20Town%20Council!5e0!3m2!1sen!2sug!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kajjansi Smart Auto Garage Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
