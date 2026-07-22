import Vasu_Narula from "../../Assets/Images/Vasu_Narula.png";
import Manish_Pulwaria from "../../Assets/Images/MP_IMAGE.jpg";
import Praveen_Miglani from "../../Assets/Images/PM_IMAGE.png";
import Ankush_Tiwari from '../../Assets/Images/Ankush_Tiwari-removebg-preview.png';
import Sanket_sir from "../../Assets/Images/Sanket_sir.png";
import { useParams } from "react-router-dom";
import { FaChartLine, FaCheckCircle, FaShareAlt, FaBell, FaFacebook, FaTwitter} from "react-icons/fa";
import { motion } from "framer-motion";

const insights = [
  {
    id: 1,
    author: "Praveen Miglani",
    authorImage: Praveen_Miglani,
    date: "March 25, 2024",
    title: "The Role of AI in Accounting and Audit",
    description: "Artificial Intelligence is transforming how accounting and audit functions operate, streamlining processes and enabling professionals to focus on higher-value activities.",
    content: "Artificial Intelligence (AI) is no longer just a buzzword in the world of finance—it is actively transforming how accounting and audit functions operate. With businesses under constant pressure to increase efficiency and reduce errors, AI tools are emerging as powerful enablers that help firms streamline processes and focus on higher-value activities.",
    images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"],
    sections: [
      {
        subheading: "Transforming Traditional Processes",
        subcontent: "Traditionally, accounting and auditing have relied heavily on manual effort, with professionals spending hours reconciling data, checking entries, and reviewing financial statements. Today, AI-powered systems can automate repetitive tasks such as invoice processing, fraud detection, and compliance monitoring."
      },
      {
        subheading: "Enhancing Professional Roles",
        subcontent: "AI doesn't replace accountants or auditors but rather enhances their roles. Professionals can spend less time on data entry and more on interpreting results, advising leadership, and driving strategy. This improves decision-making and ensures businesses are better prepared to adapt in a fast-changing regulatory and economic landscape."
      }
    ],
    additionalHeading: "Practical Implementation Strategies",
    additionalContent: "As adoption grows, many businesses are looking for cost-effective ways to integrate AI into their accounting and audit processes. This is where consulting and offshoring firms can play a key role—by providing access to the right expertise and implementing AI-enabled tools.",
    bulletPoints: [
      { icon: <FaCheckCircle className="text-green-500" />, text: "Implement AI-powered systems for invoice processing and fraud detection" },
      { icon: <FaChartLine className="text-blue-500" />, text: "Use machine learning algorithms for anomaly detection and compliance monitoring" }
    ],
    conclusionHeading: "The Future of AI in Finance",
    conclusionContent: "AI in accounting and audit is not just about automation—it's about elevating the profession to focus on insights, strategy, and value creation. Organizations that embrace this shift early will be better positioned to stay competitive in the years ahead.",
    buttons: [
      { text: "Subscribe", icon: <FaBell className="mr-2" /> },
      { text: "Share", icon: <FaShareAlt className="mr-2" /> }
    ],
    socialLinks: [
      { icon: <FaFacebook className="text-blue-600" />, link: "https://facebook.com" },
      { icon: <FaTwitter className="text-blue-400" />, link: "https://twitter.com" }
    ]
  },
  {
    id: 2,
    authorImage: Sanket_sir,
    author: "Sanket Agrawal",
    date: "April 14, 2025",
    title: "Mergers & Acquisitions: Key Considerations for a Successful Deal",
    description: "Explore the essential factors beyond financial numbers that determine M&A success, including cultural integration and strategic alignment.",
    content: "Mergers and acquisitions (M&A) continue to be one of the fastest ways for businesses to grow, diversify, or enter new markets. While the opportunities are vast, the path to a successful deal is rarely straightforward. Careful planning and execution are critical to ensure that the transaction delivers long-term value rather than short-term disruption.",
    images: ["https://unsplash.com/photos/man-wearing-watch-with-black-suit-Ws4wd-vJ9M0"],
    sections: [
      {
        subheading: "Beyond Financial Numbers",
        subcontent: "At its core, M&A is not just about financial numbers—it's about people, processes, and strategy. Deals often fail when companies underestimate cultural integration, overlook operational challenges, or focus too narrowly on cost synergies."
      },
      {
        subheading: "Strategic Execution Matters",
        subcontent: "For buyers and sellers alike, the stakes are high. A well-executed deal can accelerate growth, expand customer bases, and create operational efficiencies. On the other hand, poor integration can lead to employee disengagement, customer dissatisfaction, and financial strain."
      }
    ],
    additionalHeading: "Leveraging External Expertise",
    additionalContent: "This is where external expertise can make a difference. Consulting and offshoring partners bring structured frameworks for due diligence, financial analysis, and post-merger integration.",
    bulletPoints: [
      { icon: <FaCheckCircle className="text-green-500" />, text: "Develop comprehensive due diligence frameworks for risk assessment" },
      { icon: <FaChartLine className="text-blue-500" />, text: "Implement structured post-merger integration strategies" }
    ],
    conclusionHeading: "Creating Lasting Value",
    conclusionContent: "M&A deals are more than signatures on a contract—they are transformations that shape the future of businesses. Success depends on foresight, planning, and effective execution.",
    buttons: [
      { text: "Subscribe", icon: <FaBell className="mr-2" /> },
      { text: "Share", icon: <FaShareAlt className="mr-2" /> }
    ],
    socialLinks: [
      { icon: <FaFacebook className="text-blue-600" />, link: "https://facebook.com" },
      { icon: <FaTwitter className="text-blue-400" />, link: "https://twitter.com" }
    ]
  },
  {
    id: 3,
    authorImage: Ankush_Tiwari,
    author: "Ankush Tiwari",
    date: "March 25, 2025",
    title: "Navigating Tax Compliance in a Changing Landscape: UK Perspective",
    description: "Understanding how UK tax compliance is evolving with digital requirements and global reforms, and strategies for maintaining resilience.",
    content: "Tax compliance in the UK has always been a critical responsibility for businesses, but the landscape is evolving faster than ever. From digital reporting requirements to shifting international rules, organizations face a growing need to stay agile while maintaining accuracy.",
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"],
    sections: [
      {
        subheading: "The Digital Transformation",
        subcontent: "One of the most notable shifts in recent years has been the UK's Making Tax Digital (MTD) initiative, which requires businesses to keep digital records and submit returns using compatible software."
      },
      {
        subheading: "Global Compliance Challenges",
        subcontent: "At the same time, global tax developments—such as OECD-driven reforms and cross-border reporting obligations—are reshaping how UK businesses operate internationally. This means companies must manage both domestic and global obligations."
      }
    ],
    additionalHeading: "Strategic Compliance Approach",
    additionalContent: "Given the complexity, many UK businesses are turning to consulting and offshoring partners for support. Outsourced teams can help manage large volumes of compliance work and ensure accuracy in filings.",
    bulletPoints: [
      { icon: <FaCheckCircle className="text-green-500" />, text: "Implement digital record-keeping systems for MTD compliance" },
      { icon: <FaChartLine className="text-blue-500" />, text: "Develop cross-border tax reporting frameworks for international operations" }
    ],
    conclusionHeading: "Building Compliance Resilience",
    conclusionContent: "The UK tax landscape is changing rapidly, and compliance is becoming both more challenging and more strategic. Businesses that adapt quickly will create a stronger foundation for sustainable growth.",
    buttons: [
      { text: "Subscribe", icon: <FaBell className="mr-2" /> },
      { text: "Share", icon: <FaShareAlt className="mr-2" /> }
    ],
    socialLinks: [
      { icon: <FaFacebook className="text-blue-600" />, link: "https://facebook.com" },
      { icon: <FaTwitter className="text-blue-400" />, link: "https://twitter.com" }
    ]
  },
  {
    id: 4,
    authorImage: Vasu_Narula,
    author: "Vasu Narula",
    date: "Jan 25, 2025",
    title: "Navigating Tax Compliance in a Changing Landscape: US Perspective",
    description: "How US businesses can adapt to evolving IRS regulations, state-level requirements, and global tax reforms while maintaining strategic compliance.",
    content: "In the United States, tax compliance is an area of constant change. From evolving Internal Revenue Service (IRS) regulations to shifting state-level requirements, businesses must keep pace with a system that is both complex and dynamic.",
    images: ["https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"],
    sections: [
      {
        subheading: "Evolving Regulatory Environment",
        subcontent: "The US tax code is famously intricate, and with new rules emerging regularly, compliance has become more demanding. Recent trends include increased IRS scrutiny on transfer pricing, cross-border transactions, and digital detection tools."
      },
      {
        subheading: "Multi-Jurisdictional Complexity",
        subcontent: "Meanwhile, state-level tax obligations—ranging from sales and use tax to payroll requirements—add another layer of complexity for businesses operating across multiple jurisdictions."
      }
    ],
    additionalHeading: "Proactive Compliance Strategy",
    additionalContent: "Many businesses, especially those with multi-state or international operations, are partnering with consulting and offshoring firms to navigate these challenges.",
    bulletPoints: [
      { icon: <FaCheckCircle className="text-green-500" />, text: "Establish transfer pricing documentation and compliance processes" },
      { icon: <FaChartLine className="text-blue-500" />, text: "Implement multi-state tax compliance tracking systems" }
    ],
    conclusionHeading: "Turning Compliance into Advantage",
    conclusionContent: "The US tax environment will continue to evolve, and businesses must remain proactive. With the right combination of technology and expertise, organizations can turn tax compliance from a burden into a competitive advantage.",
    buttons: [
      { text: "Subscribe", icon: <FaBell className="mr-2" /> },
      { text: "Share", icon: <FaShareAlt className="mr-2" /> }
    ],
    socialLinks: [
      { icon: <FaFacebook className="text-blue-600" />, link: "https://facebook.com" },
      { icon: <FaTwitter className="text-blue-400" />, link: "https://twitter.com" }
    ]
  },
  {
    id: 5,
    authorImage: Manish_Pulwaria,
    author: "Manish Pulwaria",
    date: "Feb 25, 2025",
    title: "The Importance of Audits and How the Landscape is Changing",
    description: "How audits are evolving from compliance-driven checks to strategic tools for insight and risk management in today's business environment.",
    content: "Audits have long been a cornerstone of trust in business. By providing independent assurance on financial statements, audits help build credibility with investors, regulators, and other stakeholders.",
    images: ["https://images.unsplash.com/photo-1577100078279-b3445eae827c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"],
    sections: [
      {
        subheading: "From Compliance to Insight",
        subcontent: "Traditionally, audits were seen as compliance-driven checks to verify accuracy in financial reporting. While this remains important, audits are increasingly being viewed as tools for insight and risk management."
      },
      {
        subheading: "Technology-Driven Transformation",
        subcontent: "Advancements such as data analytics, Artificial Intelligence (AI), and continuous auditing techniques allow auditors to examine larger volumes of transactions in real time, identifying risks and anomalies more effectively."
      }
    ],
    additionalHeading: "Value-Added Audit Approach",
    additionalContent: "With rising complexity, many businesses are turning to consulting and offshoring partners to support their audit needs. External teams bring technical expertise and leverage advanced tools.",
    bulletPoints: [
      { icon: <FaCheckCircle className="text-green-500" />, text: "Implement continuous auditing techniques for real-time risk detection" },
      { icon: <FaChartLine className="text-blue-500" />, text: "Use data analytics to identify operational inefficiencies and improvement areas" }
    ],
    conclusionHeading: "Strategic Audit Advantage",
    conclusionContent: "Audits remain essential for ensuring trust and accountability, but their role is expanding. Organizations that view audits as an opportunity will be better positioned to strengthen governance and achieve long-term success.",
    buttons: [
      { text: "Subscribe", icon: <FaBell className="mr-2" /> },
      { text: "Share", icon: <FaShareAlt className="mr-2" /> }
    ],
    socialLinks: [
      { icon: <FaFacebook className="text-blue-600" />, link: "https://facebook.com" },
      { icon: <FaTwitter className="text-blue-400" />, link: "https://twitter.com" }
    ]
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const BlogPost = () => {
  const { id } = useParams();
  const insight = insights.find((item) => item.id === parseInt(id));

  if (!insight) {
    return (
      <div className="text-center py-10 text-red-600 font-bold text-lg">
        Insight not found
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariant}
      className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-12"
    >
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${insight.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl font-bold">{insight.title}</h1>
          <p className="text-lg mt-2">{insight.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <motion.div variants={fadeUpVariant} className="px-6 py-6">
        <p className="text-gray-700 leading-relaxed mb-6">{insight.content}</p>

        {/* Sections */}
        {insight.sections.map((section, index) => (
          <motion.div key={index} variants={fadeUpVariant} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.subheading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.subcontent}</p>
          </motion.div>
        ))}

        {/* Additional Info */}
        {insight.additionalHeading && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {insight.additionalHeading}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {insight.additionalContent}
            </p>
          </div>
        )}

        {/* Bullet Points */}
        {insight.bulletPoints && insight.bulletPoints.length > 0 && (
          <ul className="list-none mb-6 space-y-2">
            {insight.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center">
                {point.icon}
                <span className="ml-2 text-gray-700">{point.text}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Conclusion */}
        {insight.conclusionHeading && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {insight.conclusionHeading}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {insight.conclusionContent}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;