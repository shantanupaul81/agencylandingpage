"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Offices */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold">Our Locations</h3>
          <p className="mt-2">
            <strong>India</strong>
            <br />Mumbai, Maharashtra, India
            <br />+91 9876543210
            <br />contact@ourcompany.com
          </p>
          <p className="mt-4">
            <strong>USA</strong>
            <br />New York, NY, USA
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 space-y-1">
            <li>Web Development</li>
            <li>Content Marketing</li>
            <li>SEO Optimization</li>
            <li>Graphic Design</li>
            <li><Link href="#" className="font-semibold text-yellow-400">Explore More</Link></li>
          </ul>
        </motion.div>

        {/* Industries */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold">Industries We Serve</h3>
          <ul className="mt-2 space-y-1">
            <li>Technology</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>E-Commerce</li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-2 space-y-1">
            <li>Our Story</li>
            <li>Join Our Team</li>
          </ul>
          <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
            Become a Partner
          </button>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy;2025 Our Company</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Facebook className="text-white hover:text-blue-400 cursor-pointer" />
          <Instagram className="text-white hover:text-pink-400 cursor-pointer" />
          <Linkedin className="text-white hover:text-blue-500 cursor-pointer" />
          <Twitter className="text-white hover:text-blue-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
