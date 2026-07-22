import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import teams from '../../Assets/Images/Ankush_Tiwari-removebg-preview.png';
import { Link } from "react-router-dom";
import { Heading3, Heading4, Heading2, BodyText, SmallText } from "../../utils/Typography";
import Mayank_Image from "../../Assets/Images/Mayank.png";
import Pulkit_Gupta from "../../Assets/Images/Pulkit_Gupta.jpg";
import Shubham_Singhal from "../../Assets/Images/Shubham.png";
import Amit_Saini from "../../Assets/Images/AMIT_IMAGE.png";
import Aman_kedia from "../../Assets/Images/AMAN_KEDIA_IMAGE.png"
import Manish_Pulwaria from "../../Assets/Images/MP_IMAGE.png";
import Praveen_Miglani from "../../Assets/Images/PM_IMAGE.png";
import Vineet_sir from "../../Assets/Images/Vineet_sir.png";
import Maam from "../../Assets/Images/Maam.png";
import Bob_image from "../../Assets/Images/Bob_image.png";
import Shaurya_Rastogi from "../../Assets/Images/Shaurya_Rastogi.png";
import Rishab_Bachhawat from "../../Assets/Images/Rishab_Bachhawat.jpg";
import Manish_Jodhani from "../../Assets/Images/Manish_Jodhani.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Vineet Chaturvedi",
    role: "Founder & CEO",
    image: Vineet_sir,
    bgColor: "bg-red-200",
    shortDescription: "Founder & CEO  at ISSC | CA",
    details: {
      introduction:
        "Vineet Chaturvedi is the CEO of ISSC and has over 20 years of experience in delivering global audit engagements in various parts of the world for the Big 4 accounting firms. He has been instrumental in setting up KPMG's shared service centre in India. Apart from that, he has also helped EY in growing its shared service centre when they were finding it difficult to get traction from their onsite teams. Vineet also has experience leading many large auditing engagements for several big accounting firms, including KPMG in London and Deloitte in South Africa. In his last role with EY Global Delivery Services, he led the EY Digital Team, helping EY implement its Data Analytics and Robotics strategy across the firm.",
    },
  },
  {
    id: 2,
    name: "Bob Crouwel",
    role: "Director & Co-Founder",
    image: Bob_image,
    bgColor: "bg-green-200",
    shortDescription: "Director & Co-Founder of ISSC",
    details: {
      introduction:
        "Bob, a director at ISSC, is a former chartered accountant with the Dutch institute NIvRA and brings over 35 years of experience in audit and advisory services. He recently retired as the Senior Advisory Partner at KPMG Netherlands, where he also served as Advisory COO in India, actively involved in establishing KPMG's shared service centre. Bob's expertise spans auditing, advisory, and global business challenges. He excels in bridging and offshore teams and driving change management in evolving work environments.",
    },
  },
  {
    id: 3,
    name: "Shradha Chaturvedi",
    role: "Co-Founder",
    image: Maam,
    bgColor: "bg-blue-200",
    shortDescription: "Head of Audit and Chief Of People",
    details: {
      introduction:
        "Shradha Chaturvedi, the dynamic Founder and Head of Audit of ISSC Consulting Pvt Ltd brings over 15 years of global experience in Internal Audit and IT audit engagements with Big 4 accounting firms across India, the UK, South Africa, and the US. With a Masters in Risk Management Policy and Law from Erasmus University, Rotterdam, she is an expert in SoX 404, SOC1, SOC2, and IT audit. Before founding ISSC Consulting, Shradha led PwC's Non-US Digital Audit Transformation team of 250 dedicated professionals. Her extensive experience in offshoring and global engagements across diverse industries makes her an expert in assisting clients in establishing offshore relationships.",
    },
  },
  {
    id: 4,
    name: "Praveen Miglani",
    role: "Director",
    image: Praveen_Miglani,
    bgColor: "bg-purple-200",
    shortDescription: "Director at ISSC | CA",
    details: {
      introduction:
        "Praveen, a seasoned Director of ISSC, boasts 15+ years of diverse experience in Auditing, Accounting, and Advisory roles. His career spans EY, KPMG, US-based Investment Management firms, and various Indian companies. Praveen excels in serving both private and public enterprises across sectors. He specializes in deal advisory, technical accounting (US GAAP and IFRS), and GAAP convergence, demonstrating expertise in ASC 606 (Revenue Recognition), ASC 805 (Business Combinations), ASC 350 (Intangibles-Goodwill), and more. As a Chartered Accountant with ICAI, Praveen is committed to delivering impactful solutions to clients.",
    },
  },
  {
    id: 8,
    name: "Ankush Tiwari",
    role: "Senior Manager",
    image: teams,
    bgColor: "bg-purple-200",
    shortDescription: "Senior Manager at ISSC | CA",
    details: {
      introduction:
        "Ankush Tiwari, Senior Manager at ISSC’s Audit Practice, brings over 7 years of diverse audit experience with private companies across multiple sectors. Having been with ISSC for the past 7 years, he is recognized for his meticulous attention to detail, strong analytical skills, and ability to navigate complex regulatory landscapes. Ankush has successfully led numerous audit projects, ensuring clients maintain the highest standards of financial accountability. His expertise spans Dutch GAAP, UK GAAP, and compliance with IFRS standards. In addition to his audit specialization, Ankush has gained exposure to accounting and tax practices, further strengthening his ability to provide holistic financial insights. A qualified Chartered Accountant from the Institute of Chartered Accountants of India, Ankush combines technical expertise with practical business knowledge, positioning himself as a versatile leader in the audit and finance domain.",
    }
  },
  {
    id: 6,
    name: "Manish Phalwaria",
    role: "Senior Manager",
    image: Manish_Pulwaria,
    bgColor: "bg-green-200",
    shortDescription: "Senior Manager at ISSC | CA",
    details: {
      introduction:
        "As a Senior Manager, he oversees data transformation and migration projects, manages the US tax team, and participates in the review process for US tax forms (Form 1040, 1120, 1065, and 1120-S). He also leads, coordinates, and manages Due Diligence projects (for both Buy-side and Sell-side), advisory clients, and audits for private clients in the UK, US, and the Netherlands. With 10 years of experience, he is a results-driven professional skilled in data migration and transformation projects, assurance, US tax, due diligence, transaction advisory, statutory audits, ICFR, and SOX reporting. He is a Chartered Accountant from the Institute of Chartered Accountants of India and holds a Bachelor’s Degree in Commerce from Shri Ram College of Commerce, one of India’s most esteemed colleges. Known for his excellent communication and interpersonal skills, he fosters positive working environments, even under high-pressure and deadline-driven conditions. He is motivated by delivering high-quality work and adding value to his clients and team",
    }
  },
  {
    id: 5,
    name: "Shaurya Rastogi",
    role: "Senior Manager",
    image: Shaurya_Rastogi,
    bgColor: "bg-red-200",
    shortDescription: "Senior Manager at ISSC | CA",
    details: {
      introduction:
        "Shaurya Rastogi is a qualified Chartered Accountant with over 10 years of post-qualification experience across Indian practice and global audit engagements. He brings extensive expertise in Assurance, Audit, ICFR, and SOX Compliance. He has built a strong professional track record through his association with esteemed organizations such as Deloitte Haskins & Sells, EY GDS, and Deloitte USI. Throughout his career, he has worked with diverse clients across various geographies and industries, developing strong proficiency in global audit and reporting frameworks, including IFRS, US GAAP, Ind AS, and other international standards. He combines deep technical knowledge with a strategic, business-focused approach to deliver high-quality financial and operational solutions. His blend of professional expertise, leadership capabilities, and commitment to innovation enables organizations to enhance compliance, strengthen governance, improve operational efficiency, and achieve sustainable business growth."
  }
},
 {
    id: 7,
    name: "Shubham Singhal",
    role: "Senior Manager | CA",
    image: Shubham_Singhal,
    bgColor: "bg-blue-200",
    shortDescription: "Senior Manager at ISSC.",
    details: {
      introduction:
        "A seasoned audit professional with over 8.5 years of experience across Deloitte Haskins & Sells, EY GDS, and Deloitte USI, he brings deep expertise in audit and assurance services for listed and large private enterprises. His core strengths include PCAOB audits, financial reporting under US GAAP, risk assessment, and internal controls. In addition to leading complex engagements and mentoring teams, he has played an active role in driving audit excellence through talent development, recruitment, onboarding, and capability-building initiatives."
    },
  },
  {
    id: 13,
    name: "Aman Kedia",
    role: "Manager",
    image: Aman_kedia,
    bgColor: "bg-purple-200",
    shortDescription: "Manager at ISSC | CA",
    details: {
      introduction:
        "Aman Kedia has over 7 years of experience in audit and assurance across diverse industries, including Manufacturing, Trading, Logistics, Banking, and Educational Institutions. He has led statutory, tax, internal, and concurrent audits, showcasing versatility as both a team leader and an individual contributor. Aman also brings specialized experience in providing analytics and CAATTs support for Financial Services and Wealth Management audits. Well-versed in Ind AS, IFRS, Dutch GAAP, US GAAP, and UK GAAP, Aman is recognized for his strong analytical skills, attention to detail, and commitment to delivering high-quality assurance services. As a Manager, Aman also plays a key role in overseeing data transformation and migration projects and working with the UK audit team, bringing a results-oriented approach and strong technical expertise to every engagement. Aman is a Chartered Accountant certified by the Institute of Chartered Accountants of India and holds a Bachelor's degree in Commerce from Calcutta University."
    },
  },
    {
    id: 12,
    name: "Rishab Bachhawat",
    role: "Manager | CA",
    image: Rishab_Bachhawat,
    bgColor: "bg-red-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Rishab Bachhawat is a qualified Chartered Accountant with over 7.5 years of post-qualification experience across audit, accounting, and taxation. Prior to his current role as Manager in Accounting  & Taxation, Rishab spent 4.5 years with PwC, where he was involved in the end-to-end audit of US-based companies across a wide range of industries. His responsibilities included planning and executing audits, performing risk assessments, reviewing financial statements, and coordinating with client management to ensure timely and high-quality audit delivery. In addition to his audit experience, Rishab has worked in US taxation, preparing and reviewing various federal tax returns, including Forms 1040, 1065, and 1120. He also has experience in accounting, including working with accounting systems to maintain accurate financial records, support month-end close activities, prepare journal entries and account reconciliations, and ensure compliance with organizational policies and accounting standards.",
    },
  },
  {
    id: 9,
    name: "Amit Saini",
    role: "Manager",
    image: Amit_Saini,
    bgColor: "bg-red-200",
    shortDescription: "Manager at ISSC | CA",
    details: {
      introduction:
        "Amit, a manager in the firm's Audit Practice, specialises in External Audit. He brings 9 years of extensive External Audit experience, including 5 years with global firms PwC and EY India. Amit has successfully led audit engagements for clients in diverse industries, including Pharma, Food Chain, and Hospitality. He qualifies as a Chartered Accountant (CA) from the Institute of Chartered Accountants India."
    }
  },
  {
    id: 11,
    name: "Mayank Satija",
    tagLine: "",
    role: "Manager",
    image: Mayank_Image,
    bgColor: "bg-blue-200",
    shortDescription: "Manager at ISSC | MBA",
    details: {
      introduction:
        "",
    },
  },
  {
    id: 10,
    name: "Pulkit Gupta",
    tagLine: "Designing Engaging User Experiences with Code",
    role: "Manager",
    image: Pulkit_Gupta,
    bgColor: "bg-green-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Pulkit Gupta brings 14+ years of experience in financial operations, spanning accounts payable and receivable, order-to-cash, and record-to-report functions. He has led initiatives that cut costs by 3% and built SOPs that lifted operational efficiency across teams. His expertise spans financial compliance, SOX, audit, budgeting, and FP&A, backed by hands-on proficiency in SAP HANA, Oracle, and other ERP platforms. He currently oversees US and UK tax operations for individuals, trusts, and corporates, and has a strong track record in training and developing early-career talent.",
    },
  },
  {
    id: 14,
    name: "Manish Jodhani",
    tagLine: "Designing Engaging User Experiences with Code",
    role: "Manager | CA",
    image: Manish_Jodhani,
    bgColor: "bg-green-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Manish Jodhani is a Manager in the firm’s Audit Practice, specializing in External Audit and Assurance with over 7  years of post qualification professional experience, including more than 5 years of experience with EY and Deloitte USI. He has led and managed audit engagements across diverse geographic locations such as US, Belgium, Netherlands and Hospitality France. In addition to his audit expertise, he has experience in Indian direct and indirect taxation. He has also been part of multiple automation projects in EY. He is known for his commitment, attention to detail, strong technical skills and people management skills",
    },
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center">
        <Heading4 className="text-sm font-bold text-red-800 uppercase tracking-widest">Our Team</Heading4>
        <Heading2 className="text-3xl font-bold text-gray-900 mt-2">Meet Our Team</Heading2>
        <BodyText className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Our team is a blend of innovation, creativity, and expertise, committed to delivering the best solutions for our clients.
        </BodyText>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className={`h-40 ${member.bgColor} flex justify-center items-center`}>
              <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 rounded-full object-contain border-4 border-white shadow-md"
              />
            </div>


            <div className="p-6 text-center">
              <Heading3 className="text-lg font-semibold text-gray-800">{member.name}</Heading3>
              <BodyText className="text-gray-500 text-sm">{member.role}</BodyText>
              <SmallText className="text-gray-600 mt-3 text-sm leading-relaxed">
                {member.shortDescription}
              </SmallText>
              <div className="mt-4 flex justify-between items-center text-gray-500">
                {/* Read More Link on the Right */}
                <Link
                  to={`/team/${member.id}`}
                  className="text-red-500  rounded-lg text-sm  transition hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
