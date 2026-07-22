import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaFileAlt, FaMoneyCheckAlt, FaLock, FaServer, FaCalculator } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import merger_aqu from "../../Assets/Images/merger_acq.webp";
import audit_image from "../../Assets/Images/audit_image.webp";
import acounting_images from "../../Assets/Images/acounting_image.webp";
import tax_image from "../../Assets/Images/tax_image.webp";
import IT_image from "../../Assets/Images/IT_image.webp";
import acounting from "../../Assets/Images/acounting.webp";

const services = [
  { title: "Assurance", description: "Independent assurance services, including audits and reviews.", icon: <FaShieldAlt />, image: audit_image },
  { title: "Accounting Advisory", description: "Comprehensive accounting services and CFO office solutions.", icon: <FaCalculator />, image: acounting },
  { title: "IT Advisory", description: "Strategic IT consulting, risk assessment, and cybersecurity.", icon: <FaLock />, image: merger_aqu },
  { title: "Book-keeping and Financial Reporting", description: "Book-keeping, payroll processing, financial reporting.", icon: <FaFileAlt />, image: acounting_images },
  { title: "Taxation", description: "Tax returns preparation and tax planning guidance.", icon: <FaMoneyCheckAlt />, image: tax_image },
  { title: "System Migration", description: "Transform your financial operations with our proven accounting system migration services.", icon: <FaServer />, image: IT_image },
];

const ServicesSection = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating API fetch delay
    setTimeout(() => setLoading(false), 1000); // Loading for 2 seconds
  }, []);

  const handleCardClick = (title) => {
    navigate(`/services/${title}`);
  };

  return (
    <motion.section
      className="py-16 bg-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl font-bold text-black"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Our Capabilities
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mt-2 text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        Explore how we help businesses achieve growth and optimize operations.
      </motion.p>

      {/* Service Cards or Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-6 md:px-20">
        {loading
          ? // Skeleton Loader
            [...Array(6)].map((_, index) => (
              <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border h-[400px] border-gray-200 cursor-pointer relative"
             
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}  // Animate upwards
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.97 }}
            ></motion.div>
            ))
          : // Actual Cards
            services.map((service, index) => (
              <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 cursor-pointer relative"
              onClick={() => handleCardClick(service.title)}
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}  // Animate upwards
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.97 }}
            >
                {/* Image Optimization */}
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  style={{
                    imageRendering: "crisp-edges",
                    objectFit: "cover"
                  }}
                />

                <div className="p-6 text-left relative">
                  {/* Floating Icon Effect */}
                  <motion.div
                    className="absolute -top-6 left-6 bg-white p-2 rounded-full shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="text-red-500 text-3xl"
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-lg font-bold text-black mt-6">{service.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More Button Animation */}
                  <motion.a
                    href="#"
                    className="text-red-500 font-bold mt-4 inline-block text-sm uppercase border-b-2 border-red-500"
                    whileHover={{ scale: 1.08, letterSpacing: "1px" }}
                    transition={{ duration: 0.3 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </motion.div>
            ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
