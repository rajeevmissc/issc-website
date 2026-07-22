import React from "react";
import { FaUsers, FaProjectDiagram, FaUserTie, FaGlobe } from "react-icons/fa";
import {Heading2, Heading3, BodyText} from "../../utils/Typography";
const stats = [
  { icon: <FaUsers size={30} />, number: "50+", label: "Clients" },
  { icon: <FaProjectDiagram size={30} />, number: "440+", label: "Projects" },
  { icon: <FaUserTie size={30} />, number: "82+", label: "Professionals" },
  { icon: <FaGlobe size={30} />, number: "5+", label: "Continents" },
];

const BusinessStats = () => {
  return (
    <section className="bg-[#D9CACA] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Section */}
        <div className="text-left max-w-md">
          <Heading2 className="text-3xl font-bold text-gray-900 leading-tight">
            Helping a Global <br />
            <span className="text-red-600">Business Reinvent Itself</span>
          </Heading2>
          <BodyText className="text-gray-700 mt-3 text-lg">
            We reached here with our hard work and dedication.
          </BodyText>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10 md:mt-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-red-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110">
                {React.cloneElement(stat.icon, { size: 36 })}
              </div>
              <Heading3 className="text-2xl font-extrabold text-gray-900 mt-4">{stat.number}</Heading3>
              <BodyText className="text-gray-700 text-lg">{stat.label}</BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
