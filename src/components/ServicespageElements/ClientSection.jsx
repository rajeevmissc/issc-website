import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook, FaTwitter,FaUsers, FaRegBuilding, FaRegObjectGroup } from "react-icons/fa";
const clients = [
  { id: 1, icon: <FaApple size={40} color="#A2AAAD" /> }, // Silver (Apple)
  { id: 2, icon: <FaGoogle size={40} color="#4285F4" /> }, // Google Blue
  { id: 3, icon: <FaMicrosoft size={40} color="#F25022" /> }, // Microsoft Red
  { id: 4, icon: <FaAmazon size={40} color="#FF9900" /> }, // Amazon Orange
  { id: 5, icon: <FaFacebook size={40} color="#1877F2" /> }, // Facebook Blue
  { id: 6, icon: <FaTwitter size={40} color="#1DA1F2" /> } // Twitter Blue
];

const communityTypes = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
    icon: <FaRegBuilding className="text-green-500 text-4xl" />,
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
    icon: <FaRegObjectGroup className="text-purple-500 text-4xl" />,
  },
];

const ClientsCommunitySection = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Clients Section */}
      <h2 className="text-3xl font-bold text-black">Our Clients</h2>
      <p className="text-gray-600 text-lg mt-2">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
      {clients.map(client => (
        <div key={client.id} className="p-4 border rounded-lg shadow">
          {client.icon}
        </div>
      ))}
      </div>

      {/* Community Management Section */}
      <h2 className="text-3xl font-bold text-black mt-16">
        Manage your entire community in a single system
      </h2>
      <p className="text-gray-600 text-lg mt-2">Who is Nextcent suitable for?</p>

      {/* Community Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {communityTypes.map((community, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{community.icon}</div>
            <h3 className="text-lg font-bold text-black">{community.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {community.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsCommunitySection;
