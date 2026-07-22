import { useParams } from "react-router-dom";
import { Heading4, Heading2, BodyText } from "../../utils/Typography";
import Mayank_Image from "../../Assets/Images/Mayank.png";
import Vasu_Narula from "../../Assets/Images/Vasu_Narula.png";
import Vishal_baid from "../../Assets/Images/Vishal_baid.png";
import Amit_Saini from "../../Assets/Images/AMIT_IMAGE.png";
import Aman_kedia from "../../Assets/Images/AMAN_KEDIA_IMAGE.png"
import Manish_Pulwaria from "../../Assets/Images/MP_IMAGE.png";
import Praveen_Miglani from "../../Assets/Images/PM_IMAGE.png";
import teams from '../../Assets/Images/Ankush_Tiwari-removebg-preview.png';
import Vineet_sir from "../../Assets/Images/Vineet_sir.png";
import Maam from "../../Assets/Images/Maam.png";
import Bob_image from "../../Assets/Images/Bob_image.png";
import Sanket_sir from "../../Assets/Images/Sanket_sir.png";
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
    name: "Sanket Agrawal",
    role: "Senior Manager | ACCA",
    image: Sanket_sir,
    bgColor: "bg-red-200",
    shortDescription: "Senior Manager at ISSC | ACCA",
    details: {
      introduction:
        "Sanket is a seasoned multi-domain finance professional with over 14 years of experience in Accounting, Reporting, US taxation, Controllership and professional services assurance roles. In his career Sanket has worked across various assurance and consultancy engagements at large professional services firms and has significant exposure to global accounting standards (IFRS, UK GAAP, US GAAP, AAS and IAS). Sanket has worked in various geographies such as Australia, India, France and Germany and has a passion for process improvement through driving technology driven change supported by his acumen in effectively managing large diverse teams. Sanket is a qualified chartered accountant (ACCA, UK) and has specialization in Financial reporting, Assurance and Performance Management.",
    },
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
    name: "Vishal Baid",
    role: "Senior Manager | CA",
    image: Vishal_baid,
    bgColor: "bg-blue-200",
    shortDescription: "Senior Manager at ISSC.",
    details: {
      introduction:
        "Vishal, a Senior Manager at ISSC, possesses more than a decade of extensive auditing and accounting experience spanning diverse industries. He brings a strong professional history, having collaborated with esteemed firms such as KPMG and EY. He holds a prestigious CA qualification from the Institute of Chartered Accountants of India (ICAI). Vishal has extensive knowledge of working on IFRS, US GAAP and Ind AS. His wealth of knowledge and substantial experience positions him as a valuable asset to the team."
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
        "Ankush, Senior-manager at ISSC's Audit Practice, has 7+ years of diverse audit experience with private companies across sectors. He has been with ISSC for last 6 years, known for his meticulous attention to detail, strong analytical skills, and adeptness in navigating complex regulatory landscapes. Ankush has successfully led numerous audit projects, ensuring clients maintain the highest financial accountability standards. His expertise covers Dutch GAAP, UK GAAP and compliance with IFRS standards. Ankush is a qualified CA from the Institute of Chartered Accountants of India.",
    },
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
        "Amit, a manager in the firm's Audit Practice, specialises in External Audit. He brings 9 years of extensive External Audit experience, including 5 years with global firms PwC and EY India. Amit has successfully led audit engagements for clients in diverse industries, including Pharma, Food Chain, and Hospitality. He qualifies as a Chartered Accountant (CA) from the Institute of Chartered Accountants India."
    },
  },
  {
    id: 10,
    name: "Vasu Narula",
    tagLine: "Designing Engaging User Experiences with Code",
    role: "Manager",
    image: Vasu_Narula,
    bgColor: "bg-green-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Vasu Narula is a Manager at ISSC with extensive experience in financial reporting, taxation, and compliance. He has successfully delivered high-quality financial solutions for global clients, managing complex engagements across statutory audits, reconciliations, internal controls, and regulatory compliance. His expertise includes accounting process optimization, software migration reconciliations, and implementing ASC 842 lease accounting standards for multinational businesses. Vasu has also worked extensively on US and UK tax compliance, including corporate tax provisions, UK tax return preparation, and ensuring adherence to international reporting standards. He has led projects involving multi-entity consolidations, preparation of financial statements, and compliance with local statutory requirements. With a strong focus on accuracy and efficiency, Vasu consistently drives operational improvements through detailed financial analysis and robust control frameworks.",
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
    name: "Deepak Sharma",
    role: "Manager | CA",
    image: Amit_Saini,
    bgColor: "bg-red-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Deepak, Manager at ISSC-Audit and Assurance Practice, is a versatile Audit Professional with over a decade of experience across an entire spectrum of industries like manufacturing, services, shipping, and offshoring environments. Deepak excels in areas like internal financial control, risk control matrix, and control testing. He is proficient in service delivery tools like IDEA, courseware, and various client-specific collaboration tools. He is a qualified CA with the Institute of Chartered Accountants of India.",
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
        "Aman Kedia, Manager at ISSC’s Audit Practice, is an audit professional with 5+ years of experience across industries such as Manufacturing, Trading, Logistics, Banking, and Educational Institutions. He has managed statutory, tax, internal, and concurrent audits, demonstrating versatility in both team leadership and individual roles. He also brings experience in providing analytics and CAATTS support to Financial service and wealth management audits. With knowledge of Ind AS, IFRS, Dutch GAAP and US GAAP, he is known for his analytical skills, attention to detail, and commitment to delivering high-quality assurance services. Aman also oversees data transformation and migration projects, bringing a results oriented approach and strong technical knowledge in data migration. He is a Chartered Accountant, certified by the Institute of Chartered Accountants of India, and holds a Bachelor’s degree in Commerce from Calcutta University."
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
