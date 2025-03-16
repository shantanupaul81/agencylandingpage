"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      title: "Free",
      description: "Everything to start",
      price: "$0",
      priceAnnual: "$0",
      features: ["10,000 requests/month", "Basic in-app support", "2 users", "1 workspace"],
      button: "SIGN UP FREE",
      buttonColor: "bg-black text-white",
    },
    {
      id: 2,
      title: "Professional",
      description: "Everything to launch",
      price: "$49",
      priceAnnual: "$490", // Example discount for annual plan
      features: ["100,000 requests/month", "Email in-app support", "10 users", "10 workspaces"],
      button: "SIGN UP PROFESSIONAL",
      buttonColor: "bg-purple-600 text-white",
    },
    {
      id: 3,
      title: "Enterprise",
      description: "Everything to go public",
      price: "$499",
      priceAnnual: "$4990",
      features: ["10M requests/month", "Phone support", "Unlimited users", "Unlimited workspaces"],
      button: "SIGN UP ENTERPRISE",
      buttonColor: "bg-black text-white",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Pricing Plans
        </motion.h2>
        <p className="text-gray-500 mb-8">
          Choose a plan that works best for your needs. Save more with annual billing.
        </p>

        {/* Toggle Button */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 font-semibold rounded-full transition ${
              !isAnnual ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 font-semibold rounded-full transition ${
              isAnnual ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Annual <span className="ml-2 text-xs text-purple-600">(Save $$$)</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg border rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
              <p className="text-gray-500">{plan.description}</p>
              <p className="text-3xl font-bold mt-4">
                {isAnnual ? plan.priceAnnual : plan.price}
                <span className="text-lg font-medium text-gray-500">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>
              <button
                className={`mt-6 px-6 py-3 rounded-lg w-full font-semibold ${plan.buttonColor}`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
