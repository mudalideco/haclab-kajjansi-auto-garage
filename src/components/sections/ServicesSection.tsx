"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Cpu,
  SprayCan as Spray,
  Cog,
  Key,
  Gauge,
  ShieldCheck,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Full Vehicle Scanning",
    description:
      "Advanced ECU diagnostics and system analysis to identify every issue with precision.",
  },
  {
    icon: Cog,
    title: "Engine Overhaul & Mechanics",
    description:
      "Complete engine rebuild, transmission repair, and advanced mechanical services.",
  },
  {
    icon: Spray,
    title: "Smart Spraying & T-Cut",
    description:
      "Automated T-cut original color restoration and professional smart spraying for a flawless finish.",
  },
  {
    icon: Key,
    title: "Key & System Programming",
    description:
      "Key programming, system reprogramming, and immobilizer solutions for all vehicle makes.",
  },
  {
    icon: Activity,
    title: "Smart Panel Beating",
    description:
      "Precision panel beating and smart bodywork restoration using modern techniques.",
  },
  {
    icon: Wrench,
    title: "Wheel Balancing & Alignment",
    description:
      "Computerized wheel balancing and alignment for smoother, safer driving.",
  },
  {
    icon: ShieldCheck,
    title: "Full Vehicle Servicing",
    description:
      "Comprehensive servicing including oil change, filters, brakes, and fluid checks.",
  },
  {
    icon: Gauge,
    title: "Smart Wiring & Automation",
    description:
      "Electrical diagnostics, smart wiring, and vehicle automation solutions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Smart Auto Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From advanced diagnostics to complete restoration — we bring
            expertise and technology to every repair.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 lg:p-7 rounded-xl bg-background border border-border/60 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
