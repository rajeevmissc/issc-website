import { motion } from "framer-motion";
import React from "react";
import { FaUsers, FaRocket, FaHeart, FaLightbulb, FaMoneyBillWave, FaSpa, FaMusic, FaHandshake, FaChalkboardTeacher, FaUmbrellaBeach, FaRunning, FaCertificate, FaUserFriends } from "react-icons/fa";
import image from "../../Assets/Images/becomepartner.webp";
import Perk1 from "../../Assets/Images/perk1.webp";
import Perk3 from "../../Assets/Images/perk3.webp";
import Perk4 from "../../Assets/Images/perk4.webp";
const perksData = [
  {
    icon: <FaRocket className="text-red-500 text-6xl" />, title: "Accelerated Career Growth",
    bgImage: `url(${Perk1})`,
    details: [
      { text: "Fast tracked promotions.", icon: <FaRocket className="text-red-500 text-xl" /> },
      { text: "Industry leading performance bonus policy.", icon: <FaMoneyBillWave className="text-red-500 text-xl" /> },
      { text: "Sponsorship for professional qualifications.", icon: <FaCertificate className="text-red-500 text-xl" /> },
      { text: "In-house training for professional qualifications.", icon: <FaChalkboardTeacher className="text-red-500 text-xl" /> }
    ]
  },
  {
    icon: <FaUsers className="text-red-500 text-6xl" />, title: "A Workplace Beyond Work",
    bgImage: `url(${image})`,
    details: [
     { text: "Friday wrap-up at 4 PM with team discussions.", icon: <FaUserFriends className="text-red-500 text-xl" /> },
     { text: "Quarterly events at upscale venues.", icon: <FaUsers className="text-red-500 text-xl" /> },
      { text: "Annual offsites at premium locations.", icon: <FaUmbrellaBeach className="text-red-500 text-xl" /> },
      { text: "Year-round sports tournaments.", icon: <FaRunning className="text-red-500 text-xl" /> }
    ]
  },
  {
    icon: <FaHeart className="text-red-500 text-6xl" />, title: "Well-Being & Work-Life Balance",
    bgImage: `url(${Perk3})`,
    details: [
      { text: "Light music played throughout the day.", icon: <FaMusic className="text-red-500 text-xl" /> },
      { text: "In-house spa with weekly complimentary sessions.", icon: <FaSpa className="text-red-500 text-xl" /> },
      { text: "Nutritious, free lunches daily.", icon: <FaHeart className="text-red-500 text-xl" /> },
      { text: "25 days of annual leave.", icon: <FaUmbrellaBeach className="text-red-500 text-xl" /> }
    ]
  },
  {
    icon: <FaLightbulb className="text-red-500 text-6xl" />, title: "Culture of Trust & Learning",
    bgImage: `url(${Perk4})`,
    details: [
      { text: "Zero tolerance for office politics.", icon: <FaHeart className="text-red-500 text-xl" /> },
      { text: "Friday Fun sessions with leadership.", icon: <FaHandshake className="text-red-500 text-xl" /> },
      { text: "One-on-one coaching.", icon: <FaChalkboardTeacher className="text-red-500 text-xl" /> },
      { text: "Soft skills development in communication & leadership.", icon: <FaLightbulb className="text-red-500 text-xl" /> }
    ]
  }
];


const PerkCard = ({ icon, title, details, bgImage }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg p-8 text-white cursor-pointer h-[300px] flex flex-col justify-end items-center"
      style={{ backgroundImage: bgImage, backgroundSize: "cover", backgroundPosition: "center" }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-70 p-6 flex flex-col justify-end items-center text-center"
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 1 }
        }}
      >
        {/* Icon & Title Animation (Moves Up on Hover) */}
        <motion.div
          variants={{
            initial: { y: 90 },
            hover: { y: -40 }
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          {icon}
          <h3 className="text-xl font-bold mt-2">{title}</h3>
        </motion.div>

        {/* Details Fade-In Effect */}
        <motion.ul
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className=" space-y-2"
        >
          {details.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              {point.icon}
              {point.text}
            </li>
          ))}
        </motion.ul>

      </motion.div>
    </motion.div>
  );
};


const PerksSection = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {perksData.map((item, index) => (
        <PerkCard key={index} {...item} />
      ))}
    </section>
  );
};

export default function WhyWorkWithUs() {
  return (
    <div className="max-w-6xl mx-auto pt-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Why Work With Us</h2>
      <p className="mt-4 text-lg text-gray-700 font-semibold leading-relaxed mb-8">
        Looking for unparalleled career growth, a vibrant culture,
        and industry-leading rewards ? <br />ISSC is the place for you.
      </p>
      <PerksSection />
    </div>
  );
}
