"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Details */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-8 text-center"
      >
        <p className="text-lg font-semibold">Reach us at:</p>
        <p>91springboard, Lotus, Andheri East, Mumbai, India</p>
        <p>+91 9653149289 | business@content-whale.com</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-purple-600">
            <Facebook size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-purple-600">
            <Instagram size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-purple-600">
            <Linkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
