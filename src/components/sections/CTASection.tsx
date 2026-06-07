"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      {/* Accent gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
            Ready to Get Your Car
            <br />
            Back in Top Shape?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait until that small problem becomes a costly repair.
            Book your service today and experience the Kajjansi Smart
            difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              size="xl"
              variant="secondary"
              className="gap-2 shadow-lg"
              asChild
            >
              <a href="#contact">
                Book a Service <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+256701481223">
                <Phone className="w-5 h-5" /> Call +256 701 481 223
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
