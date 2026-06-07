"use client";

import { motion } from "framer-motion";
import { Car, Users, Award, CalendarCheck } from "lucide-react";

const stats = [
  { icon: CalendarCheck, value: "12+", label: "Years in Business" },
  { icon: Car, value: "1,200+", label: "Vehicles Serviced" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-primary">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-accent" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm sm:text-base text-primary-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
