// import React from "react";
// import { ArrowRight } from "lucide-react";
// import image_vision from "../../Assets/Images/image_vision.webp";
// import image_goal from "../../Assets/Images/image_goal.webp";

// const VisionSection = () => {
//   return (
//     <div className="bg-blue-200 py-12">
//     <div className="max-w-7xl mx-auto px-8  py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//       {/* Left Side - Text Content */}
//       <div>
//         <h4 className="text-blue-500 font-bold text-lg">OUR VISION</h4>
//         <h2 className="text-4xl font-bold text-gray-900 mt-2">
//           To upscale your business to the next level
//         </h2>
//         <p className="text-gray-600 mt-4">
//           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
//         </p>

//         <div className="mt-6 space-y-4">
//           {visionPoints.map((point, index) => (
//             <div key={index} className="flex items-center space-x-4">
//               <div className="bg-red-400 text-white p-3 rounded-full">
//                 <ArrowRight size={20} />
//               </div>
//               <p className="text-gray-900 font-medium">{point}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div>
//         <img 
//           src={image_vision}
//           alt="Vision Image" 
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//     <div className="max-w-7xl mx-auto px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//       {/* Left Side - Text Content */}
//       <div>
//         <img 
//           src={image_goal} 
//           alt="Vision Image" 
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>
//       {/* Right Side - Image */}
//       <div>
//         <h4 className="text-blue-500 font-bold text-lg">OUR VISION</h4>
//         <h2 className="text-4xl font-bold text-gray-900 mt-2">
//           To upscale your business to the next level
//         </h2>
//         <p className="text-gray-600 mt-4">
//           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
//         </p>

//         <div className="mt-6 space-y-4">
//           {visionPoints.map((point, index) => (
//             <div key={index} className="flex items-center space-x-4">
//               <div className="bg-red-400 text-white p-3 rounded-full">
//                 <ArrowRight size={20} />
//               </div>
//               <p className="text-gray-900 font-medium">{point}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// const visionPoints = [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
// ];

// export default VisionSection;

import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaFilm, FaSpa, FaCalendarAlt, FaAward } from "react-icons/fa";
import { GiPartyPopper, GiCommercialAirplane } from "react-icons/gi";
import React from "react";
const iconColor = "text-red-600";


const sections = [
  {
    title: "Friday Wind-Down & Rejuvenation",
    icon: <FaUsers className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg",
    description: "We wrap up at 4 PM every Friday for a perfect balance of work and play—fun activities, dance, and mentorship moments."
  },
  {
    title: "Exclusive Bi-Monthly Gatherings",
    icon: <GiPartyPopper className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/29581807/pexels-photo-29581807/free-photo-of-business-workshop-with-engaged-audience.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    description: "Every two months, we host vibrant celebrations at top venues with music, entertainment, and team bonding."
  },
  {
    title: "Annual Offsite Retreats",
    icon: <GiCommercialAirplane className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/7624914/pexels-photo-7624914.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Three times a year, we escape to premium locations for a work-free getaway, blending adventure, relaxation, and team spirit."
  },
  {
    title: "Competitive Spirit: In-House Sports",
    icon: <FaTrophy className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "We keep the energy high with year-round sports competitions, including Cricket, Badminton, and Table Tennis."
  },
  {
    title: "Movie Nights",
    icon: <FaFilm className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Relax and enjoy movies with your team—inside the office and at special venues!"
  },
  {
    title: "Weekly Spa & Wellness Perks",
    icon: <FaSpa className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/4783289/pexels-photo-4783289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Enjoy complimentary spa sessions including manicures, pedicures, and head spa treatments every week."
  },
  {
    title: "Bi-Weekly Engagement Activities",
    icon: <FaCalendarAlt className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/7888801/pexels-photo-7888801.jpeg",
    description: "Exciting activities twice a week to boost morale, foster creativity, and keep the energy levels high."
  },
  {
    title: "Monthly Rewards and Recognition",
    icon: <FaAward className={`${iconColor} text-4xl`} />,
    image: "https://images.pexels.com/photos/7842689/pexels-photo-7842689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Celebrating outstanding contributions and recognizing the hard work of our team every month."
  }

];


export default function CulturePage() {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-8 md:px-24">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        Beyond Work: <br /> Creating Unforgettable Moments ✨
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="p-6 flex flex-col items-start">
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                {section.icon}
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </motion.div>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}>
                {section.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 bg-white p-8 rounded-2xl shadow-lg text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          See the ISSC Culture Come to Life! 🎥📸
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Experience our dynamic workplace through our exclusive video highlights and gallery.
        </p>
        <div className="mt-6">
          <video
            className="w-full h-auto aspect-video rounded-lg shadow-md"
            src="https://prodevstorage01.blob.core.windows.net/isscwebsite/office_bg.mp4" // Replace with actual video
            title="Company Culture Video"
            controls
          />
        </div>
      </motion.div>
    </div>
  );
}
