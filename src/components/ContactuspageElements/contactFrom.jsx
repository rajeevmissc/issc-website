import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getCountries } from "libphonenumber-js";
function ContactHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Icon + Heading */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Contact & Support
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-gray-700 text-base sm:text-lg mt-3 sm:mt-4 max-w-md sm:max-w-2xl px-2">
        We're here to assist you. Whether it's inquiries, consultations, or
        support, don't hesitate to reach out.
      </p>
    </div>
  );
}
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  // Regex Patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/; // Allow 10-15 digits

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, countryData) => {
    // Find the country name using the country code
    const countryCode = countryData?.countryCode?.toUpperCase();
    const countryName = countryCode
      ? getCountries().includes(countryCode)
        ? new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode)
        : ""
      : "";

    setFormData({ ...formData, phone: value, country: countryName });
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
        query: "",
        message: "",
        country: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
      setErrors({});
    }
  };


  return (
    <div>
      {/* Header Section */}
      <ContactHeader />

      <div className="flex flex-col lg:flex-row p-6 lg:p-12 rounded-lg max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-[#F4F8FB] p-6 lg:p-8 rounded-lg shadow-md w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Get in Touch with Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`mt-1 w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-blue-200`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@company.com"
                className={`mt-1 w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-blue-200`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium">Phone Number *</label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass={`w-full p-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring focus:ring-blue-200`}
                inputStyle={{
                  width: "100%",
                  height: "40px", // Adjust as needed
                  borderRadius: "8px",
                  border: errors.phone ? "1px solid red" : "1px solid #ccc",
                }}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className={`mt-1 w-full p-2 border ${errors.company ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring focus:ring-blue-200`}
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Your role"
                className={`mt-1 w-full p-2 border ${errors.role ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring focus:ring-blue-200`}
              />
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave us a message"
                className={`mt-1 w-full p-2 border ${errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring focus:ring-blue-200`}
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded-lg font-semibold hover:bg-red-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 space-y-6 text-gray-700 ml-12">
          <div className="flex items-start space-x-4">
            <Phone className="text-red-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-sm">Monday - Friday, 9:30 AM - 7:30 PM</p>
              <a href="tel:+(91)9650610936" className="text-blue-500 underline block text-sm">
                Call Us (+91) 0124 4115728
              </a>
              <a href="tel:(+91) 0124 4115728" className="text-blue-500 underline block text-sm">
                (+91) 0124 4115728
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="text-red-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-lg">Email Support</h3>
              <p className="text-sm">Send us an email, we will get back within 24 hours.</p>
              <a href="mailto:support@xyz.com" className="text-blue-500 underline text-sm">
                info@issc.co.in
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-red-500 w-14 h-14" />
            <div>
              <h3 className="font-semibold text-lg">Gurugram, INDIA</h3>
              <p className="text-sm">Visit our office Monday - Friday, 9:00 AM - 5:00 PM</p>
              <a href="https://www.google.co.in/maps/place/International+Shared+Support+Centre+Private+Limited+(ISSC)/@28.4976826,77.0142086,13z/data=!3m1!5s0x390d1946a53cec9f:0x63a0bd67aa850496!4m10!1m2!2m1!1sISSC!3m6!1s0x390d1923e7e4cbd7:0x262bc35827226ea9!8m2!3d28.4976826!4d77.0863064!15sCgRJU1NDkgEPYWNjb3VudGluZ19maXJt4AEA!16s%2Fg%2F11nmt3q9yv?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-blue-500 underline text-sm">
                448-a, Enkay square, Upper Ground Floor,
                Udyog Vihar Phase V, Sector-19,Gurugram,
                Haryana 122008
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
