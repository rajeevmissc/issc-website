import blog_image from "../../Assets/Images/happy-boss.webp";
import { useParams } from "react-router-dom";



const insights = [
  {
    "id": 1,
    "heroImage": "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "autherImage": "",
    "title": "Audit Strategy and Support - UK Professional Audit Firm",
    "description": "The professional audit firm was already availing outsourcing services from another service provider , however the firm was facing below mentioned issues with the existing partner",
    "clientBackground": {
      "title": "Client Background",
      "description": "The audit firm was facing multiple challenges with its outsourcing partner, affecting audit quality and coordination. ISSC was engaged to provide support and add value to their audit processes.",
      "icon": "",
      "challenges": [
        { "title": "Audit Quality Issues", "icon": "", "details": "Existing partner did not meet expected audit standards." },
        { "title": "Incomplete Workpapers", "icon": "", "details": "Lack of proper documentation and sufficient information." },
        { "title": "Poor Communication", "icon": "", "details": "Ineffective coordination with the audit team and clients." },
        { "title": "Lack of Ownership", "icon": "", "details": "Failure to take responsibility for client engagements." }
      ]
    },
    "scopeOfWork": {
      "title": "Scope of Work",
      "description": "ISSC worked alongside the existing provider and quickly gained an upper hand by delivering high-quality audit support and strategic insights.",
      "icon": "",
      "tasks": [
        { "title": "Audit Strategy Development", "icon": "", "details": "Framing an effective audit strategy for improved quality." },
        { "title": " Audit Quality & Documentation", "icon": "", "details": "Enhancing audit documentation and ensuring compliance." },
        { "title": " Proactive Solutions & Evaluations", "icon": "", "details": "Analyzing results and suggesting forward-thinking solutions." },
        { "title": " Innovative Audit Techniques", "icon": "", "details": "Introducing modern methods to improve traditional audit approaches." },
        { "title": " Client Liaison & Coordination", "icon": "", "details": "Strengthening client engagement and communication." },
        { "title": " Timely Audit Updates", "icon": "", "details": "Providing real-time updates on progress and key issues." }
      ]
    },
    "valueAdded": {
      "title": "Value Added Insights",
      "description": "ISSC provided exceptional audit support, improving processes and building strong collaborations.",
      "icon": "",
      "benefits": [
        { "title": " Quick Task Turnaround", "icon": "", "details": "Ensuring rapid completion of assigned audit tasks." },
        { "title": " Ownership & Accountability", "icon": "", "details": "Taking full responsibility for assigned audit areas." },
        { "title": " Effective Communication", "icon": "", "details": "Keeping onshore teams consistently updated on audit progress." },
        { "title": " Seamless Remote Reviews", "icon": "", "details": "Providing exemplary documentation for smooth remote reviews." },
        { "title": " Technical Expertise", "icon": "", "details": "Delivering expertise in handling key complex audit areas." }
      ]
    }
  },
  {
    "id": 2,
    "autherImage": "",
    "heroImage": "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Financial due diligence for a buy-side transaction",
    "description": "Our client sought expertise in buy-side financial due diligence to advise a private equity firm, reviewing the target company's financials, earnings quality, accounting policies, EBITDA adjustments, assets, liabilities, and working capital.",
    "clientBackground": {
      "title": "Client Background",
      "description": "Our ongoing client explored opportunities in buy-side financial due diligence. A private equity firm approached them to act as an advisor to review the target company's financial information and deliver a report on earnings quality, accounting policies, management adjustments, assets, liabilities, and working capital.",
      "icon": "",
      "challenges": [
        { "title": "EBITDA Adjustments", "icon": "", "details": "Identify additional EBITDA adjustments beyond those recognized by management." },
        { "title": "Swift Turnaround", "icon": "", "details": "Deliver the Quality of Earnings (QoE) report within tight timelines." },
        { "title": "Finance Transition Planning", "icon": "", "details": "Assess finance organization needs and build a transition plan." },
        { "title": "Post-Close Activities", "icon": "", "details": "Complete audit and working capital adjustments post-acquisition." }
      ]
    },
    "scopeOfWork": {
      "title": "Scope of Work",
      "description": "Comprehensive financial due diligence services, including direct liaison with the target company for financial assessment and reporting.",
      "icon": "",
      "tasks": [
        { "title": " Financial Statement Analysis", "icon": "", "details": "Trend analysis, review of accounting policies, and management adjustments to EBITDA." },
        { "title": " EBITDA Adjustments", "icon": "", "details": "Identification of additional EBITDA adjustments." },
        { "title": " Quality of Earnings Report", "icon": "", "details": "Delivery of a comprehensive Quality of Earnings report." },
        { "title": " Finance Transition Planning", "icon": "", "details": "Assessment of finance functions and development of a transition plan." },
        { "title": " Working Capital Negotiation", "icon": "", "details": "Execution of working capital adjustments and negotiation." },
        { "title": " Opening Balance Sheet & Audit", "icon": "", "details": "Completion of opening balance sheet and stub period audit." }
      ]
    },
    "valueAdded": {
      "title": "Value Added Insights",
      "description": "Strategic insights and top-quality financial due diligence to enhance decision-making.",
      "icon": "",
      "benefits": [
        { "title": " Quick Task Turnaround", "icon": "", "details": "Rapid completion of financial due diligence tasks." },
        { "title": " Independent Financial Verification", "icon": "", "details": "Confirmation of financial statements provided by the target." },
        { "title": " High-Quality Report Writing", "icon": "", "details": "Delivering well-structured and insightful due diligence reports." },
        { "title": " Consistent Due Diligence", "icon": "", "details": "Ensuring reliability and consistency in financial assessments." },
        { "title": " Negotiation Support", "icon": "", "details": "Facilitating negotiations on working capital targets and post-close adjustments." }
      ]
    }
  },
  {
    "id": 3,
    "autherImage": "",
    "heroImage": "https://images.pexels.com/photos/1485653/pexels-photo-1485653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Banking client looking for a step change in new technology capability and capacity.",
    "description":  "A banking client seeks a major upgrade in technology capability and capacity, aiming for enhanced efficiency, scalability, and innovation to stay competitive in the evolving financial landscape",
    "clientBackground": {
      "title": "Client Background",
      "description": "Banking client looking for a step change in new technology capability and capacity.",
      "icon": "",
      "challenges": [
        {
          "title": "IT Cost Performance",
          "description": "The Bank had undertaken a 2-year IT simplification program, achieving top-quartile IT cost performance.",
          "icon": ""
        },
        {
          "title": "Increasing Demand & Regulations",
          "description": "Significant headwinds from demand for new technology (esp. in data & analytics) and regulatory requirements.",
          "icon": ""
        },
        {
          "title": "Budget Constraints",
          "description": "Challenge to deliver more within the same IT budget while leveraging public cloud technologies.",
          "icon": ""
        }
      ]
    },
    "scopeOfWork": {
      "title": "Scope Of Work",
      "description": "Designed and executed a strategic cloud partnership and revamped the internal operating model.",
      "icon": "",
      "tasks": [
        {
          "title": "Cloud Vendor Strategy",
          "description": "Evaluated Google Cloud for data & analytics, AWS for retail bank digital, and Google for client journeys.",
          "icon": ""
        },
        {
          "title": "Public Cloud Adoption",
          "description": "Engaged stakeholders to identify key business-value use cases, set up guardrails, and facilitated adoption.",
          "icon": ""
        },
        {
          "title": "Target & Transition Model",
          "description": "Redesigned the operating model to build, design, and consume automated solutions.",
          "icon": ""
        },
        {
          "title": "Enterprise-Wide Control Principles",
          "description": "Implemented control principles and revamped governance processes.",
          "icon": ""
        },
        {
          "title": "Cloud Architecture & Security",
          "description": "Provided standardized cloud data, architecture, and cybersecurity design patterns.",
          "icon": ""
        }
      ]
    },
    "valueAdded": {
      "title": "Value Added",
      "description": "Delivering significant benefits in cloud strategy, efficiency, and cost savings.",
      "icon": "",
      "benefits": [
        {
          "title": "Enhanced Tech Stack",
          "description": "Freed up IT teams to focus on higher-value business functionality.",
          "icon": ""
        },
        {
          "title": "$3M Annual Savings",
          "description": "Reduction in service sustainability costs for existing platforms.",
          "icon": ""
        },
        {
          "title": "$5M Cost Avoidance",
          "description": "Avoided costs related to growing data & analytics infrastructure.",
          "icon": ""
        },
        {
          "title": "AI & ML for Security",
          "description": "Improved ability to detect and act on suspicious activity patterns faster.",
          "icon": ""
        },
        {
          "title": "Efficiency Gains",
          "description": "Reduced effort required to identify and address security issues.",
          "icon": ""
        }
      ]
    }
  },
  {
    "id": 4,
    "autherImage": "",
    "heroImage": "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "autherImage": "",
    "title": "Manage security consistently across cloud environments",
    "description": "Insurance firms struggled to consistently apply security best practices to its application portfolio across cloud providers, resulting in management inefficiencies and unnecessary rework. Clients' disorganized cloud governance model led to a growing number of security concerns",
    "clientBackground": {
      "title": "Client Background",
      "description": "Insurance firms struggled to consistently apply security best practices across cloud providers, leading to inefficiencies and security concerns.",
      "icon": "",
      "challenges": [
        {
          "title": "Regulatory Management",
          "description": "Inability to manage overwhelming number of global regulations.",
          "icon": ""
        },
        {
          "title": "Inconsistent Security Practices",
          "description": "Lack of consistency across cloud providers, business units, and applications, complicating governance and auditing.",
          "icon": ""
        },
        {
          "title": "Security as an Afterthought",
          "description": "Rapid development iterations made security requirements secondary.",
          "icon": ""
        },
        {
          "title": "Disparate Configurations",
          "description": "Difficulties in addressing vulnerabilities and incidents due to scattered configurations.",
          "icon": ""
        }
      ]
    },
    "scopeOfWork": {
      "title": "Scope Of Work",
      "description": "Developed a cloud security strategy and operating model to establish a consistent security framework.",
      "icon": "",
      "tasks": [
        {
          "title": "Cloud Security Framework",
          "description": "Established a comprehensive security framework to ensure full control coverage.",
          "icon": ""
        },
        {
          "title": "Gap Analysis",
          "description": "Performed gap analysis to create application security profiles based on business context and risk.",
          "icon": ""
        },
        {
          "title": "Control Implementation",
          "description": "Created steps for technical (blueprints) and non-technical (implementation guides) controls.",
          "icon": ""
        },
        {
          "title": "Organizational Adoption",
          "description": "Piloted integration with existing client functions to ensure smooth adoption.",
          "icon": ""
        },
        {
          "title": "Automation & Scaling",
          "description": "Defined roadmap for automating security using 'infrastructure-as-code'.",
          "icon": ""
        }
      ]
    },
    "valueAdded": {
      "title": "Value Added",
      "description": "Delivering significant benefits in security, efficiency, and cost savings.",
      "icon": "",
      "benefits": [
        {
          "title": "Enhanced Tech Stack",
          "description": "Freed up IT teams to focus on higher-value business functionality.",
          "icon": ""
        },
        {
          "title": "$3M Annual Savings",
          "description": "Reduction in service sustainability costs for existing platforms.",
          "icon": ""
        },
        {
          "title": "$5M Cost Avoidance",
          "description": "Avoided costs related to growing data & analytics infrastructure.",
          "icon": ""
        },
        {
          "title": "Advanced Analytics & AI/ML",
          "description": "Improved ability to detect and act on suspicious activity patterns faster.",
          "icon": ""
        },
        {
          "title": "Efficiency Gains",
          "description": "Reduced effort required to identify and address security issues.",
          "icon": ""
        }
      ]
    }
  },
  {
    "id": 5,
    "autherImage": "",
    "heroImage": "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "IT Due Diligence work for a buy-side transaction",
    "description": "Supported client in preparing a high-level IT due diligence report with the objective of identifying risks or issues associated with Target’s IT landscape that are considered potentially material to the proposed transaction.",
    "clientBackground": {
      "title": "Client Background",
      "description": "Supported client in preparing a high-level IT due diligence report to identify risks or issues associated with Target’s IT landscape that are potentially material to the proposed transaction.",
      "icon": ""
    },
    "scopeOfWork": {
      "title": "Scope Of Work",
      "description": "Understanding the current state of the IT operating model supporting the target company.",
      "icon": "",
      "areas": [
        {
          "title": "IT Landscape",
          "description": "Key external interfaces and IT infrastructure services supporting the business.",
          "icon": ""
        },
        {
          "title": "IT Organization & Skills",
          "description": "Current IT organization, skills, and experience and their alignment with business support.",
          "icon": ""
        },
        {
          "title": "E-Commerce & Customer Technology",
          "description": "Key components of customer-facing solutions, including third-party solutions and market comparison.",
          "icon": ""
        },
        {
          "title": "IT Stability & Scalability",
          "description": "Evaluation of key IT components, monitoring, reporting, and capacity for growth.",
          "icon": ""
        }
      ]
    },
    "valueAdded": {
      "title": "Value Added",
      "description": "Assessments and insights gained through due diligence processes.",
      "icon": "",
      "points": [
        {
          "title": "Data Room Review",
          "description": "Review of available data room information.",
          "icon": ""
        },
        {
          "title": "Documentation & Management Responses",
          "description": "Analysis of documentation and responses from management.",
          "icon": ""
        },
        {
          "title": "IT Organization Overview",
          "description": "Evaluation of IT organization and operating model.",
          "icon": ""
        },
        {
          "title": "Customer & E-Commerce Research",
          "description": "External research on customer feedback and eCommerce platform capabilities.",
          "icon": ""
        }
      ]
    }
  },
  {
    "id": 6,
    "autherImage": "",
    "heroImage": "https://images.pexels.com/photos/1485653/pexels-photo-1485653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Cyber Due Diligence work for a buy-side transaction",
    "description": "A US based Corporate client wants to acquire a company in Singapore and wants detailed Cyber assessment, providing insights into the Cyber security practices, controls & overall maturity of the target company.",
    "clientBackground": {
      "title": "Client Background",
      "description": "A US-based Corporate client wants to acquire a company in Singapore and requires a detailed Cyber assessment.",
      "icon": "",
      "challenges": [
        {
          "title": "Cyber Security Assessment",
          "description": "Client requires insights into the target company's Cyber security practices, controls, and overall maturity.",
          "icon": ""
        }
      ]
    },
    "scopeOfWork": {
      "title": "Scope Of Work",
      "description": "Cyber Due Diligence assessment to evaluate security controls and compliance frameworks.",
      "icon": "",
      "tasks": [
        {
          "title": "Cyber Security Controls Review",
          "description": "Evaluate Governance, Compliance, Training, Third-party management, User access, Application & Network Security, Monitoring, and Patch Management.",
          "icon": ""
        },
        {
          "title": "Incident & Resilience Analysis",
          "description": "Review Security Incident Management, Operational Resilience, and external metrics.",
          "icon": ""
        },
        {
          "title": "Cyber Organization Structure Review",
          "description": "Assess cyber security team, leadership, and overall security control improvements.",
          "icon": ""
        },
        {
          "title": "GDPR Compliance Verification",
          "description": "Validate the presence of a GDPR compliance framework and Global Action Plan.",
          "icon": ""
        }
      ]
    },
    "valueAdded": {
      "title": "Value Added",
      "description": "Providing actionable insights and strategic improvements for cyber security maturity.",
      "icon": "",
      "benefits": [
        {
          "title": "Cyber Security Organization Alignment",
          "description": "Evaluated how cyber security integrates with IT, including roles of CISO, CIO, and Risk Management.",
          "icon": ""
        },
        {
          "title": "Cyber Strategy Roadmap",
          "description": "Overview of ongoing cyber programs and future strategic goals.",
          "icon": ""
        },
        {
          "title": "Cyber Security Maturity Assessment",
          "description": "Benchmarking target security posture against industry standards.",
          "icon": ""
        },
        {
          "title": "GRC Summary Report",
          "description": "Governance, Risk, and Compliance (GRC) review of cyber security policies and procedures.",
          "icon": ""
        },
        {
          "title": "Data Protection Compliance",
          "description": "Review of GDPR compliance structure and roles within the target company.",
          "icon": ""
        }
      ]
    }
  },
  {
    "id": 7,
    "heroImage": "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "autherImage": "",
    "title": "Driving Efficiency and Quality in US Tax Service",
    "description": "A mid-sized US consulting firm specializing in tax advisory faced increasing workload during the busy tax season, struggling with capacity constraints and tight deadlines.",
    "clientBackground": {
      "title": "Client Background",
      "description": "A mid-sized US consulting firm specializing in tax advisory faced increasing workload during the busy tax season. With multiple client deadlines approaching, their in-house team struggled with capacity constraints.",
      "icon": "",
      "challenges": [
        { "title": "High Volume of Work", "icon": "", "details": "High volume of tax compliance work during peak season." },
        { "title": "Tight Deadlines", "icon": "", "details": "Tight client deadlines requiring simultaneous delivery of multiple projects." },
        { "title": "Limited Resources", "icon": "", "details": "Limited local resources, leading to rising overtime costs and potential burnout." }
      ]
    },
    "scopeOfWork": {
      "title": "Our Solution",
      "description": "Our tax team stepped in as an extension of the client’s US team. We focused on structured delivery, robust quality checks, and seamless collaboration.",
      "icon": "",
      "tasks": [
        { "title": "Dedicated Team", "icon": "", "details": "A specialized group trained on US tax compliance and client-specific processes with clear ownership." },
        { "title": "Process Optimization", "icon": "", "details": "Implemented standardized working papers, checklists, and a two-tier review system." },
        { "title": "Seamless Collaboration", "icon": "", "details": "Daily progress updates to track turnaround times and flag queries early." },
        { "title": "Scalable Support", "icon": "", "details": "Flexibility to scale resources up or down depending on workload without compromising quality." }
      ]
    },
    "valueAdded": {
      "title": "Results",
      "description": "The partnership delivered both immediate operational relief and long-term strategic advantages.",
      "icon": "",
      "benefits": [
        { "title": "Faster Turnaround", "icon": "", "details": "30% faster turnaround time compared to the client’s in-house delivery alone." },
        { "title": "Cost Savings", "icon": "", "details": "25–40% cost savings due to reduced overtime and optimized offshore resourcing." },
        { "title": "Quality Maintained", "icon": "", "details": "Zero compromise on quality." },
        { "title": "Strategic Focus", "icon": "", "details": "Freed up US consultants’ time to focus on higher-value advisory and client-facing work." },
        { "title": "Scalable Capacity", "icon": "", "details": "Strengthened the client’s ability to take on more business without increasing headcount." }
      ]
    }
  },
  {
    "id": 8,
    "heroImage": "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "autherImage": "",
    "title": "Adding Value at Unmatched Cost in Accounting",
    "description": "A mid-sized US based firm with multiple business units faced growing accounting complexity, manual processes, and delays in financial reporting.",
    "clientBackground": {
      "title": "Client Background",
      "description": "A mid-sized US based firm with multiple business units in various geographies faced growing accounting complexity. Their finance team was burdened with routine bookkeeping, reconciliations, and month-end close processes.",
      "icon": "",
      "challenges": [
        { "title": "Multi-Entity Complexity", "icon": "", "details": "High volume of transactions and multi-entity accounting requirements." },
        { "title": "Reporting Delays", "icon": "", "details": "Delays in month-end close impacting timely financial reporting." },
        { "title": "Rising Costs", "icon": "", "details": "Rising costs due to overtime and temporary staffing during peak periods." },
        { "title": "Manual Processes", "icon": "", "details": "Manual processes leading to higher risk of errors and rework." }
      ]
    },
    "scopeOfWork": {
      "title": "Our Solution",
      "description": "We deployed a blended delivery model combining accounting expertise with AI-powered automation to strengthen accuracy, reduce costs, and improve turnaround times.",
      "icon": "",
      "tasks": [
        { "title": "Dedicated Expert Team", "icon": "", "details": "US GAAP and IFRS-trained accountants familiar with client-specific processes and a two-tier review framework." },
        { "title": "Process & Automation", "icon": "", "details": "Standardized month-end close templates and automated reconciliations, data entry, and variance analysis." },
        { "title": "Regular Collaboration", "icon": "", "details": "Regular reporting cadence to keep the US finance team informed." },
        { "title": "Scalable Resources", "icon": "", "details": "Ability to flex resources during quarterly closes and year-end audits." }
      ]
    },
    "valueAdded": {
      "title": "Results",
      "description": "The partnership delivered immediate operational relief and positioned the finance team for sustainable long-term impact.",
      "icon": "",
      "benefits": [
        { "title": "Faster Closing", "icon": "", "details": "40% faster month-end close with standardized processes and AI automation." },
        { "title": "Significant Cost Savings", "icon": "", "details": "30–35% cost savings compared to in-house-only delivery." },
        { "title": "Higher Accuracy", "icon": "", "details": "Higher accuracy due to AI-powered checks and layered reviews." },
        { "title": "Strategic Redirection", "icon": "", "details": "Global finance team redirected focus toward analysis, planning, and advisory." },
        { "title": "Enhanced Capacity", "icon": "", "details": "Strengthened the client’s capacity to scale without increasing headcount." }
      ]
    }
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = insights.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-10 text-red-600 font-bold text-lg">
        Post not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-12">
      {/* Hero Section */}
      <div
  className="relative h-[450px] md:h-[400px] sm:h-[350px] bg-cover bg-center"
  style={{ backgroundImage: `url(${post.heroImage})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8">
    <h1 className="text-4xl md:text-5xl sm:text-3xl font-bold drop-shadow-lg">
      {post.title}
    </h1>
    <p className="text-base md:text-lg sm:text-sm mt-2 opacity-90">
      {post.description}
    </p>
  </div>
</div>


      {/* Sections */}
      <div className="px-8 py-8">
        {Object.entries(post).map(([key, value], index) => {
          if (typeof value === "object" && value.title) {
            return (
              <section key={index} className="mb-8 border-b pb-6 last:border-none">
                <h2 className="text-2xl font-semibold flex items-center mb-4 text-gray-900">
                  {value.icon && <span className="mr-2 text-gray-700 text-2xl">{value.icon}</span>}
                  {value.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>

                {value.challenges?.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {value.challenges.map((item, i) => (
                        <li key={i} className="mt-2">
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {value.tasks?.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Tasks</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {value.tasks.map((item, i) => (
                        <li key={i} className="mt-2">
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {value.benefits?.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Benefits</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {value.benefits.map((item, i) => (
                        <li key={i} className="mt-2">
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {value.points?.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Key Points</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {value.points.map((item, i) => (
                        <li key={i} className="mt-2">
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogPost;

