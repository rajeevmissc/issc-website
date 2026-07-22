import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import videoUrl from "../../Assets/Videos/video3.mp4";
import videoUrl2 from "../../Assets/Videos/video2.mp4";
import { Link } from "react-router-dom";
import { Briefcase, UsersRound, Users } from "lucide-react";

const headings = [
  "Join ISSC – Where Talent Meets Opportunity",
  "Join a Team That Drives Innovation",
  "Your Career. Your Growth. Our Mission.",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let text = headings[currentTextIndex];
    let index = 0;
    setCurrentText("");

    const typingEffect = setInterval(() => {
      if (index < text.length) {
        setCurrentText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [currentTextIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoUrl2}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative  h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-4xl font-extrabold max-w-3xl leading-tight mt-4"
        >
          {currentText}
          <span className="animate-blink">|</span>
        </motion.h1>
        
        <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white py-3 px-4">
          Built by ex-Big 4 leaders, ISSC is on a rapid growth trajectory, aiming to onboard 1,000 professionals by 2026!
        </p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full px-4"
        >
          <Link to="/culture" className="w-full sm:w-auto">
            <button className="w-full sm:w-48 md:w-64 py-2 sm:py-3 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
              <UsersRound className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Our Culture</span>
            </button>
          </Link>
          <Link to="/positions" className="w-full sm:w-auto">
            <button className="w-full sm:w-48 md:w-64 py-2 sm:py-3 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Open Positions</span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Blinking Cursor Animation */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            display: inline-block;
            width: 10px;
            animation: blink 1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;