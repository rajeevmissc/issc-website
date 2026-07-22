import React from "react";
import { FaUsers, FaHandshake } from "react-icons/fa";
import Hero_bg_image from "../../Assets/Images/becomepartner.webp";
const PartnerProgram = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
    <div className="flex flex-col md:flex-row items-center bg-white text-black py-12  gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-sm uppercase text-gray-500 tracking-wider">Resources / Partner Program</p>
        <h1 className="text-5xl font-bold text-red-500">Grow your business</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Are you a freelancer or agency specialized in UX, digital marketing, or growth?
          Join our Partner Program powered by PartnerStack to learn new skills, build your brand, and earn extra income.
        </p>
        <div className="flex gap-6">
          <button className="border border-gray-500 text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-all flex items-center gap-2">
            <FaUsers className="text-lg" /> See all our partners
          </button>
          <button className="bg-red-500 px-6 py-3 rounded-md text-white flex items-center gap-2 hover:bg-red-600 transition-all">
            <FaHandshake className="text-lg" /> Become a partner
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-end p-5 rounded-lg">
        <img src={Hero_bg_image} alt="Meeting" className="rounded-lg shadow-xl w-full max-w-lg object-cover" />
      </div>
    </div>
    </section>
  );
};

export default PartnerProgram;
