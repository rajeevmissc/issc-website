import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogPostCard = ({ id, image, title, description, author, date, loading }) => {
  const navigate = useNavigate();

  // Detect when the card is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Runs only once
    threshold: 0.1, // Start animation when 10% of the card is visible
  });

  const handleCardClick = () => {
    if (!loading) {
      navigate(`/blog-overview/${id}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }} // Start completely invisible and far down
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Smooth rise and fade
      transition={{
        duration: 1, // Slowest and smoothest
        ease: "easeInOut", // More natural transition
      }}
      whileHover={{ scale: 1.03 }} // Subtle hover effect
      whileTap={{ scale: 0.98 }}
      className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg transition-all transform cursor-pointer"
      onClick={handleCardClick}
    >
      {loading ? (
        <div className="w-full h-56 bg-gray-200 animate-pulse"></div>
      ) : (
        <div className="relative">
          <img src={image} alt={title} className="w-full h-56 object-cover" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-900/20 to-transparent"></div>
        </div>
      )}

      <div className="p-6">
        {loading ? (
          <div className="h-6 bg-gray-200 animate-pulse w-3/4 mb-3"></div>
        ) : (
          <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {title}
          </h3>
        )}

        {loading ? (
          <div className="h-4 bg-gray-200 animate-pulse w-full mb-3"></div>
        ) : (
          <p className="text-md text-gray-600 py-3">{description}</p>
        )}

        <div className="border-t border-gray-300 mt-5 pt-4 flex justify-between text-sm text-gray-500">
          {loading ? (
            <>
              <div className="h-4 bg-gray-200 animate-pulse w-1/4"></div>
              <div className="h-4 bg-gray-200 animate-pulse w-1/6"></div>
            </>
          ) : (
            <>
              <span>{date}</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
