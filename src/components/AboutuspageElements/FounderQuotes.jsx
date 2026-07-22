import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Founder1Image from "../../Assets/Images/man_hero2.png";
import Founder2Image from "../../Assets/Images/women_hero2.png";

const founders = [
  {
    id: 1,
    name: "Vineet Chaturvedi",
    quote: "Innovation distinguishes between a leader and a follower.",
    image: Founder1Image,
  },
   {
    id: 2,
    name: "Bob Crouwel",
    quote: "Success is not just about ideas, it’s about making them happen.",
    image: Founder1Image,
  },
  {
    id: 3,
    name: "Shradha Chaturvedi",
    quote: "Success is not just about ideas, it’s about making them happen.",
    image: Founder2Image,
  },
];

export default function FounderQuote() {
  const [index, setIndex] = useState(0);

  // Function to go to the next founder
  const nextFounder = () => {
    setIndex((prev) => (prev + 1) % founders.length);
  };

  // Function to go to the previous founder
  const prevFounder = () => {
    setIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  // Auto-slide effect (changes every 5 seconds)
  useEffect(() => {
    const slideInterval = setInterval(nextFounder, 5000); // Change slide every 5s
    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center bg-gray-100 justify-center p-4 py-12">
      <div className="relative flex max-w-6xl overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prevFounder();
          }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Founder Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={founders[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex w-full"
          >
            <motion.div className="w-1/2">
              <img
                src={founders[index].image}
                alt={founders[index].name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div className="w-1/2 flex flex-col justify-center p-6">
              <Quote className="w-12 h-12 text-gray-500 mb-4" />
              <p className="text-2xl font-semibold text-gray-800">
                "{founders[index].quote}"
              </p>
              <p className="text-lg text-gray-600 mt-2">
                - {founders[index].name}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            nextFounder();
          }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
