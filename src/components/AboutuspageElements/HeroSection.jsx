import hero_image from "../../Assets/Images/aboutus_hero_image.webp";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const HeroSection = () => {
  // ✅ Use optimized 720p video
  const videoUrl =
    "https://videos.pexels.com/video-files/6774636/6774636-hd_1280_720_30fps.mp4";

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // ✅ Autoplay only when video is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      },
      { threshold: 0.3 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video with Poster */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        poster={hero_image} // ✅ lightweight preview image
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start px-12 sm:px-20 text-white">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold max-w-3xl leading-tight mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering Businesses with Innovation & Growth
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We drive sustainable performance based on the foundations of exceptional
          talent, efficiency at unmatched pricing.
        </motion.p>
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

export default function HeroAboutUs() {
  return (
    <>
      <HeroSection />
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-12">
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Driving Business Success through <br />
                <span className="text-red-500">Expertise & Innovation</span>
              </h1>
            </div>
            <div>
              <p className="text-gray-600 text-lg border-l border-red-700 pl-10">
                With decades of expertise in professional services and consulting, we
                specialize in helping companies navigate challenges, streamline
                operations, and unlock growth opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 flex justify-center">
          <img
            src={hero_image}
            alt="Business Meeting"
            className="w-full max-w-5xl rounded-lg shadow-lg"
            loading="lazy" // ✅ lazy-load
          />
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Business Since 2018
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Founded with a vision to transform the consulting landscape, we began
            our journey in 2018 with a commitment to providing innovative
            solutions.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-[#3F2D52] text-white py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold">7+</h3>
              <p className="text-lg mt-2">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">25+</h3>
              <p className="text-lg mt-2">Clients</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">100+</h3>
              <p className="text-lg mt-2">Professionals on-board</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">20+</h3>
              <p className="text-lg mt-2">Managers and above</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
