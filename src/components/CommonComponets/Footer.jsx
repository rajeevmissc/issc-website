import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaBuilding, FaUser, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import ISSC_LOGO from "../../Assets/Images/issc_logo_white.png";

const SubFooter = () => {
  return (
    <div className="w-full py-4 px-6 md:px-10 lg:px-20 bg-[#082C41] border-t border-gray-600 text-white text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-2 md:space-y-0">
        <span>© 2025 ISSC. All Rights Reserved.</span>
        <div className="flex space-x-4">
          <Link to="/term-conditions" target="_blank" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" target="_blank" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    phone: "",
    email: "",
    message: "NA",
    country: "NA",
  });
  const [errors, setErrors] = useState({});


   // Validation function
   const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.role) newErrors.role = "Please select your role.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits).";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Move this to the top
    validateForm();  // Now validate

    try {
      const response = await axios.post(
        "https://issc-backend-app.vercel.app/contact/form",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
      setErrors({});
    }
  };


  return (
    <>
    <footer className="bg-[#082C41] text-white py-12 px-6 md:px-20 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="space-y-4 max-w-xs">
          <Link to="/">
            <img src={ISSC_LOGO} alt="ISSC Logo" className="h-12" />
          </Link>
          <p className="leading-relaxed">We at International Shared Support Centre (ISSC) provide strategic support to partnering firms to ensure efficient client services.</p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="w-10 h-10 mr-4 text-gray-400" />
            448-a, Enkay Square, Udyog Vihar Phase V, Sector-19, Gurugram, Haryana 122008
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="w-10 h-10 mr-4 text-gray-400" />
            4th floor, Vasundhara building, 2/7 Sarat Bose Road, Minto Park, Kolkata 70020
          </p>
          <p className="flex items-center">
            <FaEnvelope className="w-6 h-6 mr-3 text-gray-400" />
            info@issc.co.in
          </p>
          <p className="flex items-center">
            <FaPhone className="w-6 h-6 mr-3 text-gray-400" />
            Call Us (+91) 0124 4115728
          </p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 max-w-xs">
          <h3 className="text-lg font-semibold">Contact us</h3>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex items-center border-b border-gray-400">
                <FaUser className="text-gray-400 w-6 h-6 mr-3" />
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full p-2 bg-transparent focus:outline-none" />
              </div>
              {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center border-b border-gray-400">
                <FaBuilding className="text-gray-400 w-6 h-6 mr-3" />
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full p-2 bg-transparent focus:outline-none" />
              </div>
              {errors.company && <span className="text-red-500 text-xs">{errors.company}</span>}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center border-b border-gray-400">
                <FaPhone className="text-gray-400 w-6 h-6 mr-3" />
                <input type="text" name="phone" placeholder="+1 800 123-34-45" value={formData.phone} onChange={handleChange} className="w-full p-2 bg-transparent focus:outline-none" />
              </div>
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center border-b border-gray-400">
                <FaEnvelope className="text-gray-400 w-6 h-6 mr-3" />
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full p-2 bg-transparent focus:outline-none" />
              </div>
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>

            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold">Get in touch</button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-6 max-w-xs">
         <div className="grid grid-cols-2 gap-2">
  {[
    { name: "Home", href: "/" },
    { name: "Our Capabilities", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      className="cursor-pointer hover:text-red-500 text-md transition"
    >
      {item.name}
    </a>
  ))}
</div>

          <div className="flex justify-center space-x-6 text-xl mt-6">
            <Link to="https://in.linkedin.com/company/issc-international-shared-support-centre-pvt-ltd">
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition" />
            </Link>
            <Link to="https://www.instagram.com/glimpse_of_issc/?igsh=NGVhN2U2NjQ0Yg%3D%3D#">
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            </Link>
            <Link to="https://www.youtube.com/@WeatISSC">
              <FaYoutube className="cursor-pointer hover:text-gray-500 transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    <SubFooter />
    </>
  );
};

export default Footer;



