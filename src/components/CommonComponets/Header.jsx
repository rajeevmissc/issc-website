import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube , FaBell, FaPhoneAlt} from "react-icons/fa";
import { FiX, FiMenu, FiHome, FiTool, FiFileText, FiPhone, FiEdit, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import ISSC_LOGO from "../../Assets/Images/issc_logo_white.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="bg-[#082C41] text-white py-3 px-6 md:px-10 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-5">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
          <Link to="/">
            <motion.img
              src={ISSC_LOGO}
              alt="ISSC Logo"
              className="h-12"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
      {/* Hide social icons on mobile */}
      <motion.div className="hidden md:flex gap-4">
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://in.linkedin.com/company/issc-international-shared-support-centre-pvt-ltd" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" size={18} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://www.instagram.com/glimpse_of_issc/?igsh=NGVhN2U2NjQ0Yg%3D%3D#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-red-500" size={18} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://www.youtube.com/@WeatISSC" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="cursor-pointer hover:text-red-500" size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Buttons for larger screens */}
      <motion.div className="hidden md:flex gap-3">
        <Link to="/contact-us">
          <motion.button
            className="border border-white px-4 py-1 rounded text-white hover:bg-red-500"
            whileHover={{ scale: 1.1 }}
          >
            Get in touch
          </motion.button>
        </Link>
      </motion.div>

      {/* Icon buttons for mobile with Blinking Animation */}
      <motion.div className="flex md:hidden gap-6">
        <Link to="/contact-us">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }} // Blinking effect
            transition={{ duration: 1, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
          >
            <FaPhoneAlt className="text-white cursor-pointer hover:text-red-500" size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </div>

      </motion.header>

      <SidebarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </>
  );
};

const SidebarMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { name: "Home", icon: <FiHome />, link: "/" },
    { name: "Our Capabilities", icon: <FiTool />, link: "/services" },
    { name: "Expert Insights", icon: <FiEdit />, link: "/blogs" },
    { name: "Careers", icon: <FiBriefcase />, link: "/careers" },
    { name: "About Us", icon: <FiFileText />, link: "/about-us" },
    { name: "Contact Us", icon: <FiPhone />, link: "/contact-us" },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-64 bg-[#2d3748] text-white shadow-lg z-50"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: menuOpen ? 0 : -300, opacity: menuOpen ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        <FiX size={28} />
      </button>

      <motion.ul className="mt-8 p-2">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.link}
              className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-[#5C565F] transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};



export default Header;
