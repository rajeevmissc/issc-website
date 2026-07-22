import React from "react";
import { Heading1 } from "../../utils/Typography";
import { Link } from "react-router-dom";
import CareerImage from "../../Assets/Images/careers_img2.jpg";

const CareerSection = () => {
  return (
    <div className="bg-gray-300 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 p-6 sm:p-10 max-w-6xl mx-auto">
        {/* Left Content (will appear below image on mobile) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <Heading1 className="text-3xl sm:text-4xl max-w-md font-bold mb-6">
            Are you seeking an exciting role that will challenge and inspire you?
          </Heading1>
          <div className="text-base sm:text-lg">
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link to="/careers">
                <button className="w-56 sm:w-64 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
                  Explore open opportunities
                </button>
              </Link>
              <Link to="/culture">
                <button className="w-56 sm:w-64 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
                  Life at ISSC
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image (will appear first on mobile) */}
        <div className="lg:w-2/3 mb-8 lg:mb-0 flex justify-center">
          <img
            src={CareerImage}
            alt="Smiling woman with laptop"
            className="w-full max-w-lg h-[250px] sm:h-[350px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
