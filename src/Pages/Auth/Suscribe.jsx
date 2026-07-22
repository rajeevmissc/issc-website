import { useState } from "react";
import { FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import hero_bg from "../../Assets/Images/building_hero.png";
import axios from "axios"; // Using axios for API requests

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    setSuccess(false);

    if (!email) {
      setErrors("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setErrors("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://issc-backend-app.vercel.app/subscribers/subscribe-mail", { email });
      
      // Assuming API returns success status
      if (response.status === 201) {
        setSuccess(true);
        setEmail("");
      } else {
        setErrors("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setErrors(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300">
      {/* Left Content Section */}
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 w-full max-w-lg flex flex-col relative">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Stay informed with our newsletter
        </h2>
        <p className="text-base text-gray-600 text-center mt-2 leading-relaxed">
          Subscribe now to receive exclusive insights, industry updates, and expert tips straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative flex items-center border rounded-lg p-3 w-full focus-within:ring-2 focus-within:ring-indigo-500">
            <FaEnvelope className="text-gray-400 text-lg mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 outline-none text-gray-700 text-lg"
            />
          </div>
          {errors && <p className="text-red-500 text-sm mt-2 text-center">{errors}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-indigo-600 text-white"
            }`}
          >
            {loading ? "Subscribing..." : "Subscribe"} <FaRegPaperPlane className="ml-2" />
          </button>
          {success && <p className="text-green-500 text-sm text-center mt-3">Thank you for subscribing! Stay tuned for updates.</p>}
        </form>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-[60%] flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative w-full max-w-[550px] overflow-hidden">
          <img
            src={hero_bg}
            alt="Newsletter Subscription"
            className="w-full h-full object-cover object-top rounded-xl shadow-xl"
          />
          <div className="absolute top-1/3 left-0 w-32 h-32 bg-gradient-to-r from-gray-400 to-transparent rotate-45 opacity-30"></div>
          <div className="absolute top-1/3 right-0 w-32 h-32 bg-gradient-to-r from-gray-400 to-transparent rotate-45 opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
