import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const videoUrl = "https://videos.pexels.com/video-files/7821855/7821855-hd_1920_1080_30fps.mp4";
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start px-12 sm:px-20 text-white">
        <motion.h2 
          className="text-lg uppercase tracking-wide text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Capabilities
        </motion.h2>
        <motion.h1
          className="text-5xl sm:text-4xl font-extrabold max-w-3xl leading-tight mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Drive Your Business Forward with Expert Consulting
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
        With access to qualified, skilled and experienced team members providing an unmatched cost advantage with uncomprimising focus on quality, see how ISSC teams can make a difference for you
        </motion.p>
        <Link to="/contact-us">
          <button className="w-64 h-12 my-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
            Get started →
          </button>
        </Link>
      </div>

      {/* Play/Pause Button */}
      <motion.button
        className="absolute bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-xl flex items-center justify-center transition hover:scale-110"
        onClick={togglePlay}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </motion.button>
    </div>
  );
};


