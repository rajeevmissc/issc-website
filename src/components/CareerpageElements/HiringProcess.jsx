import { motion } from "framer-motion";
import { Briefcase, Users,CheckCircle, Star, UserCheck, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";
export default function HiringProcess() {
  const steps = [
    { id: "01", title: "Screening & Shortlisting", description: "Your journey starts here! Our team reviews applications to find the best fit. If shortlisted, HR will connect with you to discuss your experience, aspirations, and what excites you about ISSC. It’s also a chance to explore our culture and values.", bgColor: "bg-gray-200", textColor: "text-black" },
    { id: "02", title: "Technical Assessment – Show Us Your Skills", description: "Get ready to put your skills to the test! Based on the role you’ve applied for, you’ll take an Aptitude Test to assess problem-solving abilities, logical reasoning, and job-specific knowledge.", bgColor: "bg-gray-200", textColor: "text-black" },
    { id: "03", title: "Technical Interview – Dive into the Details", description: "Now, it’s time to showcase your expertise. Our subject matter experts will evaluate your technical skills, problem-solving approach, and ability to tackle real-world challenges. Be ready for an exciting discussion!", bgColor: "bg-gray-200", textColor: "text-black" },
    { id: "04", title: "Culture Round – Are We the Right Fit for Each Other?", description: "At ISSC, culture matters. In this round, we look beyond skills and assess how well you align with our values, work ethic, and team spirit. We believe great things happen when people and culture align!", bgColor: "bg-gray-200", textColor: "text-black" },
    { id: "05", title: "Leadership Round – Shaping the Future Together", description: "This final step in your hiring journey involves a discussion with senior leaders to assess your strategic thinking, leadership potential, and contribution to ISSC’s success. It’s also a chance to explore your long-term growth with us.", bgColor: "bg-gray-200", textColor: "text-black" },
    //{ id: "07", title: "Welcome Aboard!", description: "Once you successfully complete all rounds, congratulations—you’re now part of the ISSC family! Get ready to embark on a rewarding career journey with us, filled with learning, growth, and exciting opportunities.", bgColor: "bg-gray-200", textColor: "text-black" }
  ];

  return (
    <div className="bg-gray-100 pt-12">
     <div className="max-w-6xl mx-auto pb-12 px-6 text-center">
      <motion.h2 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join Our Team: The ISSC Hiring Journey
      </motion.h2>
      <motion.p 
        className="text-gray-800 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        At ISSC, we don’t just hire employees—we welcome innovators, problem-solvers, and future leaders. Our hiring process is designed to bring out the best in you while ensuring a perfect fit for our team. Here’s what to expect on your journey with us:
      </motion.p>
      <motion.div 
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-lg shadow-md ${step.bgColor} ${step.textColor}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{step.id}</h3>
            <h4 className="font-semibold mt-2 text-left">{step.title}</h4>
            <p className="text-sm mt-2 text-left">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="mt-12 bg-gray-200 text-white py-10 px-8 rounded-lg shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <PartyPopper size={40} className="text-red-500 mb-2 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-800">Welcome Aboard!</h2>
        <p className="mt-2 text-md text-gray-800">
        Once you successfully complete all rounds, congratulations—you’re now part of the ISSC family! Get ready to embark on a rewarding career journey with us, filled with learning, growth, and exciting opportunities.
        </p>
      </motion.div>
    </div>
   
    </div>
  );
}
