"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Toyota", emoji: "🚗" },
  { name: "Suzuki", emoji: "🚙" },
  { name: "Yamaha", emoji: "🏍️" },
  { name: "Honda", emoji: "🚗" },
  { name: "Nissan", emoji: "🚙" },
  { name: "Mercedes", emoji: "⭐" },
  { name: "BMW", emoji: "⚡" },
  { name: "Volkswagen", emoji: "🚗" },
];

export function BrandsSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Brands We Service
          </span>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We work on all makes and models — Japanese, European, and
            American. Here are just a few:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-4 sm:grid-cols-8 gap-4 lg:gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                {brand.emoji}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
