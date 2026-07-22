import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import videoUrl from "../../Assets/Videos/culture_video.mp4";
import { Link } from "react-router-dom";

const headings = [
  "Experience the Vibrant Culture at ISSC!",
  "Great People. Great Culture. Greater Success",
  "More Than a Workplace—A Community",
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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoUrl}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-100 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12 h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug"
        >
          {currentText}
          <span className="animate-blink">|</span>
        </motion.h1>

        <p className="max-w-3xl text-sm sm:text-base md:text-xl font-medium text-white mb-6 px-2 sm:px-4">
          At ISSC, we believe culture is the heartbeat of our organization. Our
          workplace thrives on collaboration, innovation, and a deep sense of
          community. We are more than just a team—we are a family that celebrates
          milestones, values creativity, and builds lasting relationships. Here's
          a glimpse of what makes ISSC an incredible place to work.
        </p>

        <Link to="/positions">
          <button className="w-[130px] sm:w-[150px] h-10 sm:h-12 mt-6 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
            JOIN US
          </button>
        </Link>
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
    </section>
  );
};

export default HeroSection;
