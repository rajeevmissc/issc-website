import React from "react";
import { motion } from "framer-motion";
import Blog_girl from "../../Assets/Images/blog_girl.webp";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TrendingPost = ({ title, description, date, onClick }) => {
  return (
    <motion.div
      className="md:w-1/2 p-6 text-left shadow-lg rounded-2xl border border-gray-200 cursor-pointer"
      onClick={onClick}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <motion.span
        className="text-blue-700 font-bold text-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        Trending Post
      </motion.span>
      <h3 className="text-4xl font-bold mt-2 pt-3 leading-[3rem]">{title}</h3>
      <p className="text-gray-800 text-base mt-6">{description}</p>
      <p className="text-gray-700 text-sm mt-6">
         {date}
      </p>
    </motion.div>
  );
};

const BlogSection = () => {
  const post =  {
    id: 1,
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "The Role of AI in Accounting and Audit",
    description: "Discover how Artificial Intelligence is transforming accounting and audit functions with automation and insights...",
    author: "Praveen Miglani",
    date: "March 25, 2024",
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog-overview/${post.id}`);
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#E8FAFF] pt-16 px-6 text-center"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h2
        className="text-5xl font-bold text-gray-900 pt-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Read our latest Insights
      </motion.h2>
      <motion.p
        className="text-gray-700 font-bold mt-2 max-w-md mx-auto text-md py-3"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Stay ahead in audit, taxation, and M&A with expert insights tailored for
        financial professionals and businesses.
      </motion.p>

      <div className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <TrendingPost {...post} onClick={handleClick} />
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={Blog_girl}
            alt="Trending Post"
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
