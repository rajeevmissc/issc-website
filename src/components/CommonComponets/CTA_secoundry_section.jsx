import { Link } from "react-router-dom";

export default function CTASecondarySection() {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl my-12">
          Unlock new growth opportunities with our expert services in audit, taxation, M&A, and data migration. 
          Let’s take your business to the next level together.
        </p>
        <Link to="/contact-us">
        <button className="w-64 py-3 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md">
      Get in touch
    </button>
        </Link>  
      </div>
    );
}
