import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heading2, BodyText } from "../../utils/Typography";
import { useNavigate } from "react-router-dom";
const insights = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "The Role of AI in Accounting and Audit",
    description: "Discover how Artificial Intelligence is transforming accounting and audit functions with automation and insights...",
    author: "Praveen Miglani",
    date: "March 25, 2024",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6694542/pexels-photo-6694542.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mergers & Acquisitions: Key Considerations for a Successful Deal",
    description: "Learn essential factors beyond financial numbers that determine M&A success and long-term value...",
    author: "Sanket Agrawal",
    date: "April 14, 2025",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Navigating Tax Compliance in a Changing Landscape: UK Perspective",
    description: "Understand how UK tax compliance is evolving with digital requirements and global reforms...",
    author: "Ankush Tiwari",
    date: "March 25, 2025",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/5833772/pexels-photo-5833772.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Navigating Tax Compliance in a Changing Landscape: US Perspective",
    description: "How US businesses can adapt to evolving IRS regulations and state-level requirements...",
    author: "Vasu Narula",
    date: "Jan 25, 2025",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7054801/pexels-photo-7054801.jpeg",
    title: "The Importance of Audits and How the Landscape is Changing",
    description: "Explore how audits are evolving from compliance checks to strategic tools for insight...",
    author: "Manish Pulwaria",
    date: "Feb 25, 2025",
  }
];



const InsightCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/insight-overview/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-xl overflow-hidden p-6 flex flex-col h-[450px] w-[340px] cursor-pointer"
      onClick={handleCardClick}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <div className="mt-4 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <button
        onClick={handleCardClick}
        className="text-red-600 text-right font-semibold mt-3 inline-block hover:underline"
      >
        Read More
      </button>
    </motion.div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.2 }}
    onClick={onClick}
    className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-500 p-3"
  >
    <FiChevronLeft size={30} />
  </motion.button>
);

const CustomNextArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.2 }}
    onClick={onClick}
    className="absolute -right-14 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-500 p-3"
  >
    <FiChevronRight size={30} />
  </motion.button>
);

const ExpertInsights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sm:text-left text-center">
            <Heading2 className="text-4xl font-bold mt-3">Our Insights</Heading2>
            <BodyText className="text-gray-600 mt-2 max-w-2xl">
              Explore expert analysis and perspectives shaped by our experience and subject matter experts.
            </BodyText>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/blogs" target="_blank">
              <button className="w-[100px] my-6 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
                View All
              </button>
            </Link>
          </motion.button>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings}>
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <InsightCard {...insight} />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExpertInsights;
