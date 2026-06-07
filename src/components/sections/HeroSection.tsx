"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, MapPin, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop"
          alt="Kajjansi Smart Auto Garage - Professional auto repair and maintenance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="copper" className="mb-6 text-sm px-4 py-1.5">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Kajjansi, 13km Entebbe Road — Kampala
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            Your Car Deserves{" "}
            <span className="text-primary">Smart</span> Care
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Advanced auto diagnostics, smart repairs, and professional vehicle
            maintenance — from engine overhaul to smart T-cut restoration.
            Trusted by Kampala drivers since 2012.
          </motion.p>

          {/* Trust Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            {[
              { icon: Star, text: "12+ Years Experience" },
              { icon: ShieldCheck, text: "Certified Mechanics" },
              { icon: Star, text: "1000+ Cars Serviced" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-accent" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Button size="xl" className="gap-2" asChild>
              <a href="#contact">
                Book a Service <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="xl" variant="outline" className="gap-2" asChild>
              <a href="tel:+256701481223">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {[
              { value: "12+", label: "Years" },
              { value: "1K+", label: "Cars Repaired" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
