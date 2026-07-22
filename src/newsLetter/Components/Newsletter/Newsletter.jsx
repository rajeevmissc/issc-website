import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import iconList from "../../../Assets/Icons/icon-list.svg";
import desktopSignup from "../../../Assets/Icons/illustration-sign-up-desktop.svg";
import { subscribeToNewsletter } from "../../newsLetterApi";
import Modal from "../Modal/Modal";

const Newsletter = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState(window.innerWidth);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(emailRegex.test(inputEmail) || inputEmail === "");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validEmail) {
  //     setIsModalOpen(true);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail || email === "") return;
  
    const response = await subscribeToNewsletter(email);
    if (response.message === "Subscription successful") {
      setIsModalOpen(true);
    } else {
      alert(response.message);
    }
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  useEffect(() => {
    const handleResize = () => setView(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
  ) : (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6"
    >
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row gap-6 transform hover:scale-105 transition duration-500">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Stay Updated!</h1>
          <p className="text-gray-600">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="space-y-3">
            {["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={iconList} alt="List" className="w-6 h-6" />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> Email address
            </label>
            {!validEmail && email !== "" && (
              <p className="text-red-500 text-sm">Valid email required</p>
            )}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                email !== "" && !validEmail ? "border-red-500 ring-red-300" : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleSubmit}
              disabled={!validEmail || email === ""}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold p-3 mt-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
            >
              Subscribe to monthly newsletter
            </motion.button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={view >= 768 ? desktopSignup : desktopSignup} 
            alt="Sign Up" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
