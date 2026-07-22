import React from "react";

const PromoBanner = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
    <div className="flex justify-center py-10">
      <div className="relative px-[10%] bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start shadow-lg overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gray-100">
          <div className="absolute -bottom-10 right-0 w-2/3 h-2/3 bg-blue-300 rounded-full blur-2xl opacity-70" />
          <div className="absolute -top-10 left-0 w-1/2 h-1/2 bg-cyan-300 rounded-full blur-2xl opacity-60" />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
            Interested in taking your <br /> Services to the next <br/>level?
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Check out our Top Partner list for the month Growth!!
          </p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PromoBanner;