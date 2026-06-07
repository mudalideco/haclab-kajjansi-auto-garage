"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What types of vehicles do you service?",
    a: "We service all makes and models — Japanese (Toyota, Suzuki, Honda, Nissan), European (Mercedes, BMW, Volkswagen), American, and more. Our diagnostic equipment covers virtually every vehicle on Ugandan roads.",
  },
  {
    q: "How long does a typical service take?",
    a: "Standard servicing takes 2–4 hours depending on the work required. Major repairs like engine overhaul may take 2–5 days. We'll give you a realistic timeline when we quote the job.",
  },
  {
    q: "Do you offer warranty on your repairs?",
    a: "Yes! We stand behind our work. All repairs come with a service guarantee. The warranty period varies by the type of repair — we'll explain the coverage before any work begins.",
  },
  {
    q: "What is smart T-cut and how is it different?",
    a: "Smart automated T-cut is our advanced paint restoration service. Unlike manual polishing, we use precision automated equipment to restore your vehicle's original color evenly, removing oxidation and light scratches without damaging the clear coat.",
  },
  {
    q: "Can you reprogram my car's ECU?",
    a: "Absolutely. We have advanced diagnostic tools capable of ECU reprogramming, system updates, key programming, and immobilizer solutions for most vehicle makes.",
  },
  {
    q: "Do I need to book an appointment?",
    a: "While we welcome walk-ins, we recommend booking an appointment to guarantee a slot, especially for major repairs. Call us at +256 701 481 223 or use the contact form below.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to know about our services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border/60 bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-5 py-4 lg:px-6 lg:py-5 text-left transition-colors hover:bg-muted/30"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-sm lg:text-base pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 lg:px-6 lg:pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
