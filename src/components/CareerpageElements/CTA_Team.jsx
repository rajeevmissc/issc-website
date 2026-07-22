import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import videoUrl from "../../Assets/Videos/video3.mp4";

const CareerPage = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      {/* Call to Action Section */}
      <section className="relative text-center py-32 text-white shadow-md overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover brightness-50">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="relative px-6 md:px-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Be Part of Something Bigger</h2>
          <p className="mt-6 text-lg leading-relaxed">
            At ISSC, we don’t just offer jobs—we build careers. Join a team that values talent, rewards performance, and fosters growth.
          </p>
          <Link to="/positions">
          <motion.button
            className="w-64 h-12 mt-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md"
            whileHover={{ scale: 1.1 }}>
            Apply Now
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
