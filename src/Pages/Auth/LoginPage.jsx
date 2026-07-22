
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import hero_bg from "../../Assets/Images/kindpng.webp";
export default function Auth() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="relative flex items-center justify-between px-[5%]  min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300">
      {/* Left Text Section */}

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col relative z-10">
        <h2 className="text-2xl font-semibold text-center">Log in</h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Don't have an account? <a href="#" className="text-red-500 font-semibold">Sign up</a>
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative mt-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={formData.showPassword}
              onChange={toggleShowPassword}
            />
            <label htmlFor="showPassword" className="text-sm">Show password</label>
          </div>

          <button
            type="submit"
            className="mt-6 bg-red-500 text-white py-3 px-6 rounded-md w-full font-semibold hover:bg-red-600"
          >
            Log in
          </button>
        </form>
      </div>


      {/* Right Image Section */}
      <div className="w-[70%] flex justify-end ml-10 relative">
        <img
          src={hero_bg}
          alt="Consulting Professional"
          className="w-full h-auto object-cover drop-shadow-lg"
        />
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-gray-300 to-transparent rotate-45 opacity-50"></div>
      </div>
    </div>

  );
}
