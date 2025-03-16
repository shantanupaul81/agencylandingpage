"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { X } from "lucide-react";

export default function ContactSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.company.trim()) newErrors.company = "Company name is required.";
        if (!formData.service) newErrors.service = "Please select a service.";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccessMessage("Your message has been sent successfully!");
            setTimeout(() => {
                setSuccessMessage("");
                setIsOpen(false);
            }, 3000);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto my-10 relative">
                <h2 className="text-2xl font-semibold mb-4">So, Let’s start. Shall we?</h2>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-800 transition"
                >
                    Connect me to an expert!
                </button>

                <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-gray-800">
                    <div className="flex items-center gap-2">
                        <CiStar size={20} /> <span>Best quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaArrowUpRightDots size={20} /> <span>Top experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoIosRocket size={20} /> <span>Quickest delivery</span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 w-[500px] relative"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                                <X size={24} />
                            </button>
                            <h3 className="text-2xl font-semibold mb-4">This may be the beginning of our journey</h3>

                            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                                <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full border p-2 rounded" />
                                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

                                <select name="service" value={formData.service} onChange={handleChange} className="w-full border p-2 rounded">
                                    <option value="">Select Service Type</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Development">Development</option>
                                    <option value="Design">Design</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

                                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full border p-2 rounded" rows="3"></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                                <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition">
                                    Send Message →
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
