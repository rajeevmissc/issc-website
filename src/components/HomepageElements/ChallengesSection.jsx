import React from "react";
import { motion } from "framer-motion";

const TrendingInsights = () => {
  const insights = [
    { id: 1, title: "Increasing pressures to improve margins" },
    { id: 2, title: "Talent attraction and client retention" },
    { id: 3, title: "Evolving expectations of stakeholders" },
    { id: 4, title: "Rapid rise of Artificial Intelligence" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="bg-[#041E2F] text-white py-6 px-10 flex items-center justify-between"
    >
      {/* Left Section */}
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="font-bold text-sm uppercase pr-6 whitespace-nowrap"
      >
        We Understand <br /> Your Challenges
      </motion.h2>

      {/* Insights Section */}
      <div className="flex justify-between w-full gap-8">
        {insights.map((insight, index) => (
          <motion.div 
            key={insight.id} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-start w-1/4"
          >
            {/* Number */}
            <motion.span 
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }}
              className="text-blue-400 font-bold text-3xl mr-3"
            >
              {insight.id}
            </motion.span>
            
            {/* Text with Border */}
            <div className="border-l border-gray-600 pl-4">
              <p className="font-semibold text-sm">{insight.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TrendingInsights;
