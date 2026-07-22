import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaBriefcase,
  FaGraduationCap,
  FaIndustry,
  FaCalendarAlt,
  FaRegCalendarCheck
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy data matching your API response format
const jobs = [
  {
    applicants_no: 0,
    city: "Gurugram Haryana",
    country: "India",
    department: "Accounting",
    jobPosition: "Executive",
    jobType: "Full Time",
    job_description: "Job Title: Marketing Specialist\nWe are seeking a dynamic and results-driven Marketing Specialist to join our growing team...",
    job_id: "ACC-GEN18122024",
    job_source: ['Naukri', 'Referral', 'Career Portal'],
    job_status: "Active",
    numberOfSeats: 1,
    officeLocation: "Gurgaon Haryana",
    org_id: "123456",
    org_name: "ISSC",
    salaryRangeFrom: 50000,
    salaryRangeUpto: 100000,
    years_of_experience: "2",
    _id: "67626d13aa43be7850360850",
    createdAt: "2024-03-10T00:00:00Z",
    responsibilities: [
      "Lead end-to-end data migration projects",
      "Develop and implement ETL solutions",
      "Ensure data integrity and compliance"
    ],
    requirements: [
      "Bachelor's degree in relevant field",
      "2+ years of experience",
      "Proficiency in relevant tools"
    ],
    employmentBenefits: "Health insurance, Paid time off, Flexible work hours"
  },
  // Add more jobs in the same format as needed
];

const JobDescription = () => {
  const { id } = useParams();
  const location = useLocation();

  // Get job either from location state or by finding in jobs array
  const job = location.state?.position || jobs.find(job => job._id === id || job.job_id === id);

  if (!job) {
    return <p className="text-center text-red-500 text-lg">Job not found</p>;
  }

  // Format salary range
  const formatSalary = () => {
    if (job.salaryRangeFrom && job.salaryRangeUpto) {
      return `${job.salaryRangeFrom.toLocaleString()} ${job.salaryRangeUpto.toLocaleString()}`;
    }
    return "Negotiable";
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatJobDescription = (text) => {
    if (!text) return [];

    // Split on line breaks OR detect section keywords
    const sections = text
      .replace(/([A-Za-z ]+):/g, "\n\n$1:") // force newlines before headers like "Responsibilities:"
      .split(/\n+/) // split on newlines
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return sections;
  };

  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="max-w-6xl w-full p-8">
        <header className="border-b pb-6 mb-6 text-center max-w-6xl mx-auto">
          <div className="flex items-start gap-2 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{job.jobPosition}</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-gray-600 text-sm text-left max-w-6xl mx-auto">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <span className="font-semibold">Location:</span> {job.officeLocation || job.city}
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-red-500 text-lg" />
              <span className="font-semibold">Job Type:</span> {job.jobType}
            </div>
            <div className="flex items-center gap-2">
              <FaDollarSign className="text-red-500 text-lg" />
              <span className="font-semibold">Salary:</span> {formatSalary()}
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-red-500 text-lg" />
              <span className="font-semibold">Experience:</span> {job.years_of_experience} years
            </div>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-red-500 text-lg" />
              <span className="font-semibold">Department:</span> {job.department}
            </div>
            <div className="flex items-center gap-2">
              <FaIndustry className="text-red-500 text-lg" />
              <span className="font-semibold">Organization:</span> {job.org_name}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-red-500 text-lg" />
              <span className="font-semibold">Posted Date:</span> {formatDate(job.createdAt)}
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarCheck className="text-red-500 text-lg" />
              <span className="font-semibold">Status:</span> {job.job_status}
            </div>
            <div className="flex items-start gap-2 mb-4">
              <Link to="/apply-form" state={{ position: job }}>
                <button className="mt-6 bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 text-md font-semibold shadow-md w-[200px]">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Job Description</h2>
          <div className="text-gray-700 text-sm mt-3 space-y-2">
            {formatJobDescription(job?.job_description).map((line, i) => {
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
        </section>

        {job.responsibilities && job.responsibilities.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </section>
        )}

        {job.requirements && job.requirements.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Required Qualifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
        )}

        {job.employmentBenefits && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Employee Benefits</h2>
            <p className="text-gray-700">{job.employmentBenefits}</p>
          </section>
        )}

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700">
            Interested candidates can submit their applications via our official website or send their resume and cover letter to
            <strong> hr@{job.org_name?.toLowerCase() || 'company'}.com</strong>. Ensure to mention the job title in the subject line.
          </p>
        </section>

        <Link to="/apply-form" state={{ position: job }}>
          <button className="mt-6 bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 text-md font-semibold shadow-md w-[200px]">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDescription;