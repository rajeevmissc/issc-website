import React from "react";
import { Link } from "react-router-dom";
const CTASection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-black-400 text-3xl font-bold tracking-wide text-center">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed text-center">
          Partner with us for expert guidance and strategies that drive growth and success.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
  <Link to="/contact-us">
    <button className="w-64 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
      Contact Us
    </button>
  </Link>
  <Link to="/services">
    <button className="w-64 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
      Our Capabilities
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default CTASection;
