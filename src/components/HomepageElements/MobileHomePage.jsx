import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const heroData = [
  {
    id: 1,
    title: "Drive Your Business Forward with Expert Consulting",
    description:
      "We deliver exceptional client services with efficiency, professionalism, and tailored solutions.",
    buttonText: "Get in Touch",
    link: "/contact-us",
  },
  {
    id: 2,
    title: "Our Services - Empowering Your Business",
    description:
      "We offer comprehensive business solutions to help you succeed in a competitive market.",
    buttonText: "Explore Services",
    link: "/services",
  },
  {
    id: 3,
    title: "About Us – Dedicated to Excellence & Trust",
    description:
      "Discover our journey, our mission, and how we create impactful solutions for our clients.",
    buttonText: "Know More",
    link: "/about-us",
  },
  {
    id: 4,
    title: "Join Us to Grow and Elevate Your Career",
    description:
      "Join our team and be part of a culture that values innovation, growth, and success.",
    buttonText: "Explore Careers",
    link: "/careers",
  },
];

export default function HeroSliderMobile() {
  return (
    <div className="block md:hidden w-full pt-12 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-600 text-white">
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="w-full"
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold leading-tight"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-base"
              >
                {slide.description}
              </motion.p>
              <Link to={slide.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-5 py-2 border border-white text-white rounded-lg bg-white bg-opacity-10 backdrop-blur-md shadow-md font-semibold"
                >
                  {slide.buttonText}
                </motion.button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
