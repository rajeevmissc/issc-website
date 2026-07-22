import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChooseUs = () => {
  return (
    <div className="bg-white w-full mx-auto">
      {/* Why Choose Us Section */}
      <div className="w-full max-w-6xl mx-auto py-16 px-5 sm:px-0">
        <h2 className="text-3xl font-semibold text-gray-900">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row mt-8">
          <LazyLoadImage
            src="/optimized-images/image_wcu.webp"
            alt="Consulting Team"
            effect="blur"
            loading="lazy"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 md:pl-10 space-y-4 mt-6 md:mt-0">
            <h4 className="text-xl font-bold text-gray-900">
              Partner with a consulting firm that delivers innovative, client-focused strategies to drive growth and transformation.
            </h4>
            <div className="flex space-x-3">
              <span className="text-gray-900 text-2xl font-bold">+</span>
              <p>Leverage decades of consulting expertise to navigate business challenges with confidence.</p>
            </div>
            <div className="flex space-x-3">
              <span className="text-gray-900 text-2xl font-bold">+</span>
              <p>We prioritize your unique needs, offering personalized strategies that drive results.</p>
            </div>
            <div className="flex space-x-3">
              <span className="text-gray-900 text-2xl font-bold">+</span>
              <p>Our successful collaborations have helped businesses grow, streamline, and achieve measurable success.</p>
            </div>
            <div className="flex space-x-3">
              <span className="text-gray-900 text-2xl font-bold">+</span>
              <p>We design strategies that are specifically aligned with your business goals and industry demands.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
