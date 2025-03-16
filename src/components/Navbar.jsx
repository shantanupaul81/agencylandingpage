"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-md text-gray-900 sm:px-40">
      {/* Logo */}
      <Link href="/">
      <img src="/logo.png" className="w-10 h-10"/>
      </Link>

      {/* Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-900"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 h-full bg-white text-gray-900 w-64 shadow-lg z-30 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              className="self-end p-4 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col px-6 space-y-4 text-gray-700">
              <li><a href="#" className="hover:text-purple-800">Home</a></li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === "solutions" ? null : "solutions")}
                  className="flex items-center hover:text-purple-800 w-full"
                >
                  Solutions <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen === "solutions" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen === "solutions" && (
                    <motion.ul
                      className="bg-gray-50 shadow-md py-2 w-full rounded-md"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 1</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 2</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li><a href="#" className="hover:text-purple-800">About Us</a></li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === "resources" ? null : "resources")}
                  className="flex items-center hover:text-purple-800 w-full"
                >
                  Resources <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen === "resources" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen === "resources" && (
                    <motion.ul
                      className="bg-gray-50 shadow-md py-2 w-full rounded-md"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-6 text-gray-700">
        <a href="#" className="hover:text-purple-800">Home</a>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(dropdownOpen === "solutions" ? null : "solutions")}
            className="flex items-center hover:text-purple-800"
          >
            Solutions <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen === "solutions" ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {dropdownOpen === "solutions" && (
              <motion.ul
                className="absolute top-full left-0 bg-white shadow-md mt-2 py-2 w-40 z-10 rounded-md"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 2</a></li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <a href="#" className="hover:text-purple-800">About Us</a>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(dropdownOpen === "resources" ? null : "resources")}
            className="flex items-center hover:text-purple-800"
          >
            Resources <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen === "resources" ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {dropdownOpen === "resources" && (
              <motion.ul
                className="absolute top-full left-0 bg-white shadow-md mt-2 py-2 w-40 z-10 rounded-md"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a></li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Contact Us Button */}
      <Link href="/contactus" className="bg-blue-600 uppercase text-white px-4 py-2 rounded-full shadow-lg hover:opacity-80">
        Contact Us
      </Link>
    </header>
  );
}
