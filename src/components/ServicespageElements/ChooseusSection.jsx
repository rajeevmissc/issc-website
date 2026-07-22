import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Imagewwr from "../../Assets/Images/image_wwr.webp";
import Imagewcu from "../../Assets/Images/image_wcu.webp";
import { Heading4, Heading2, BodyText } from "../../utils/Typography";

const BusinessConsulting = () => {
  return (
    <div className="bg-white w-full mx-auto">
      {/* Why Choose Us Section */}
      <div className="w-full max-w-6xl mx-auto py-16 px-5 sm:px-0">
        <Heading2 className="text-4xl font-bold text-gray-900 underline">Why Choose Us</Heading2>
        <div className="flex flex-col md:flex-row mt-10">
          <img src={Imagewcu} alt="Consulting Team" className="w-full md:w-1/2 rounded-lg shadow-xl" />
          <div className="md:w-1/2 md:pl-12 space-y-6 mt-6 md:mt-0">
            <Heading4 className="text-2xl font-bold text-gray-900">
              Trusted experts in multiple accounting, finance and technology domains providing tailored solutions to drive business success.
            </Heading4>
            {[
              "Access to qualified and experienced team members",
              "Robust quality review processes",
              "Take advantage of round the clock working",
              "Resource continuity at unmatched pricing"
            ].map((text, index) => (
              <div key={index} className="flex space-x-4 items-center">
                <AiOutlineSafetyCertificate className="text-green-600 text-6xl flex-shrink-0" />
                <BodyText className="text-lg">{text}</BodyText>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Our Approach Section */}
      <div className="w-full max-w-6xl mx-auto py-16 px-5 sm:px-0">
        <Heading2 className="text-4xl font-bold text-gray-900 underline">Our Approach</Heading2>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="md:w-1/2 md:pr-12 space-y-6 mt-6 md:mt-0">
            <Heading4 className="text-2xl font-bold text-gray-900">
              Empowering organizations worldwide through collaborative thinking, innovative problem-solving, and purposeful strategies that fuel long-term success.
            </Heading4>
            {[
              "Centered solutions designed to foster agility, resilience, and impact in a rapidly evolving world.",
              "Data-driven insights that guide thoughtful decisions and unlock new pathways for growth and innovation.",
              "Trusted partnerships built on transparency, shared goals, and a commitment to collective progress.",
              "Scalable and adapt to change, enabling organizations to thrive in diverse global contexts."
            ].map((text, index) => (
              <div key={index} className="flex space-x-4 items-center">
                <AiOutlineSafetyCertificate className="text-green-600 text-6xl flex-shrink-0" />
                <BodyText className="text-lg">{text}</BodyText>
              </div>
            ))}
          </div>


          <img src={Imagewwr} alt="Consulting Team" className="w-full md:w-1/2 rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default BusinessConsulting;
