import { useParams } from "react-router-dom";
import { Heading4, Heading2, BodyText } from "../../utils/Typography";
import Mayank_Image from "../../Assets/Images/Mayank.png";
import Pulkit_Gupta from "../../Assets/Images/Pulkit_Gupta.jpg";
import Shubham_Singhal from "../../Assets/Images/Shubham.png";
import Amit_Saini from "../../Assets/Images/AMIT_IMAGE.png";
import Aman_kedia from "../../Assets/Images/AMAN_KEDIA_IMAGE.png"
import Manish_Pulwaria from "../../Assets/Images/MP_IMAGE.jpg";
import Praveen_Miglani from "../../Assets/Images/PM_IMAGE.png";
import teams from '../../Assets/Images/Ankush_Tiwari-removebg-preview.png';
import Vineet_sir from "../../Assets/Images/Vineet_sir.png";
import Maam from "../../Assets/Images/Maam.png";
import Bob_image from "../../Assets/Images/Bob_image.png";
import Sanket_sir from "../../Assets/Images/Sanket_sir.png";
import Shaurya_Rastogi from "../../Assets/Images/Shaurya_Rastogi.png";
import Rishab_Bachhawat from "../../Assets/Images/Rishab_Bachhawat.jpg";
import Manish_Jodhani from "../../Assets/Images/Manish_Jodhani.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Vineet Chaturvedi",
    role: "Founder & CEO |CA",
    image: Vineet_sir,
    bgColor: "bg-blue-200",
    shortDescription: "CEO of ISSC, has 20+ years in global audit",
    details: {
      introduction:
        "Vineet Chaturvedi is the CEO of ISSC and has over 20 years of experience in delivering global audit engagements in various parts of the world for the big 4 accounting firms. He has been instrumental in setting up KPMG’s shared service center in India. Apart from that, he has also helped EY in growing its shared service center at a time when they were finding it difficult to get traction from their onsite teams. Vineet has also got experience of leading many large auditing engagements form many big accounting firms including KPMG in London and Deloitte in South Africa. In his last role with EY Global Delivery services, he led the EY Digital Team helping EY to implement its Data Analytics and Robotics strategy across the firm.",
    },
  },
  {
    id: 2,
    name: "Bob Crouwel",
    role: "Director & Co-Founder | CA",
    image: Bob_image,
    bgColor: "bg-green-200",
    shortDescription: "Bob, a former CA with 35+ years in audit and advisory",
    details: {
      introduction:
        "Bob is an advisor and shareholder of the ISSC. He was a chartered accountant with the Dutch institute NIvRA and has just retired from the post senior advisory partner at KPMG The Netherlands. The last years of his career he spent as advisory COO, based in India for KPMG in the Netherlands. In this capacity he has played an active role in setting up KPMG Netherlands shared service centre in India. Bob brings over 30 years of experience in audit, advisory and has a thorough understanding of business issues and key risks affecting an accounting firm across the globe.  He has in depth experience in dealing as interlink between on-and offshore professionals and change management where it comes to dealing with a new ways of working, like  working with teams in offshore centres.",
    },
  },
  {
    id: 3,
    name: "Shradha Chaturvedi",
    role: "Co-Founder",
    image: Maam,
    bgColor: "bg-green-200",
    shortDescription: "Head of Audit and Chief Of People",
    details: {
      introduction:
        "Shradha Chaturvedi is the head of Audit at ISSC group of companies. She has done her Masters in Risk management policy and law from Erasmus University, Rotterdam. She has over 15 years of experience of working with Big 4 accounting firms in India, UK, South Africa and US in leading Internal Audit and IT audit engagements. Prior to setting up ISSC Consulting, she was heading Non-US Digital Audit Transformation team of 250 people at PwC Service Delivery Centre. She is a service matter expert in the areas of SOX 404, SOC1, SOC2 and IT audit. She has served Indian and global engagements across multiple business processes handling a team of consultants across industries such as life science, auto-manufacturing, telecom, packaging, etc. Her vast experience of offshoring along with working with big accounting firms across the globe will be a great asset in helping our clients set up offshore relationship."
    },
  },
  {
    id: 4,
    name: "Praveen Miglani",
    role: "Director | CA",
    image: Praveen_Miglani,
    bgColor: "bg-purple-200",
    shortDescription: "Director | CA",
    details: {
      introduction:
        "Praveen, a seasoned Director of ISSC, boasts 17+ years of diverse experience in Auditing, Accounting, and Advisory roles. His career spans across Big-4 firms, US-based Investment Management firms, and various Indian companies. Praveen excels in serving both private and public enterprises across sectors. He specializes in deal advisory, technical accounting (US GAAP and IFRS), and GAAP convergence, demonstrating expertise in ASC 606 (Revenue Recognition), ASC 805 (Business Combinations), ASC 350 (Intangibles-Goodwill), and more. As a Chartered Accountant with ICAI, Praveen is committed to delivering impactful solutions to clients. Praveen also leads our System Migration team helping clients migrate from existing Financial and ERP systems to new systems, using our in-house migration technology.",
    },
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
    id: 6,
    name: "Manish Phalwaria",
    role: "Senior Manager | CA",
    image: Manish_Pulwaria,
    bgColor: "bg-red-200",
    shortDescription: "Senior Manager at ISSC | Chartered Accountant | SRCC’14",
    details: {
      introduction:
        "As a Senior Manager, Manish plays a key role in overseeing data transformation and migration projects, managing the US tax team, and contributing to the review of US tax filings. He leads and coordinates due diligence engagements on both the buy-side and sell-side, and provides advisory and audit services to private clients across the UK and US. With over 10 years of experience, Manish brings a results-driven approach and deep technical expertise across data migration, assurance, US taxation, transaction advisory, statutory audits, ICFR, and SOX reporting. He is a Chartered Accountant, certified by the Institute of Chartered Accountants of India, and holds a Bachelor’s degree in Commerce from Shri Ram College of Commerce, one of India’s most prestigious institutions. Recognised for his dynamic skill set and commitment to innovation, he actively champions automation initiatives and accounting technology solutions across projects.",
    },
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
    id: 8,
    name: "Ankush Tiwari",
    role: "Senior Manager | CA",
    image: teams,
    bgColor: "bg-purple-200",
    shortDescription: "Senior Manager at ISSC",
    details: {
      introduction:
        "Ankush Tiwari, Senior Manager at ISSC’s Audit Practice, brings over 7 years of diverse audit experience with private companies across multiple sectors. Having been with ISSC for the past 7 years, he is recognized for his meticulous attention to detail, strong analytical skills, and ability to navigate complex regulatory landscapes. Ankush has successfully led numerous audit projects, ensuring clients maintain the highest standards of financial accountability. His expertise spans Dutch GAAP, UK GAAP, and compliance with IFRS standards. In addition to his audit specialization, Ankush has gained exposure to accounting and tax practices, further strengthening his ability to provide holistic financial insights. A qualified Chartered Accountant from the Institute of Chartered Accountants of India, Ankush combines technical expertise with practical business knowledge, positioning himself as a versatile leader in the audit and finance domain.",
    }
  },
  {
    id: 9,
    name: "Amit Saini",
    role: "Manager | CA",
    image: Amit_Saini,
    bgColor: "bg-purple-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Amit Saini is a Manager in the firm’s Audit Practice, specializing in External Audit and Assurance. With over 10 years of professional experience, including 5 years with PwC and EY India, he has led and managed audit engagements across diverse industries such as Pharmaceuticals, Food & Beverage, and Hospitality. In addition to his audit expertise, Amit has experience in U.S. Taxation, including the preparation and filing of Forms 1120, 1120S, 1065, and 1040. He is a Chartered Accountant (CA) and a member of the Institute of Chartered Accountants of India (ICAI), known for his strong technical knowledge, attention to detail, and commitment to delivering high-quality client service."
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
    id: 11,
    name: "Mayank Satija",
    tagLine: "Securing Digital Frontiers in a Cyber World",
    role: "Manager",
    image: Mayank_Image,
    bgColor: "bg-red-200",
    shortDescription: "Manager at ISSC | MBA",
    details: {
      introduction:
        "Mayank Satija is a Manager at ISSC with over 5+ years of experience in Mergers & Acquisitions, Deal Advisory, and Financial Accounting. He brings a strong track record of delivering high-impact financial solutions for global clients, having worked on complex engagements across buy-side and sell-side due diligence, GAAP conversions, and accounting standard implementations. His expertise spans IFRS and US GAAP, including standards such as IFRS 15, IFRS 16, and ASC 842. Mayank has led several accounting and advisory projects, assisting large multinational clients in transitioning from Indian GAAP to IFRS/Ind AS and US GAAP. He has also contributed to financial process improvements through balance sheet reconciliations, inter-company reconciliations, and month-end closures.",
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
    id: 13,
    name: "Aman Kedia",
    role: "Manager | CA",
    image: Aman_kedia,
    bgColor: "bg-red-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Aman Kedia has over 7 years of experience in audit and assurance across diverse industries, including Manufacturing, Trading, Logistics, Banking, and Educational Institutions. He has led statutory, tax, internal, and concurrent audits, showcasing versatility as both a team leader and an individual contributor. Aman also brings specialized experience in providing analytics and CAATTs support for Financial Services and Wealth Management audits. Well-versed in Ind AS, IFRS, Dutch GAAP, US GAAP, and UK GAAP, Aman is recognized for his strong analytical skills, attention to detail, and commitment to delivering high-quality assurance services. As a Manager, Aman also plays a key role in overseeing data transformation and migration projects and working with the UK audit team, bringing a results-oriented approach and strong technical expertise to every engagement. Aman is a Chartered Accountant certified by the Institute of Chartered Accountants of India and holds a Bachelor's degree in Commerce from Calcutta University."
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

const TeamDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member)
    return <div className="text-center py-10 text-red-600 font-bold text-lg">Team member not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 py-12 mt-10 ">
      <div className="text-center">
        <img src={member.image} alt={member.name} className="h-32 w-32 rounded-full object-contain border-4 border-grey shadow-md mx-auto" />
        <Heading2 className="text-2xl font-bold mt-4">{member.name}</Heading2>
        <Heading4 className="text-gray-600 mt-2">{member.role}</Heading4>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <BodyText className="text-gray-600">{member.details.introduction}</BodyText>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
