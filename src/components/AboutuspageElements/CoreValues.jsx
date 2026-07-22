import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaMedal,
  FaBalanceScale,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";

// ✅ Lazy background loader
const LazyBackground = ({ src, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} relative`}
      style={{
        backgroundImage: isVisible ? `url(${src})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "320px",
      }}
    >
      {/* Blur placeholder */}
      {!isVisible && <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>}
      {children}
    </div>
  );
};

const valuesData = [
  {
    icon: <FaUsers className="text-white text-4xl" />,
    title: "OUR PEOPLE ARE OUR BIGGEST ASSETS",
    bgImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "We believe in the immense potential of our team and provide an environment for their personal and professional growth. We foster equality and respect among all individuals.",
  },
  {
    icon: <FaHandshake className="text-white text-4xl" />,
    title: "EARN CLIENT LOYALTY AND RESPECT EVERY DAY",
    bgImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "We always strive to provide exceptional value to our clients. We go the extra mile to solve their problems and meet their needs.",
  },
  {
    icon: <FaMedal className="text-white text-4xl" />,
    title: "DON'T TAKE SUCCESS FOR GRANTED",
    bgImage:
      "https://images.pexels.com/photos/3183176/pexels-photo-3183176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "We embrace humility, even in our successes. We maintain the passion of a beginner, regardless of our achievements. We are always learning, growing and striving to be better.",
  },
  {
    icon: <FaBalanceScale className="text-white text-4xl" />,
    title: "DO THE RIGHT THING",
    bgImage:
      "https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "We generate profit through ethical, transparent, and fair business practices. Honesty and integrity are the foundations of everything we do, and we never compromise on them.",
  },
  {
    icon: <FaRocket className="text-white text-4xl" />,
    title: "PURSUE AMBITIOUS GOALS",
    bgImage:
      "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "We set ambitious goals and push ourselves to achieve them. We are at the forefront of a transformative era and embrace the adventure together.",
  },
  {
    icon: <FaHandsHelping className="text-white text-4xl" />,
    title: "GIVE BACK TO SOCIETY",
    bgImage:
      "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    description:
      "Our commitment extends beyond business success. We aim to make the world a better place. We actively engage in community activities, upholding our role as responsible corporate citizens.",
  },
];

const ValueCard = ({ icon, title, description, bgImage }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="relative overflow-hidden rounded-2xl shadow-lg text-white cursor-pointer flex flex-col"
  >
    <LazyBackground src={bgImage} className="p-6 flex flex-col justify-end">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 0.7 }}
      ></motion.div>

      <div className="relative text-center">
        {/* Icon */}
        <motion.div className="w-14 h-14 mx-auto flex justify-center items-center bg-white bg-opacity-20 rounded-full">
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3 className="text-lg font-semibold mt-3">{title}</motion.h3>

        {/* Description */}
        <motion.p
          className="text-sm mt-3 opacity-0"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </LazyBackground>
  </motion.div>
);

const ValuesSection = () => (
  <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {valuesData.map((item, index) => (
      <ValueCard key={index} {...item} />
    ))}
  </section>
);

export default function OurValues() {
  return (
    <div className="max-w-6xl mx-auto py-6 mt-12 text-center">
      <div className="mb-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-red-600">Core Values</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our values are not just words; they are the essence of ISSC. They form
          the foundation of our business conduct, guide our interactions with
          clients and partners, and shape our culture.
        </p>
      </div>
      <ValuesSection />
    </div>
  );
}
