"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              More Than a Garage —{" "}
              <span className="text-primary">A Trusted Partner</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kajjansi Smart Auto Garage Ltd has been serving the Kampala
                community for over 12 years. Founded by Kukunda Allen, we&apos;ve
                built our reputation on honest diagnostics, quality workmanship,
                and transparent pricing.
              </p>
              <p>
                What started as a small workshop on Entebbe Road has grown into
                a full-service auto center equipped with modern diagnostic
                tools, smart repair equipment, and a team of skilled technicians
                who take pride in their craft.
              </p>
              <p>
                We specialize in everything from basic servicing to advanced
                engine overhaul, smart panel beating, ECU reprogramming, and
                original color restoration using automated T-cut technology.
              </p>
            </div>

            {/* Owner Quote */}
            <div className="mt-8 p-5 lg:p-6 rounded-xl bg-background border-l-4 border-accent">
              <Quote className="w-8 h-8 text-accent/40 mb-2" />
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Every car that comes through our doors gets the same
                attention we&apos;d give our own. We don&apos;t just fix
                vehicles — we build relationships with our customers.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  KA
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    Kukunda Allen
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Founder &amp; Lead Technician
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                alt="Kajjansi Smart Auto Garage - Professional mechanic at work in Kampala"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs opacity-80">Years of Service</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
