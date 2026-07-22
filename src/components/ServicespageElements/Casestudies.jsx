import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const insights = [
  {
    id: 1,
    title: "Audit Strategy and Support for a UK Professional Audit Firm",
    description: "The professional audit firm was already availing outsourcing services from another service provider , however the firm was facing below mentioned issues with the existing partner",
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Financial due diligence for a buy-side transaction",
    description: "Our client sought expertise in buy-side financial due diligence to advise a private equity firm, reviewing the target company's financials, earnings quality, accounting policies, EBITDA adjustments, assets, liabilities, and working capital.",
    image: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Banking client looking for a step change in new technology capability and capacity.",
    description: "A banking client seeks a major upgrade in technology capability and capacity, aiming for enhanced efficiency, scalability, and innovation to stay competitive in the evolving financial landscape",
    image: "https://images.pexels.com/photos/1485653/pexels-photo-1485653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Manage security consistently across cloud environments",
    description: "Insurance firms struggled to consistently apply security best practices to its application portfolio across cloud providers, resulting in management inefficiencies and unnecessary rework. Clients' disorganized cloud governance model led to a growing number of security concerns",
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "IT Due Diligence work for a buy-side transaction",
    description: "Supported client in preparing a high-level IT due diligence report with the objective of identifying risks or issues associated with Target’s IT landscape that are considered potentially material to the proposed transaction.",
    image: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Cyber Due Diligence work for a buy-side transaction",
    description: "A US based Corporate client wants to acquire a company in Singapore and wants detailed Cyber assessment, providing insights into the Cyber security practices, controls & overall maturity of the target company.",
    image: "https://images.pexels.com/photos/1485653/pexels-photo-1485653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Driving Efficiency and Quality in US Tax Service",
    description: "A mid-sized US consulting firm specializing in tax advisory faced increasing workload during the busy tax season, struggling with capacity constraints and tight deadlines.",
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    title: "Adding Value at Unmatched Cost in Accounting",
    description: "A mid-sized US based firm with multiple business units faced growing accounting complexity, manual processes, and delays in financial reporting.",
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];




const InsightCard = ({ id,title, description, image }) => {
   const navigate = useNavigate();
  
    const handleCardClick = () => {
      navigate(`/case-overview/${id}`);
    };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl overflow-hidden p-6 flex flex-col  w-[340px] transition-all"
      onClick={handleCardClick}
    >
      <div className="w-full h-[224px] overflow-hidden rounded-lg">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="mt-4 text-left flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <a href="#" className="text-red-600 font-semibold mt-3 inline-block hover:underline">
        Read More
      </a>
    </motion.div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.2, color: "#DC2626" }}
    className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-500 p-3"
  >
    <FiChevronLeft size={30} />
  </motion.button>
);

const CustomNextArrow = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.2, color: "#DC2626" }}
    className="absolute -right-14 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-gray-500 p-3"
  >
    <FiChevronRight size={30} />
  </motion.button>
);

const CaseStudies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col sm:flex-row justify-between items-center"
        >
          {/* Left Text */}
          <div className="sm:text-left text-center">
            <span className="text-red-500 font-bold border border-red-500 px-3 py-1 rounded-md uppercase tracking-wide">
              Case Studies
            </span>
            <h2 className="text-4xl font-bold mt-3">Our Case Studies</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance.
            </p>
          </div>
        </motion.div>
        <div className="relative">
          <Slider {...settings}>
            {insights.map((insight, index) => (
              <div key={index} className="flex justify-center">
                <InsightCard {...insight} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
