import { motion } from "framer-motion";
import Imagewwr from "../../Assets/Images/image_wwr.webp";
import card_bg_black from "../../Assets/Images/black_design.webp";
import card_bg_white from "../../Assets/Images/white_design.webp";
import Imagewcu from "../../Assets/Images/image_wcu.webp";
import { Link } from "react-router-dom";
import { Heading2, Heading4, BodyText } from "../../utils/Typography";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  {
    title: "Audit Strategy and Support for a UK Professional Audit Firm",
    description: "We craft and implement customized strategic plans to help your business achieve its long-term goals, ensuring sustainable growth and competitive advantage.",
    link: "Discover Strategic Solutions",
    bgColor: "bg-black text-white",
  },
  {
    title: "Financial due diligence for a buy-side transaction",
    description: "We craft and implement customized strategic plans to help your business achieve its long-term goals, ensuring sustainable growth and competitive advantage.",
    link: "Discover Strategic Solutions",
    bgColor: "bg-white text-black",
  },
];

const BusinessConsultingCards = () => {
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl mx-auto bg-[f3f7f6]"
      initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className={`p-6 shadow-md relative rounded-xl text-white overflow-hidden`}
          style={{
            backgroundImage: `url(${index % 2 === 0 ? card_bg_black : card_bg_white})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <BodyText className="mt-4">{service.description}</BodyText>
          <motion.a
            href="#"
            className="mt-4 inline-block font-semibold hover:underline text-red-400"
            whileHover={{ scale: 1.1 }}
          >
            {service.link}
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

const BusinessConsulting = () => {
  return (
    <div className="bg-white w-full mx-auto">
      <motion.div className="relative bg-cover bg-center pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <motion.div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto gap-10"
          variants={fadeIn} initial="hidden" animate="visible">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm"
              whileHover={{ scale: 1.1 }}>
              Who We Are
            </motion.span>
            <motion.h2 className="text-3xl font-bold text-gray-900 mt-4" variants={fadeIn}>
              Trusted Business Consultants with Proven Results
            </motion.h2>
            <motion.p className="text-gray-700 mt-4" variants={fadeIn}>
              Precision Cutting Services with Advanced Technology, High Accuracy, and Superior Quality.
            </motion.p>
            <motion.button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md text-md font-semibold hover:bg-red-600 transition"
              whileHover={{ scale: 1.1 }}>
              <Link to="/about-us" target="_blank">Learn More About Us</Link>
            </motion.button>
          </div>
          <motion.div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0" variants={fadeIn}>
            <img src={Imagewwr} alt="Business Consulting" className="w-full shadow-lg rounded-lg" />
          </motion.div>
        </motion.div>
      </motion.div>
      <BusinessConsultingCards />
      <motion.div className="w-full max-w-6xl mx-auto py-16" variants={fadeIn} initial="hidden" animate="visible">
        <Heading2 className="text-3xl font-semibold text-gray-900">Why Choose Us</Heading2>
        <div className="flex flex-col md:flex-row mt-8">
          <motion.img src={Imagewcu} alt="Consulting Team" className="w-full md:w-1/2 rounded-lg shadow-lg"
            variants={fadeIn} whileHover={{ scale: 1.05 }} />
          <div className="md:w-1/2 md:pl-10 space-y-4 mt-6 md:mt-0">
            <Heading4 className="text-xl font-bold text-gray-900">Partner with a consulting firm that delivers innovative strategies.</Heading4>
            <BodyText>Leverage decades of consulting expertise to navigate business challenges with confidence.</BodyText>
            <BodyText>We prioritize your unique needs, offering personalized strategies that drive results.</BodyText>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessConsulting;
