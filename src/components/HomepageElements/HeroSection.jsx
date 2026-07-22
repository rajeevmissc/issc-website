import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import videoUrl from "../../Assets/Videos/bg_video_hero.mp4"
import { Link } from "react-router-dom";
import { BodyText } from "../../utils/Typography";
const headings = [
  "Drive Your Business Forward with Expert Consulting",
  "Achieve Excellence with Tailored Solutions",
  "Building Trust, Reliability & Long-Term Success",
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
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ background: `url(${videoUrl}) no-repeat center center/cover` }}
    >

      <video
        // className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoUrl}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 py-3 text-center md:text-left"
        >
          {currentText}
          <span className="animate-blink">|</span>
        </motion.h1>

        <BodyText className="max-w-2xl text-lg md:text-xl font-medium text-white mb-6 py-3">
          We deliver exceptional client services with <span className="font-semibold">efficiency, professionalism</span>, and tailored solutions, fostering <span className="font-semibold">trust, reliability</span>, and long-term success.
        </BodyText>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 my-12 rounded-lg transition">
          <Link to="/contact-us" target="_blank">Get in Touch</Link>
        </button>
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
