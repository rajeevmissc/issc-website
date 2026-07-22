import React, { useEffect, useState } from "react";
import { FaClock, FaCheckCircle, FaTimesCircle, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const jobs = [
        {
            "_id": "68871844c11078c584ad0ca9",
            "jobPosition": "Data Engineer",
            "officeLocation": "Gurugram Haryana",
            "department": "IT Advisory",
            "jobType": "Full Time",
            "numberOfSeats": 1,
            "salaryRangeFrom": "Best",
            "salaryRangeUpto": "in Market",
            "job_description": "Job Title: Data EngineerWebsite: https://www.issc.co.inLocation: Udyog Vihar, Phase-V, GurugramJob type: Full-TimeEmployment Type: 5 Days Working( No Hybrid/Work from Home)Compensation: As per Industry StandardsAddress: Udyog Vihar, Phase – V, GurgaonCompany Overview:With the world constantly and rapidly changing, the future will be full of realigned priorities. You are keen to strengthen your firms profitability and reputation by retaining existing clients and winning more in the market.We at ISSC have the right resources to ensure your team has access to right skills to deliver effective assurance and IT Advisory whilst you build and scale your team onshore to meet the client’s broader assurance needs.By offshoring part of the routine and less complex auditing work to ISSC, you will free up capacity in your own organization which can be utilized in areas which requires more face time with your clients including your quest to win new clients. Having the right team on your side at ISSC will be vital as you follow your exciting growth plans and it is in this role your ISSC team stands apart. We offer a compelling case in becoming your key partner for the future.Position Summary:We are seeking a skilled and detail-oriented Data Engineer to join our team. As a Data Engineer, you will be responsible for developing and optimizing data pipelines, managing data architecture, and ensuring the data is easily accessible, reliable, and secure. You will work closely with data scientists, analysts, and other stakeholders to gather requirements and deliver data solutions that support business intelligence and analytics initiatives. The ideal candidate should possess strong data manipulation skills, a keen eye for detail, and the ability to work with diverse datasets. This role plays a crucial part in ensuring the quality and integrity of our data, enabling informed decision-making across the organization.Responsibilities:Data Pipeline Development:Design, develop, and maintain scalable data pipelines to process, transform, and move large datasets across multiple platforms.Ensure data integrity, reliability, and quality across all pipelines.Data Architecture and Infrastructure:Architect and manage the data infrastructure, including databases, warehouses, and data lakes.Implement solutions to optimize storage and retrieval of both structured and unstructured data.Data Integration and Management:Integrate data from various sources (e.g., APIs, databases, third-party providers) into a unified system.Manage ETL (Extract, Transform, Load) processes to clean, enrich, and make data ready for analysis.Data Security and Compliance:Ensure data governance, privacy, and compliance with security standards (e.g., GDPR, HIPAA).Implement robust access controls and encryption protocols.Collaboration:Work closely with data scientists, analysts, and business stakeholders to gather requirements and deliver high-performance data solutions.Collaborate with DevOps and software engineering teams to deploy and maintain the data infrastructure in a cloud or on-premises environment.Performance Tuning:Monitor and improve the performance of databases and data pipelines to ensure low-latency data availability.Troubleshoot and resolve issues in the data infrastructure.Documentation and Best Practices:Maintain detailed documentation of data pipelines, architecture, and processes.Follow industry best practices for data engineering, including version control and continuous integration.Skills/ Requirements:Technical Skills:Proficiency in programming languages such as Python, or SQL.Good experience with big data technologies like Apache Spark, Hadoop, Kafka, Flink, etc.Experience with cloud data platforms (AWS, Azure).Familiarity with databases (SQL and NoSQL), data warehousing solutions (e.g., Snowflake, Redshift), and ETL tools (e.g., Airflow, Talend).Data Modeling and Database Design:Expertise in designing data models and relational database schemas.Problem-Solving:Strong analytical and problem-solving skills, with the ability to handle complex data issues.Version Control and Automation:Experience with CI/CD pipelines and version control tools like Git.Professional Qualifications:• 5 - 6 years of relevant experience.• BTech, Statistics, Information Technology, or a related field.Other Benefits:• Free Meal• 1 Happy Hour Every week• 3 Offsite in a year• 1 Spa every week",
            "city": "Gurugram Haryana",
            "country": "India",
            "org_name": "ISSC",
            "job_id": "IT-DAT-28072025",
            "job_source": [
                "Referral",
                "LinkedIn"
            ],
            "years_of_experience": "5-6",
            "org_id": "123456",
            "applicants_no": 0,
            "job_status": "Active",
            "report_status": {
                "applied": 0,
                "hired": 0,
                "rejected": 0,
                "withdrawn": 0,
                "_id": "68871844c11078c584ad0ca6"
            },
            "report_experience": {
                "nill": 0,
                "oneyear": 0,
                "two_to_three": 0,
                "four_to_five": 0,
                "five_plus": 0,
                "_id": "68871844c11078c584ad0ca7"
            },
            "report_educational_level": [],
            "report_city": [],
            "report_university": [],
            "report_male_vs_female": {
                "male": 0,
                "female": 0,
                "other": 0,
                "_id": "68871844c11078c584ad0ca8"
            },
            "status": "approved",
            "approvalToken": "de8b10fb-f5f1-44cf-877b-c85f4c48557c",
            "approvedAt": "2025-07-28T10:57:15.246Z",
            "createdAt": "2025-07-28T06:27:16.223Z",
            "__v": 0
        },
        {
  "_id": "68871844c11078c584ad0cb0",
  "jobPosition": "Audit Seniors / Tax Seniors",
  "officeLocation": "Udyog Vihar, Phase-V, Gurugram",
  "department": "Audit & Tax Advisory",
  "jobType": "Full Time",
  "numberOfSeats": "Multiple",
  "salaryRangeFrom": "Best",
  "salaryRangeUpto": "in Industry",
  "job_description": "Job Title: Audit Seniors / Tax Seniors\nWebsite: https://www.issc.co.in\nLocation: Udyog Vihar, Phase-V, Gurugram\nWork Mode: On-site (No Hybrid/WFH)\nWorking Days: Monday to Friday\nEmployment Type: Full-Time\nAvailability: Immediate or within 30 days\nCompensation: Best in Industry\nEducation: Graduate in Commerce/Finance/CA/CPA/ACCA\n\nCompany Overview:\nWith the world constantly and rapidly changing, the future will be full of realigned priorities. At ISSC, we ensure that your team has access to the right skills to deliver effective assurance, tax, and advisory services whilst you focus on client relationships and growth. By partnering with ISSC, you gain access to offshore resources to enhance efficiency, profitability, and scale.\n\nPosition Summary:\nWe are looking for dynamic and detail-oriented Audit Seniors and Tax Seniors to join our expanding team. This is an exciting opportunity for individuals who have previously worked with consulting firms and are looking to grow in a fast-paced, high-growth organization. In this role, you will be responsible for conducting audits, preparing tax returns, working with on-shore teams, and ensuring compliance and process improvements across business functions. This role offers significant international exposure, with opportunities to collaborate with global teams.\n\nKey Responsibilities – Audit Seniors:\n• Conduct audits across financial, operational, and compliance areas.\n• Partner with on-shore teams to ensure global standards and best practices.\n• Identify areas for process improvement and support implementation.\n• Assist in risk assessments and development of internal controls.\n• Prepare and present audit findings with actionable insights.\n• Preparing audit documentation and reports under the supervision of senior team members.\n• Maintain accurate documentation and audit records in compliance with company policies.\n• Coordinate with cross-functional teams and global stakeholders.\n\nKey Responsibilities – Tax Seniors:\n• Prepare and review tax returns for individuals and corporations.\n• Ensure compliance with local and international tax regulations.\n• Support in tax planning, risk assessment, and advisory services.\n• Partner with global tax teams to align with international best practices.\n• Maintain and update tax-related documentation and processes.",
  "city": "Gurugram Haryana",
  "country": "India",
  "org_name": "ISSC",
  "job_id": "AUD-TAX-28072025",
  "job_source": [
    "Referral",
    "LinkedIn"
  ],
  "years_of_experience": "3-6",
  "org_id": "123456",
  "applicants_no": 0,
  "job_status": "Active",
  "report_status": {
    "applied": 0,
    "hired": 0,
    "rejected": 0,
    "withdrawn": 0,
    "_id": "68871844c11078c584ad0cb1"
  },
  "report_experience": {
    "nill": 0,
    "oneyear": 0,
    "two_to_three": 0,
    "four_to_five": 0,
    "five_plus": 0,
    "_id": "68871844c11078c584ad0cb2"
  },
  "report_educational_level": [],
  "report_city": [],
  "report_university": [],
  "report_male_vs_female": {
    "male": 0,
    "female": 0,
    "other": 0,
    "_id": "68871844c11078c584ad0cb3"
  },
  "status": "approved",
  "approvalToken": "a45b71fc-cd33-4c42-9f59-3a1d7a8c7720",
  "approvedAt": "2025-07-28T12:05:15.246Z",
  "createdAt": "2025-07-28T12:05:15.246Z",
  "__v": 0
}

    ]



const OpenPositions = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(jobs);
  const [loading, setLoading] = useState(true);

  const handleJobClick = (position) => {
    navigate(`/job-description`, { state: { position } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          url: "http://192.168.88.13:8080/job/get-jobs",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          data: { id: localStorage.getItem("organization_id") || "123456" },
        };

        const response = await axios(options);
        setData(response.data.jobs || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
const formatJobDescription = (text) => {
  if (!text) return [];

  // Limit text to 200 words
  const words = text.split(/\s+/);
  const limitedText = words.slice(0, 100).join(" ") + (words.length > 100 ? "..." : "");

  // Split on line breaks OR detect section keywords
  const sections = limitedText
    .replace(/([A-Za-z ]+):/g, "\n\n$1:") // force newlines before headers like "Responsibilities:"
    .split(/\n+/) // split on newlines
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return sections;
};


  return (
    <div className="max-w-6xl mx-auto p-8 py-12">
      <h2 className="text-4xl font-bold mb-3 text-gray-900">Career Opportunities at Our Company</h2>
      <p className="text-gray-600 text-md mb-8">
        Join our team and contribute to cutting-edge solutions in various departments.
      </p>

      {loading ? (
        <p className="text-gray-600">Loading jobs...</p>
      ) : data.length === 0 ? (
        <p className="text-gray-600">No open positions available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((position, index) => (
            <div
              key={position._id || index}
              onClick={() => handleJobClick(position)}
              className={`flex flex-col p-6 rounded-lg shadow-lg border transition-all cursor-pointer 
                ${position.job_status === "Active" ? "bg-gray-50 border-gray-300" : "bg-gray-50 border-gray-300"} 
                hover:bg-blue-100 hover:border-blue-400 hover:shadow-2xl`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                <FaBriefcase className="inline-block mr-2" /> {position.jobPosition}
              </h3>
              <div className="text-gray-700 text-sm mt-3 space-y-2">
                {formatJobDescription(position?.job_description).map((line, i) => {
                  if (line.startsWith("•") || line.startsWith("-")) {
                    // Render as bullet point
                    return (
                      <li key={i} className="ml-6 list-disc">
                        {line.replace(/^•|-/, "").trim()}
                      </li>
                    );
                  }

                  // Render section headers in bold
                  if (line.endsWith(":")) {
                    return (
                      <p key={i} className="font-semibold mt-4">
                        {line}
                      </p>
                    );
                  }

                  // Render normal paragraph
                  return <p key={i}>{line}</p>;
                })}
              </div>

              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {position.officeLocation || position.city || "Location not specified"}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock /> {formatDate(position.createdAt)}
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {position.jobType} • {position.department}
                </span>
                <span
                  className={`flex items-center justify-end gap-2 font-medium text-sm ${position.job_status === "Active" ? "text-green-600" : "text-red-500"
                    }`}
                >
                  {position.job_status === "Active" ? <FaCheckCircle /> : <FaTimesCircle />}
                  {position.job_status === "Active" ? "Open" : "Closed"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
