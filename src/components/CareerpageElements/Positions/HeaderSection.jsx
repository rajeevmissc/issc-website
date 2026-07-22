import { Briefcase, Info, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
function JobPostingHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="flex items-center space-x-4">
        <Briefcase className="w-10 h-10 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Team
        </h2>
      </div>
      <p className="text-gray-700 text-lg mt-4 max-w-2xl">
        Explore exciting career opportunities with us. We are looking for talented individuals to grow with our company.
      </p>
      <div className="mt-6 flex items-center space-x-4">
        <Link to="/culture">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-all flex items-center space-x-2">
            <UsersRound className="w-5 h-5" />
            <span>Our Culture</span>
          </button>
        </Link>
        <Link to="/about-us">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-all flex items-center space-x-2">
            <Info className="w-5 h-5" />
            <span>About Us</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobPostingHeader;
