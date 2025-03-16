"use client";

import { motion } from "framer-motion";
import { PenTool, Code, BarChart3, Megaphone } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Content Writing",
    description: "Engaging and SEO-optimized content tailored to your brand.",
    icon: <PenTool size={40} />,
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, responsive, and high-performance websites.",
    icon: <Code size={40} />,
  },
  {
    id: 3,
    title: "SEO & Marketing",
    description: "Boost your online presence with expert SEO and marketing strategies.",
    icon: <BarChart3 size={40} />,
  },
  {
    id: 4,
    title: "Brand Strategy",
    description: "Crafting a strong brand identity that stands out.",
    icon: <Megaphone size={40} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl"
            >
              <div className="flex justify-center text-purple-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
