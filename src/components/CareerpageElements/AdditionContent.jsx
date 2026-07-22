import { FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { memo } from "react";

const benefitTransition = { duration: 0.6, ease: "easeOut" };

const FunctionalTraining = memo(() => {
    const benefits = [
        "Business communication - Active listening, confident public speaking, and impactful presentations.",
        "Personality Development – Boosting confidence, professional etiquette, and self-branding.",
        "Attention to Detail – Developing precision, analytical thinking, and problem-solving skills.",
    ];

    return (
        <div className="max-w-xl mx-auto p-6">
            <motion.h3
                className="text-xl font-semibold text-red-500 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={benefitTransition}
            >
                Functional Training
            </motion.h3>
            <div className="space-y-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-lg shadow-md p-4 overflow-hidden"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...benefitTransition, delay: index * 0.3 }}
                        whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0,0,0,0.15)" }}
                    >
                        <motion.div
                            className="flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-300 rounded-full font-bold text-gray-900 mr-4"
                            whileHover={{ rotate: 360 }}
                            transition={benefitTransition}
                        >
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </motion.div>
                        <p className="text-gray-800 text-lg font-medium">{benefit}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
});

const TechnicalTraining = memo(() => {
    const technicalBenefits = [
        "Hands-on Learning – Real-world projects and simulations to bridge the gap between theory and practice.",
        "Classroom & On-the-Job Training in financial analysis, auditing, compliance, and tech solutions.",
        "Industry-Specific Tools & Software – Training on ERP systems, data analytics, and automation tools.",
    ];

    return (
        <div className="max-w-xl mx-auto p-6">
            <motion.h3
                className="text-xl font-semibold text-red-500 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={benefitTransition}
            >
                Technical Training
            </motion.h3>
            <div className="space-y-6">
                {technicalBenefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-lg shadow-md p-4 overflow-hidden"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...benefitTransition, delay: index * 0.3 }}
                        whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0,0,0,0.15)" }}
                    >
                        <motion.div
                            className="flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-300 rounded-full font-bold text-gray-900 mr-4"
                            whileHover={{ rotate: 360 }}
                            transition={benefitTransition}
                        >
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </motion.div>
                        <p className="text-gray-800 text-lg font-medium">{benefit}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
});

export default function CareerPage() {
    const experienceItems = [
        { icon: FaChartLine, title: "Explore Multiple Domains", text: "Work across different teams and business units to broaden expertise." },
        { icon: FaChalkboardTeacher, title: "Express Interest in New Roles", text: "Move between teams based on business needs and personal career aspirations." },
        { icon: FaChalkboardTeacher, title: "Develop Niche Skills", text: "Gain expertise in more than one area, making you a well-rounded professional." },
        { icon: FaChalkboardTeacher, title: "Accelerate Your Corporate Journey", text: "Learn, adapt, and grow into leadership roles faster by diversifying your skill set." }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-gray-900">Comprehensive Functional & Technical Training</h1>
                <p className="mt-4 text-lg text-gray-600">At ISSC, we believe in equipping our team with the right skills to excel. Our structured training programs include:</p>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row justify-between gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <FunctionalTraining />
                <TechnicalTraining />
            </motion.div>

            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 text-center">Multi-Dimensional Experience – Expand Your Horizons</h2>
                <p className="text-center text-gray-600 mt-2">At ISSC, we provide opportunities to gain cross-functional experience, enabling professionals to:</p>

                <motion.div className="grid md:grid-cols-2 gap-6 mt-6">
                    {experienceItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                        >
                            <item.icon className="text-red-500 text-4xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-left">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
