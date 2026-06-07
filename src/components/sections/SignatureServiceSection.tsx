"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Full ECU diagnostics and error code reading",
  "System reprogramming and software updates",
  "Immobilizer and key programming solutions",
  "Performance tuning and optimization",
  "Comprehensive vehicle health report",
];

export function SignatureServiceSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop"
                alt="Vehicle diagnostic scanning equipment at Kajjansi Smart Auto Garage"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs opacity-80">Diagnostic Accuracy</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Signature Service
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Full Vehicle Scanning{" "}
              <span className="text-primary">&amp; Diagnostics</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our state-of-the-art diagnostic equipment reads every system in
              your vehicle — from engine and transmission to ABS and airbags.
              We identify problems before they become expensive repairs.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  Book a Diagnostic Check <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
