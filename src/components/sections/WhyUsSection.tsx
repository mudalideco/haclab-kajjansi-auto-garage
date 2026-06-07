"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Users,
  Wrench,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Certified Expertise",
    description:
      "Our technicians are trained in modern automotive technology with years of hands-on experience across all vehicle makes.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We value your time. Most services are completed same-day with efficient workflow and advanced equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every repair comes with a service guarantee. We use quality parts and stand behind our workmanship.",
  },
  {
    icon: Wrench,
    title: "Advanced Equipment",
    description:
      "From ECU scanners to automated T-cut machines — we invest in the best tools for precision results.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "Owner Kukunda Allen oversees every job personally. You talk directly to the people working on your car.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Located 13km along Entebbe Road in Kajjansi — easy to find, easy to access from Kampala and surrounding areas.",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
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
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Built on Trust, Driven by Quality
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Here&apos;s why Kajjansi drivers trust us with their vehicles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-4 p-6 rounded-xl bg-surface border border-border/50 hover:border-accent/20 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
