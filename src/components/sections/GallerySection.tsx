"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional car engine repair and maintenance at Kajjansi Smart Auto Garage",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop",
    alt: "Vehicle diagnostic and scanning equipment in use",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop",
    alt: "Skilled mechanic working on vehicle suspension and undercarriage",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern auto repair workshop with professional equipment",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury and regular vehicles serviced at our garage in Kajjansi",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
    alt: "Professional automotive tools and repair equipment",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-surface">
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
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Photo Gallery
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A glimpse into our workshop, our team, and the vehicles we care for.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[280px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-xl overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
