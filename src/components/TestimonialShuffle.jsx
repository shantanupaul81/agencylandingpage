"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
    author: "Devin R.",
    role: "Growth Marketing Lead @ OpenAI",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  },
  {
    id: 2,
    text: "I've never had this much fun writing. It's like X is completing my thoughts before I even know what I’m thinking.",
    author: "Sophia K.",
    role: "Product Manager @ Square",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  },
  {
    id: 3,
    text: "X changed how I read and write. I feel like I read this review before even reading it.",
    author: "James L.",
    role: "Engineer @ Meta",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  },
];

export default function TestimonialShuffle() {
  const [cards, setCards] = useState(testimonials);

  const shuffleCards = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="relative flex justify-center items-center h-[600px] bg-[#0d0f20]">
      <div className="relative w-[300px] h-[400px]">
        <AnimatePresence>
          {cards.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`absolute w-full h-full bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between cursor-pointer ${
                index === 0 ? "z-10" : "z-0"
              }`}
              onClick={shuffleCards}
              style={{
                transform: `rotate(${index === 0 ? 0 : Math.random() * 10 - 5}deg)`,
                top: index * 10,
              }}
            >
              <div className="flex flex-col items-center">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
                <p className="mt-4 text-lg italic text-center">"{testimonial.text}"</p>
              </div>
              <div className="text-center text-sm text-gray-400">
                <strong className="text-white">{testimonial.author}</strong> - {testimonial.role}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
