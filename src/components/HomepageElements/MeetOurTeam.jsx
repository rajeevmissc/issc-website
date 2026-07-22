import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import teams from '../../Assets/Images/Ankush_Tiwari-removebg-preview.png';
import { Link } from "react-router-dom";
import { Heading3, Heading4, Heading2, BodyText, SmallText } from "../../utils/Typography";
import Mayank_Image from "../../Assets/Images/Mayank.png";
import Vasu_Narula from "../../Assets/Images/Vasu_Narula.png";
import Vishal_baid from "../../Assets/Images/Vishal_baid.png";
import Amit_Saini from "../../Assets/Images/AMIT_IMAGE.png";
import Aman_kedia from "../../Assets/Images/AMAN_KEDIA_IMAGE.png"
import Manish_Pulwaria from "../../Assets/Images/MP_IMAGE.png";
import Praveen_Miglani from "../../Assets/Images/PM_IMAGE.png";
import Vineet_sir from "../../Assets/Images/Vineet_sir.png";
import Maam from "../../Assets/Images/Maam.png";
import Bob_image from "../../Assets/Images/Bob_image.png";
import Sanket_sir from "../../Assets/Images/Sanket_sir.png";
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
        "Ankush, manager at ISSC's Audit Practice, has 5+ years of diverse audit experience with private companies across sectors. He has been with ISSC for 4 years, known for his meticulous attention to detail, strong analytical skills, and adeptness in navigating complex regulatory landscapes. Ankush has successfully led numerous audit projects, ensuring clients maintain the highest financial accountability standards. His expertise covers Dutch GAAP and IFRS auditing. Ankush is a qualified CA from the Institute of Chartered Accountants of India",
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
    name: "Sanket Agrawal",
    role: "Senior Manager",
    image: Sanket_sir,
    bgColor: "bg-red-200",
    shortDescription: "Senior Manager at ISSC | ACCA",
    details: {
      introduction:
        "Sanket is a seasoned multi-domain finance professional with over 14 years of experience in Accounting, Reporting, US taxation, Controllership and professional services assurance roles. In his career Sanket has worked across various assurance and consultancy engagements at large professional services firms and has significant exposure to global accounting standards (IFRS, UK GAAP, US GAAP, AAS and IAS). Sanket has worked in various geographies such as Australia, India, France and Germany and has a passion for process improvement through driving technology driven change supported by his acumen in effectively managing large diverse teams. Sanket is a qualified chartered accountant (ACCA, UK) and has specialization in Financial reporting, Assurance and Performance Management.",
    },
  },
  {
    id: 7,
    name: "Vishal Baid",
    role: "Senior Manager",
    image: Vishal_baid,
    bgColor: "bg-blue-200",
    shortDescription: "Senior Manager at ISSC | CA",
    details: {
      introduction:
        "Vishal, a Senior Manager at ISSC, possesses approximately a decade of extensive auditing experience spanning diverse industries. He brings a strong professional history, having collaborated with esteemed firms such as KPMG and EY. He holds a prestigious CA qualification from the Institute of Chartered Accountants of India (ICAI). Vishal has extensive knowledge of working on IFRS, US GAAP and Ind AS. His wealth of knowledge and substantial experience positions him as a valuable asset to the team.",
    }
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
        "Aman Kedia, Manager at ISSC-Audit, Audit Professional with over 9 years of experience across a spectrum of industries consisting of Manufacturing, Logistics, Banking sector. Proficiency in handling audit assignments in accordance with prepared plans and programs as an individual, team member and team leader Work Experience Performed statutory audit of companies operating in Manufacturing, Logistics, Educational Trusts having turnover in excess of USD 92 Million Key team member in engagements of Statutory Audit (key areas being Revenue, Inventory, Fixed Assets, cash and receivables), WBVAT Audit and Tax Audit. Independently conducted Concurrent Audit, Statutory Audit, Internal Audit especially in Banking Sector key area being Advances, Deposit, Forex, Credit Facility, KYC Norms. Provided analytics and CAATTS Support to Capital Markets and Wealth Management Audits Independently conducted Statutory Audit of State Bank of India (different branches) Experience of auditing finance and corporate business processes i.e., general ledger, tax, treasury, payroll and Compliance Knowledge of Ind AS, IFRS and US GAAP ",
    }
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
    name: "Vasu Narula",
    tagLine: "",
    role: "Manager",
    image: Vasu_Narula,
    bgColor: "bg-green-200",
    shortDescription: "Manager at ISSC",
    details: {
      introduction:
        "Vasu Narula, Manager at ISSC with a strong background in auditing, financial reporting, Taxation and compliance. Over the years, Vasu has delivered high-quality financial solutions for global clients, working on complex engagements involving statutory audits, internal controls, reconciliations, and regulatory compliance. He has played a key role in process optimization, software migration reconciliations, and implementing ASC 842 lease accounting standards for multinational clients.Previously, Vasu worked with leading audit and consulting firms, including Chaturvedi & Co., S.N. Dhawan & Co. (Mazars), and Canon India, gaining hands-on experience in internal audits, SOX compliance, and risk control frameworks. His diverse portfolio includes managing multi-entity consolidated financial statements, ensuring adherence to CARO and Companies Act requirements, and driving operational efficiency through detailed financial analysis.",
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
