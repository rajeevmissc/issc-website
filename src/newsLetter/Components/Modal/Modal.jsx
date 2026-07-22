import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Modal = ({ onCloseModal, name }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.8 }} 
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center relative"
      >
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 120 }}
          className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mx-auto"
        >
          <FaCheckCircle className="text-4xl" />
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Thanks for Subscribing!</h1>
        <p className="text-gray-600 mt-2">
          A confirmation email has been sent to <b>{name}</b>. Please open it and click the button inside to confirm your subscription.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCloseModal} 
          className="mt-6 w-full bg-blue-500 text-white font-medium p-3 rounded-lg hover:bg-blue-600 shadow-md transition-all"
        >
          Dismiss Message
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Modal;
