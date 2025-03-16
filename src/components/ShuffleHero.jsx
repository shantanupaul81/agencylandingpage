"use client";

import { motion ,AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Example from "./EncryptButton";
import { X } from "lucide-react";


const ShuffleHero = () => {
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
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"  onClick={() => setIsOpen(true)}>
          Find a class
        </button>
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
        {/* <Example/> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;