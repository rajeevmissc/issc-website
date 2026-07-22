import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Mission_image from "../../Assets/Images/image_goal.webp";

export default function VisionMisionSection() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto p-6">
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full text-left mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 text-md pr-0 lg:pr-12 mb-4 leading-relaxed">
            International Shared Support Centre (ISSC) consists of various client and enablement 
            services teams that operate to deliver strategic support to partnering firms in their 
            quest to deliver exceptional client services in an efficient way.
          </p>
          <p className="text-gray-600 text-md pr-0 lg:pr-12 mb-4 leading-relaxed">
            ISSC aims to support accounting and IT firms across the globe by giving them access 
            to world-class talent available at ISSC apart from helping them be future ready in 
            this ever-changing digital world.
          </p>
          <p className="text-gray-600 text-md pr-0 lg:pr-12 leading-relaxed">
            Our focus is to stay relevant to our clients and be their one-stop solution for the 
            globally changing accounting world. ISSC’s strong talent pool comes with in-depth 
            experience in diversified functions and provides domain knowledge across a range of 
            key industries and technologies.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 w-full">
          <LazyLoadImage
            src={Mission_image}
            alt="Professional business consulting meeting"
            effect="blur"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
