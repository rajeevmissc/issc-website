import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import hero_bg from "../../Assets/Images/kindpng.webp";
import hero_bg3 from "../../Assets/Images/graph_hero.png";
import hero_bg5 from "../../Assets/Images/image_h2.png";
import hero_bg4 from "../../Assets/Images/ab_hero4.png";

const heroData = [
  {
    id: 1,
    title: "Drive Your Business Forward with Expert Consulting",
    description:
      "We deliver exceptional client services with efficiency, professionalism, and tailored solutions.",
    image: hero_bg5,
    buttonText: "Get in Touch",
    link: "/contact-us",
    gradient: "from-blue-700 via-purple-700 to-pink-700",
  },
  {
    id: 2,
    title: "Our Services - Empowering Your Business",
    description:
      "We offer comprehensive solutions to help you succeed in a competitive market.",
    image: hero_bg4,
    buttonText: "Explore Services",
    link: "/services",
    gradient: "from-green-500 via-teal-500 to-blue-800",
  },
  {
    id: 3,
    title:"About Us – Dedicated to Excellence & Trust",
    description:
      "Discover our journey, our mission, and how we create impactful solutions for our clients.",
    image: hero_bg,
    buttonText: "Know More",
    link: "/about-us",
    gradient: "from-orange-500 via-red-500 to-purple-700",
  },
  {
    id: 5,
    title: "Join Us to Grow and Elevate Your Career",
    description:
      "Join our team and be part of a culture that values innovation, growth, and success.",
    image: hero_bg3,
    buttonText: "Explore Careers",
    link: "/careers",
    gradient: "from-fuchsia-500 via-violet-600 to-indigo-900",
  }
];

export default function HeroSlider() {
  return (
    <div className="relative w-full pt-12 overflow-hidden">
    <div className="absolute inset-0 animate-gradient bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500 via-teal-500 to-blue-800"></div>
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white bg-opacity-40 rounded-full"
            initial={{
              opacity: Math.random(),
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5,
            }}
            animate={{
              y: ["100%", "-10%"],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-20 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')] animate-glow"></div>

      <Swiper
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-screen flex items-center justify-center">
            <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 w-full h-full gap-12">
              {slide.id % 2 === 0 ? (
              <>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative flex-1 flex justify-center z-10 "
              >
                <motion.img
                  src={hero_bg4}
                  alt="Hero Slide"
                  className="w-full max-w-[500px] h-auto md:h-[480px] object-contain rounded-lg "
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="flex-1 max-w-[600px] z-10 text-center md:text-left "
              >
                <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="mt-6 text-white text-lg">{slide.description}</p>
                <Link to={slide.link} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.8)" }}
                    whileTap={{ scale: 0.9 }}
                    className="h-12 px-6 my-12 border border-white font-bold bg-white bg-opacity-20 backdrop-blur-lg text-white rounded-xl shadow-md transition transform"
                  >
                    {slide.buttonText}
                  </motion.button>
                </Link>
              </motion.div>
            </>
            
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/2 max-w-[600px] z-10 text-center md:text-left"
                  >
                    <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-white text-lg">{slide.description}</p>
                    <Link to={slide.link} target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.8)" }}
                        whileTap={{ scale: 0.9 }}
                        className="h-12 px-6 my-12 border border-white font-bold bg-white bg-opacity-20 backdrop-blur-lg text-white rounded-xl shadow-md transition transform"
                      >
                        {slide.buttonText}
                      </motion.button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative w-1/2 flex justify-end items-end h-full"
                  >
                    {(slide.image === hero_bg3) && (
                      <motion.img
                        src={slide.image}
                        alt="Hero Slide"
                        className="w-full h-[500px] object-cover object-[center_-50px] brightness-110 contrast-125"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    
                    {(slide.image === hero_bg) && (
                      <motion.img
                        src={slide.image}
                        alt="Hero Slide"
                        className="w-full h-[500px] object-cover object-contain object-top brightness-110 contrast-125"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {(slide.image === hero_bg4) && (
                      <motion.img
                        src={slide.image}
                        alt="Hero Slide"
                        className="w-full h-auto max-h-none object-contain brightness-110 contrast-125"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {(slide.image === hero_bg5) && (
                      <img
                        src={slide.image}
                        alt="Hero Slide"
                        className="w-full h-[500px] object-cover object-[center_-120px] brightness-110 contrast-125"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                  </motion.div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
