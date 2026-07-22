import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import female_client from "../../Assets/Images/Female_client.webp"
const testimonials = [
  {
    name: "Grace Turner",
    role: "Director",
    image: female_client,
    feedback:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.",
  },
  {
    name: "Linda Carter",
    role: "Analyst",
    image: female_client,
    feedback:
      "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
  },
  {
    name: "Alex Walker",
    role: "Attorney",
    image: female_client,
    feedback:
      "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing my family's future is secure.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          {/* Left Text */}
          <div className="sm:text-left text-center">
            <span className="text-red-500 font-bold border border-red-500 px-3 py-1 rounded-md uppercase tracking-wide">
              Partner Testimonials
            </span>
            <h2 className="text-4xl font-bold mt-3">Become a success story ~like these agencies</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance.
            </p>
          </div>

          {/* Right Button */}
          <div className="mt-6 sm:mt-0">
            <button className="bg-red-500 text-white py-2 px-8 rounded-lg hover:bg-red-600 transition text-md font-semibold shadow-md">
              View All
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <button className="absolute left-[-50px] text-gray-500 hover:text-red-500 transition p-3 text-3xl" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <div className="flex gap-6 w-full overflow-hidden py-16">
            {testimonials.map((testimonial, index) => (
             <div
             key={index}
             className={`relative p-8 rounded-lg shadow-lg w-1/3 transition-transform duration-500 transform group hover:bg-red-500 hover:text-white ${
               index === current ? "scale-105" : "scale-100 "
             }`}
           >
             <div className="flex items-center gap-3 mb-3">
               <img
                 src={testimonial.image}
                 alt={testimonial.name}
                 className="w-12 h-12 rounded-full border-2 border-gray-300"
               />
               <div className="text-left">
                 <h4 className={`font-semibold text-lg ${index === 1 ? "text-black" : "text-black group-hover:text-white"}`}>
                   {testimonial.name}
                 </h4>
                 <span className={`text-sm ${index === 1 ? "text-gray-800" : "text-gray-800 group-hover:text-gray-800"}`}>
                   {testimonial.role}
                 </span>
               </div>
             </div>
           
             {/* Testimonial Content */}
             <p className="text-left py-3 leading-relaxed group-hover:text-gray-200">{testimonial.feedback}</p>
           
             {/* Quote Icon at Bottom-Right */}
             <FaQuoteRight className="absolute bottom-4 right-4 text-red-500 text-2xl group-hover:text-white transition-colors" />
           </div>
           
            ))}
          </div>
          <button className="absolute right-[-50px] text-gray-500 hover:text-red-500 transition p-3 text-3xl" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full ${index === current ? "bg-red-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
