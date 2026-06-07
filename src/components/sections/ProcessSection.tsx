"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Wrench, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnose",
    description:
      "We run comprehensive diagnostics using advanced scanning equipment to pinpoint every issue accurately.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Plan & Quote",
    description:
      "We explain the findings in plain language, provide a transparent quote, and agree on the work plan with you.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Repair & Restore",
    description:
      "Our expert technicians carry out the repairs using precision tools, smart techniques, and quality parts.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Quality Check",
    description:
      "Every vehicle undergoes a final quality inspection and road test before we hand it back to you.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Our Repair Process
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From diagnosis to delivery — a transparent, professional process
            that puts your vehicle first.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-pulse opacity-30" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center lg:text-left"
            >
              <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-primary flex items-center justify-center shadow-lg mb-5">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-5xl font-black text-muted/40 absolute -top-4 -right-2 lg:right-auto lg:left-16 select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
