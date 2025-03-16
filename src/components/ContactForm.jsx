"use client";

import { useState } from "react";

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState("Individual");

  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen justify-center">
      {/* Left Side - Contact Form */}
      <div className="w-full  bg-purple-600 text-white p-8 md:p-12 rounded-lg md:rounded-l-lg md:rounded-r-none">
        <h2 className="text-3xl font-bold mb-4">Contact us</h2>
        <p className="mb-6">Hi 👋! My name is...</p>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your name..."
          className="w-full p-3 rounded-lg bg-purple-500 placeholder-gray-300 focus:outline-none mb-4"
        />

        {/* Selection Buttons */}
        <p className="mb-3">and I represent...</p>
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedType === "Individual"
                ? "bg-white text-purple-600"
                : "bg-purple-500 text-white"
            }`}
            onClick={() => setSelectedType("Individual")}
          >
            An individual
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedType === "Company"
                ? "bg-white text-purple-600"
                : "bg-purple-500 text-white"
            }`}
            onClick={() => setSelectedType("Company")}
          >
            A company
          </button>
        </div>

        {/* Message Input */}
        <p className="mb-3">I'd love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className="w-full p-3 rounded-lg bg-purple-500 placeholder-gray-300 focus:outline-none mb-4 h-24"
        />

        {/* Submit Button */}
        <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-gray-200">
          Submit
        </button>
      </div>
    </section>
  );
}
