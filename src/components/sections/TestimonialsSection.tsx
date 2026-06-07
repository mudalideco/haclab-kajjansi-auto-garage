"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James O.",
    location: "Kampala",
    rating: 5,
    text: "I took my Toyota for an engine overhaul and was impressed by the professionalism. They diagnosed issues I didn't even know existed. Fair pricing and excellent communication throughout.",
    service: "Engine Overhaul",
  },
  {
    name: "Sarah N.",
    location: "Entebbe",
    rating: 5,
    text: "The smart T-cut service restored my car's original color perfectly. It looks brand new! The team at Kajjansi Smart Auto Garage really knows their craft.",
    service: "Smart T-Cut & Spraying",
  },
  {
    name: "Peter M.",
    location: "Kajjansi",
    rating: 5,
    text: "I've been bringing my cars here for years. Honest, reliable, and they don't upsell unnecessary repairs. Kukunda personally ensures quality work every time.",
    service: "Regular Servicing",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Real feedback from real customers in Kampala and beyond.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 lg:p-8 rounded-xl bg-surface border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />
              <StarRating rating={t.rating} />
              <p className="mt-4 text-foreground leading-relaxed text-sm lg:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-border/50">
                <div className="font-bold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {t.location}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {t.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
