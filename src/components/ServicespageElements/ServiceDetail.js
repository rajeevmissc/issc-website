import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    FaGlobe, FaMoneyCheckAlt, FaLock, FaServer, FaCalculator, FaPlus, FaMinus, FaShieldAlt, FaBalanceScale, FaFileContract, FaUsers, FaClipboardCheck, FaChartLine, FaDatabase,
    FaBookOpen,
    FaFileInvoice,
    FaChartBar,
    FaChartPie,
    FaLightbulb,
    FaFileInvoiceDollar,
    FaExchangeAlt,
    FaHandsHelping,
    FaRobot,
    FaCube,
    FaGavel,
    FaExclamationTriangle,
    FaCloudUploadAlt,
    FaCogs
} from "react-icons/fa";
import merger_aqu from "../../Assets/Images/service_bg1.webp";
import audit_image from "../../Assets/Images/service_bg3.webp";
import acounting_images from "../../Assets/Images/service_bg4.webp";
import tax_image from "../../Assets/Images/service_bg4.webp";
import IT_image from "../../Assets/Images/service_bg3.webp";
import acounting from "../../Assets/Images/service_bg4.webp";
const serviceData = {
    "Assurance": {
        title: "Assurance",
        description: "Our Assurance services are designed to provide independent and objective evaluations that enhance financial credibility, regulatory compliance, and corporate governance. Through rigorous audits, reviews, and reporting, we ensure transparency, accuracy, and accountability in financial statements and internal controls.",
        icon: <FaShieldAlt className="text-red-500 text-8xl" />,
        image: audit_image,
        sections: [
            {
                heading: "Statutory Audit",
                icon: <FaBalanceScale className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Statutory audits are more than a compliance requirement, they're a vital tool for building trust, transparency, and accountability within your organization.
                            At ISSC, we provide end-to-end Statutory Audit services through an efficient onshore-offshore delivery model that ensures both cost-effectiveness and high-quality output. Our qualified audit professionals work closely with client teams and local statutory auditors to deliver audits that comply with regulatory standards, including IFRS, US GAAP, and local GAAP requirements.
                        </p>
                        <p>We go beyond just verifying financial statements. Our audit process includes:</p>
                        <ul className="list-disc ml-5">
                            <li>Detailed risk assessments</li>
                            <li>Evaluation of internal controls and governance frameworks</li>
                            <li>Analytical procedures to identify trends, anomalies, or inconsistencies</li>
                            <li>Insights that help management strengthen operational and financial efficiency</li>
                        </ul>
                        <br/>
                        <p className="font-bold">In addition to core financial audits, we also deliver </p>
                        <p>Assurance services tailored to evolving business needs—such as regulatory reporting, compliance certifications, and industry-specific reviews</p>
                        <p>- Group reporting support which includes assistance with group audits, including audit packages, lead schedules, and consolidations</p>
                        <p>- Regulatory & Industry-Specific Audits like manufacturing, IT etc.
                            By leveraging both onshore expertise and offshore execution, we deliver audits that are not only compliant but insightful, adding value beyond the numbers.
                        </p>
                        <br/>
                        <p className="font-bold">Why Choose Us</p>
                        <ul className="list-disc ml-5">
                            <li>Strong domain knowledge across sectors</li>
                            <li>Global delivery capability (onshore-offshore)</li>
                            <li>Focus on automation and audit analytics</li>
                            <li>Experienced team with Big 4 background</li>
                            <li>Commitment to quality, timelines, and confidentiality</li>
                            <li>Client-centric, collaborative approach</li>
                        </ul>

                    </>
                )
            },
            {
                heading: "Compliance Audit",
                icon: <FaFileContract className="text-green-500 text-3xl" />,
                details: (
                    <>
                        <p>Compliance Audit
                            Compliance audits are essential for ensuring your organization meets all regulatory requirements and industry standards while minimizing legal and reputational risks.
                            At ISSC, we provide comprehensive Compliance Audit services through our proven onshore-offshore delivery model that combines regulatory expertise with cost-effective execution. Our qualified professionals work closely with your compliance teams and regulatory experts to deliver audits that ensure adherence to applicable laws, regulations, and industry-specific requirements across multiple jurisdictions.
                            We go beyond basic compliance checking. Our audit process includes:</p>
                        <ul className="list-disc ml-5">
                            <li>Comprehensive regulatory requirement mapping</li>
                            <li>Assessment of compliance frameworks and control environments</li>
                            <li>Testing procedures to verify adherence to regulations and policies</li>
                            <li>Gap analysis and remediation recommendations for enhanced compliance
                                In addition to core compliance audits, we also deliver - Industry-specific compliance reviews covering banking regulations, healthcare standards, environmental requirements, and data privacy laws - Regulatory reporting support including preparation and validation of mandatory regulatory filings and certifications - Policy and procedure assessments to ensure internal policies align with current regulatory requirements.
                                By leveraging both onshore regulatory knowledge and offshore execution capabilities, we deliver compliance audits that not only meet regulatory standards but provide strategic insights for improved governance</li>
                        </ul>
                        <br/>
                        <p className="font-bold">Why Choose Us</p>
                        <ul className="list-disc ml-5">
                            <li>Deep regulatory expertise across industries and jurisdictions</li>
                            <li>Global delivery capability (onshore-offshore)</li>
                            <li>Focus on regulatory technology and automated compliance testing</li>
                            <li>Experienced team with Big 4 and regulatory background</li>
                            <li>Commitment to accuracy, confidentiality, and regulatory deadlines</li>
                            <li>Proactive, risk-based approach to compliance management</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Operational Audit",
                icon: <FaUsers className="text-purple-500 text-3xl" />,
                details: (
                    <>
                        <p>Operational audits are critical for optimizing business processes, improving efficiency, and ensuring your organization achieves maximum value from its resources and operations.
                            At ISSC, we deliver comprehensive Operational Audit services using our efficient onshore-offshore delivery model that provides deep operational insights while maintaining cost-effectiveness. Our experienced operational audit professionals collaborate with your management teams to evaluate business processes, operational controls, and performance metrics against industry best practices.
                            We focus on driving operational excellence. Our audit process includes:</p>
                        <ul className="list-disc ml-5">
                            <li>Detailed process efficiency assessments</li>
                            <li>Evaluation of operational controls and risk management frameworks</li>
                            <li>Performance benchmarking and key metrics analysis</li>
                            <li>Recommendations for process optimization and cost reduction opportunities
                                In addition to core operational reviews, we also deliver - Process improvement consulting including workflow optimization, automation opportunities, and operational restructuring - Performance measurement systems development and validation of KPIs, dashboards, and management reporting processes - Vendor and contract audits to assess third-party relationships, service delivery, and cost management effectiveness.
                                By combining onshore business expertise with offshore analytical capabilities, we deliver operational audits that identify actionable improvements and drive measurable business valueDetection and prevention of mismanagement or fraud</li>
                        </ul>
                        <br/>
                        <p className="font-bold">Why Choose Us</p>
                        <ul className="list-disc ml-5">
                            <li>Extensive operational expertise across business functions and industries</li>
                            <li>Global delivery capability (onshore-offshore)</li>
                            <li>Focus on data analytics and process automation tools</li>
                            <li>Experienced team with operational consulting and Big 4 background</li>
                            <li>Commitment to practical solutions, timelines, and measurable results</li>
                            <li>Collaborative approach focused on sustainable operational improvements</li>
                        </ul>

                    </>
                )
            },
            {
                heading: "Due Diligence Audit",
                icon: <FaClipboardCheck className="text-orange-500 text-3xl" />,
                details: (
                    <>
                        <p>Due diligence audits provide critical insights for investment decisions, mergers, acquisitions, and strategic transactions by thoroughly evaluating target organizations' financial health and operational performance.
                            At ISSC, we deliver comprehensive Due Diligence Audit services through our agile onshore-offshore delivery model that ensures rapid turnaround and detailed analysis while maintaining cost-effectiveness. Our experienced transaction professionals work closely with investment teams, legal advisors, and deal makers to provide thorough assessments that support informed decision-making.
                            We provide comprehensive transaction insights. Our due diligence process includes:</p>
                        <ul className="list-disc ml-5">
                            <li>Detailed financial statement analysis and quality of earnings assessments</li>
                            <li>Evaluation of business model sustainability and competitive positioning</li>
                            <li>Management assessment and organizational capability reviews</li>
                            <li>Risk identification and valuation impact analysis
                                In addition to financial due diligence, we also deliver - Commercial due diligence including market analysis, competitive assessment, and revenue sustainability evaluation - Operational due diligence covering process efficiency, technology systems, and integration readiness assessments - ESG due diligence evaluating environmental liabilities, social responsibility, and governance structure effectiveness.
                                By combining onshore deal expertise with offshore analytical depth, we deliver due diligence audits that provide comprehensive insights for successful transaction execution and value creation.</li>
                        </ul>
                        <br/>
                        <p className="font-bold">Why Choose Us</p>
                        <ul className="list-disc ml-5">
                            <li>Extensive transaction expertise across industries and deal types</li>
                            <li>Rapid global delivery capability (onshore-offshore)</li>
                            <li>Focus on data analytics and financial modeling tools</li>
                            <li>Experienced team with investment banking and Big 4 transaction background</li>
                            <li>Commitment to tight deadlines, accuracy, and confidential deal support</li>
                            <li>Collaborative approach with clear, actionable transaction insights</li>
                        </ul>

                    </>
                )
            },
            {
                heading: "Revenue Assurance Audit",
                icon: <FaChartLine className="text-yellow-500 text-3xl" />,
                details: (
                    <>
                        <p>Revenue assurance audits are essential for protecting your organization's revenue streams, ensuring accurate billing processes, and maximizing revenue capture across all business channels and customer touchpoints.
                            At ISSC, we provide specialized Revenue Assurance Audit services through our technology-enabled onshore-offshore delivery model that combines revenue expertise with advanced analytics for comprehensive revenue protection. Our revenue assurance professionals work with finance teams, billing departments, and IT systems to identify revenue leakage and optimize revenue processes.
                            We focus on revenue optimization and protection. Our audit process includes:</p>
                        <ul className="list-disc ml-5">
                            <li>Comprehensive revenue stream analysis and leakage detection</li>
                            <li>Assessment of billing systems and revenue recognition controls</li>
                            <li>Customer contract analysis and pricing verification procedures</li>
                            <li>Revenue analytics and trend analysis for performance improvement
                                In addition to revenue verification, we also deliver - Subscription revenue management including recurring billing validation, customer lifecycle analysis, and churn impact assessment - Pricing and contract audit covering pricing model effectiveness, contract compliance, and revenue optimization opportunities - Revenue technology assessment evaluating billing systems, CRM integration, and automated revenue processes.
                                By leveraging both onshore revenue expertise and offshore analytical capabilities, we deliver revenue assurance audits that protect and enhance your organization's financial performance.</li>
                        </ul>
                        <br/>
                        <p className="font-bold">Why Choose Us</p>
                        <ul className="list-disc ml-5">
                            <li>Specialized revenue assurance expertise across business models and industries</li>
                            <li>Technology-driven global delivery capability (onshore-offshore)</li>
                            <li>Focus on advanced revenue analytics and automated testing tools</li>
                            <li>Experienced team with revenue management and Big 4 background</li>
                            <li>Commitment to revenue protection, accuracy, and process optimization</li>
                            <li>Data-driven approach with measurable revenue improvement results</li>
                        </ul>

                    </>
                )
            },
            // {
            //     heading: "ESG Reporting",
            //     icon: <FaGlobe className="text-teal-500 text-3xl" />,
            //     details: (
            //         <>
            //             <p>Environmental, Social, and Governance (ESG) compliance auditing ensures that businesses align with sustainability goals. We assist in:</p>
            //             <ul className="list-disc ml-5">
            //                 <li>Evaluating sustainability metrics and ESG disclosures</li>
            //                 <li>Ensuring compliance with global ESG reporting frameworks</li>
            //                 <li>Identifying risks and opportunities in sustainability practices</li>
            //                 <li>Helping businesses improve their ESG ratings and investor appeal</li>
            //             </ul>
            //             <p className='text-bold'>Why Choose Us</p>
            //             <ul>
            //                 <li>Technology-driven global delivery capability (onshore-offshore)</li>
            //                 <li>Focus on advanced revenue analytics and automated testing tools</li>
            //                 <li>Experienced team with revenue management and Big 4 background</li>
            //                 <li>Commitment to revenue protection, accuracy, and process optimization</li>
            //                 <li>Data-driven approach with measurable revenue improvement results</li>
            //             </ul>

            //         </>
            //     )
            // },
            // {
            //     heading: "IT System Audit for Internal and External Audits",
            //     icon: <FaDatabase className="text-indigo-500 text-3xl" />,
            //     details: (
            //         <>
            //             <p>Our IT system audits evaluate security, efficiency, and compliance of IT infrastructures. We focus on:</p>
            //             <ul className="list-disc ml-5">
            //                 <li>Reviewing IT security policies and data protection measures</li>
            //                 <li>Assessing cybersecurity risks and internal controls</li>
            //                 <li>Ensuring compliance with industry-specific IT regulations</li>
            //                 <li>Providing recommendations for system improvements and risk mitigation</li>
            //             </ul>
            //         </>
            //     )
            // }
        ]
    },
    "Book-keeping and Financial Reporting": {
        title: "Book-keeping and Financial Reporting",
        description: "Our Reporting and Bookkeeping services ensure accurate financial records, regulatory compliance, and insightful reporting. We provide businesses with structured financial management, allowing for better decision-making and operational efficiency.",
        icon: <FaBookOpen className="text-blue-500 text-8xl" />,
        image: acounting_images,
        sections: [
            {
                heading: "Financial Statement Preparation",
                icon: <FaFileInvoice className="text-green-500 text-3xl" />,
                details: (
                    <>
                        <p>We prepare comprehensive financial statements that provide a clear view of a company’s financial health. Our services include:</p>
                        <ul className="list-disc ml-5">
                            <li>Balance sheets, income statements, and cash flow statements</li>
                            <li>Accurate classification of assets, liabilities, and expenses</li>
                            <li>GAAP, IFRS, and other regulatory compliance adherence</li>
                            <li>Custom reports for investors and stakeholders</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Bookkeeping & Transaction Recording",
                icon: <FaCalculator className="text-purple-500 text-3xl" />,
                details: (
                    <>
                        <p>Efficient bookkeeping is essential for smooth business operations. We provide:</p>
                        <ul className="list-disc ml-5">
                            <li>Daily transaction recording and categorization</li>
                            <li>Accounts payable and receivable management</li>
                            <li>Bank and credit card reconciliations</li>
                            <li>Cloud-based bookkeeping solutions for real-time tracking</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Tax Compliance & Reporting",
                icon: <FaFileInvoiceDollar className="text-red-500 text-3xl" />,
                details: (
                    <>
                        <p>Stay compliant with tax laws and avoid penalties with our expert tax reporting services:</p>
                        <ul className="list-disc ml-5">
                            <li>Preparation and filing of corporate tax returns</li>
                            <li>Sales tax and VAT calculations and submissions</li>
                            <li>Tax deductions and credits optimization</li>
                            <li>Compliance with federal, state, and local tax regulations</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Payroll Processing & Compliance",
                icon: <FaMoneyCheckAlt className="text-orange-500 text-3xl" />,
                details: (
                    <>
                        <p>We manage payroll processing to ensure timely and accurate compensation while maintaining compliance:</p>
                        <ul className="list-disc ml-5">
                            <li>Automated payroll calculation and tax withholdings</li>
                            <li>Employee benefits and deductions management</li>
                            <li>Payroll tax filings and W-2/1099 preparation</li>
                            <li>Compliance with labor laws and payroll regulations</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Budgeting & Financial Forecasting",
                icon: <FaChartBar className="text-teal-500 text-3xl" />,
                details: (
                    <>
                        <p>Plan and optimize financial performance with our budgeting and forecasting services:</p>
                        <ul className="list-disc ml-5">
                            <li>Development of annual and quarterly budgets</li>
                            <li>Cash flow projections and financial planning</li>
                            <li>Variance analysis and cost control strategies</li>
                            <li>Scenario-based financial modeling</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Management Reporting & KPIs",
                icon: <FaChartPie className="text-yellow-500 text-3xl" />,
                details: (
                    <>
                        <p>Gain insights into your business performance with detailed management reports and KPI tracking:</p>
                        <ul className="list-disc ml-5">
                            <li>Customized financial dashboards and reports</li>
                            <li>Performance tracking and profitability analysis</li>
                            <li>Key financial metrics and trend identification</li>
                            <li>Data-driven decision-making support</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Audit-Ready Financial Records",
                icon: <FaShieldAlt className="text-indigo-500 text-3xl" />,
                details: (
                    <>
                        <p>Ensure your financial records are audit-ready for regulatory and compliance reviews:</p>
                        <ul className="list-disc ml-5">
                            <li>Systematic record-keeping and documentation</li>
                            <li>Reconciliation of financial statements with audit requirements</li>
                            <li>Internal controls and fraud detection support</li>
                            <li>Collaboration with external auditors for seamless audits</li>
                        </ul>
                    </>
                )
            }
        ]
    },

    "Accounting Advisory": {
        title: "Accounting Advisory",
        description: "Our Accounting services provide businesses with comprehensive financial management, regulatory compliance, and strategic insights. From advisory to financial reporting, we help you navigate complex accounting challenges with accuracy and efficiency.",
        icon: <FaCalculator className="text-red-500 text-8xl" />,
        image: acounting,
        sections: [
            {
                heading: "Virtual CFO and Interim Financial Controller Support",
                icon: <FaMoneyCheckAlt className="text-orange-500 text-3xl" />,
                details: (
                    <>
                        <p>We provide experienced financial leadership on demand. From strategic insights by a Virtual CFO or hands-on support from an Interim Financial Controller, our experts help drive informed decision-making, streamline operations, and strengthen financial management without the cost of a full-time hire.</p>
                    </>
                )
            },
            {
                heading: "Transaction Support including Mergers and Acquisitions (Buy-side and Sell-side Transaction Support)",
                icon: <FaChartPie className="text-teal-500 text-3xl" />,
                details: (
                    <>
                        <p>From due diligence to deal execution, we support both buyers and sellers through every stage of a transaction. Our team delivers clear financial analysis, identifies key risks and opportunities, and ensures you maximise value while minimising surprises.</p>
                    </>
                )
            },
            {
                heading: "Accounting Standards Implementation",
                icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
                details: (
                    <>
                        <p>Adopting new accounting standards can be complex and resource-intensive. We provide end-to-end support to interpret, implement, and embed the latest requirements so your financial statements remain accurate, compliant, and meaningful.</p>
                    </>
                )
            },
            {
                heading: "GAAP Conversions",
                icon: <FaChartLine className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Navigating different reporting frameworks doesn’t have to be overwhelming. We help businesses transition smoothly between GAAPs — whether from UK GAAP to IFRS or US GAAP — ensuring consistency, comparability, and compliance across jurisdictions.</p>
                    </>
                )
            },
               {
                heading: "Improvements in the Financial Reporting Processes",
                icon: <FaChartLine className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Strong reporting drives better decisions. We work with finance teams to design and implement efficient reporting processes, enhance internal controls, and deliver faster, more reliable insights for management and stakeholders.</p>
                    </>
                )
            },
               {
                heading: "Divorce Valuations",
                icon: <FaChartLine className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Financial clarity is essential during divorce proceedings. We provide objective, accurate business valuations and financial analysis to support negotiations and settlements, helping parties reach fair outcomes with confidence.</p>
                    </>
                )
            },
        ]
    },

    "Taxation": {
        title: "Taxation",
        description: "Our Taxation services help businesses and individuals navigate complex tax regulations while optimizing liabilities and ensuring full compliance with tax laws. We provide strategic tax planning, reporting, and advisory services tailored to diverse financial structures.",
        icon: <FaMoneyCheckAlt className="text-red-500 text-8xl" />,
        image: tax_image,
        sections: [
            {
                heading: "Tax Return Preparation",
                icon: <FaFileInvoice className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Comprehensive tax return preparation services for individuals, businesses, and corporations.</p>
                        <ul className="list-disc ml-5">
                            <li>Preparation and filing for Individuals, Partnerships, and Corporations</li>
                            <li>State, federal, and international tax return compliance</li>
                            <li>Quarterly tax filings and estimated payments</li>
                            <li>Handling of amendments, audits, and tax notices</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Transfer Pricing",
                icon: <FaExchangeAlt className="text-green-500 text-3xl" />,
                details: (
                    <>
                        <p>Ensuring compliance with global transfer pricing regulations and policies.</p>
                        <ul className="list-disc ml-5">
                            <li>Preparation of transfer pricing documentation and reports</li>
                            <li>Compliance with OECD, IRS, and other international tax frameworks</li>
                            <li>Intercompany pricing strategies to minimize risk</li>
                            <li>Tax authority negotiations and dispute resolution</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Non-Profit Taxation",
                icon: <FaHandsHelping className="text-purple-500 text-3xl" />,
                details: (
                    <>
                        <p>Specialized tax services tailored for non-profit organizations and charities.</p>
                        <ul className="list-disc ml-5">
                            <li>Preparation and filing of Form 990 and state-level tax forms</li>
                            <li>Tax-exempt status applications and compliance</li>
                            <li>Unrelated Business Income Tax (UBIT) assessment</li>
                            <li>Donor contribution compliance and reporting</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Benchmarking & Tax Performance Analysis",
                icon: <FaChartBar className="text-orange-500 text-3xl" />,
                details: (
                    <>
                        <p>Comparative analysis of tax performance to optimize tax strategies.</p>
                        <ul className="list-disc ml-5">
                            <li>Industry-specific tax benchmarking and comparisons</li>
                            <li>Identifying tax-saving opportunities and inefficiencies</li>
                            <li>Tax risk assessment and mitigation strategies</li>
                            <li>Strategic tax planning for improved financial performance</li>
                        </ul>
                    </>
                )
            },
            // {
            //     heading: "Sales & Indirect Tax Compliance",
            //     icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
            //     details: (
            //         <>
            //             <p>Ensuring compliance with sales tax, VAT, and other indirect tax obligations.</p>
            //             <ul className="list-disc ml-5">
            //                 <li>Sales tax registration, filing, and compliance</li>
            //                 <li>Value Added Tax (VAT) and Goods & Services Tax (GST) compliance</li>
            //                 <li>Handling multi-state and cross-border tax regulations</li>
            //                 <li>Audit support and dispute resolution for indirect taxes</li>
            //             </ul>
            //         </>
            //     )
            // },
            // {
            //     heading: "Tax Advisory & Strategic Planning",
            //     icon: <FaUserTie className="text-teal-500 text-3xl" />,
            //     details: (
            //         <>
            //             <p>Proactive tax strategies to minimize liabilities and maximize financial efficiency.</p>
            //             <ul className="list-disc ml-5">
            //                 <li>Customized tax planning for businesses and individuals</li>
            //                 <li>Estate and succession tax planning</li>
            //                 <li>International tax strategy and cross-border compliance</li>
            //                 <li>IRS dispute resolution and audit defense</li>
            //             </ul>
            //         </>
            //     )
            // }
        ]
    },
    
    "IT Advisory": {
        title: "IT Advisory and Cybersecurity",
        description: "We provide expert IT consulting, risk assessment, and cybersecurity solutions to help businesses safeguard digital assets, optimize IT infrastructure, and stay ahead in an evolving technological landscape. Our services focus on security, efficiency, and innovation.",
        icon: <FaLock className="text-red-500 text-8xl" />,
        image: merger_aqu,
        sections: [
            {
                heading: "Data Analytics and AI",
                icon: <FaChartPie className="text-blue-500 text-3xl" />,
                details: (
                    <>
                        <p>Unlock actionable insights using advanced data analytics and AI-driven solutions.</p>
                        <ul className="list-disc ml-5">
                            <li>Predictive analytics for business growth and risk management</li>
                            <li>AI-powered automation for financial and operational efficiency</li>
                            <li>Data visualization and real-time reporting</li>
                            <li>Machine learning applications for process optimization</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Automation and Digitization",
                icon: <FaRobot className="text-green-500 text-3xl" />,
                details: (
                    <>
                        <p>Implementing digital transformation strategies to enhance business processes and productivity.</p>
                        <ul className="list-disc ml-5">
                            <li>Robotic Process Automation (RPA) for workflow optimization</li>
                            <li>Cloud migration and digital infrastructure setup</li>
                            <li>Paperless solutions and ERP integrations</li>
                            <li>Legacy system modernization and software upgrades</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Blockchain Solutions",
                icon: <FaCube className="text-purple-500 text-3xl" />,
                details: (
                    <>
                        <p>Advising on blockchain applications to enhance security, transparency, and efficiency.</p>
                        <ul className="list-disc ml-5">
                            <li>Implementation of decentralized ledger technologies</li>
                            <li>Smart contract development and security audits</li>
                            <li>Supply chain and financial transaction tracking</li>
                            <li>Compliance with blockchain regulatory standards</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "Cybersecurity Advisory",
                icon: <FaShieldAlt className="text-red-500 text-3xl" />,
                details: (
                    <>
                        <p>Protecting organizations from evolving cyber threats through advanced security measures.</p>
                        <ul className="list-disc ml-5">
                            <li>Cyber risk assessments and security audits</li>
                            <li>Threat intelligence and incident response planning</li>
                            <li>Endpoint and network security management</li>
                            <li>Regulatory compliance (GDPR, HIPAA, ISO 27001)</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "IT Managed Services",
                icon: <FaServer className="text-orange-500 text-3xl" />,
                details: (
                    <>
                        <p>Comprehensive IT support, infrastructure management, and cloud solutions.</p>
                        <ul className="list-disc ml-5">
                            <li>24/7 IT support and helpdesk services</li>
                            <li>Cloud computing and virtualization solutions</li>
                            <li>Disaster recovery and business continuity planning</li>
                            <li>Performance monitoring and proactive IT maintenance</li>
                        </ul>
                    </>
                )
            },
            {
                heading: "IT Governance, Risk & Compliance (GRC)",
                icon: <FaGavel className="text-teal-500 text-3xl" />,
                details: (
                    <>
                        <p>Ensuring IT policies align with business objectives and regulatory frameworks.</p>
                        <ul className="list-disc ml-5">
                            <li>IT governance framework implementation</li>
                            <li>Compliance with industry standards and legal regulations</li>
                            <li>Enterprise risk management and data privacy solutions</li>
                            <li>IT audit preparation and internal control assessments</li>
                        </ul>
                    </>
                )
            }
        ]
    },

  "System Migration": {
    title: "Enterprise Accounting System Migration",
    description: "Transform your financial operations with our proven accounting system migration services. We specialize in seamless data transitions between QuickBooks, Sage, NetSuite, Xero, and 50+ accounting platforms. Our certified migration specialists ensure 100% data accuracy, zero downtime, and complete regulatory compliance throughout your digital transformation journey.",
    icon: <FaServer className="text-red-500 text-8xl" />,
    image: IT_image,
    keyStats: {
        migrationsCompleted: "50+",
        dataAccuracy: "100%",
        averageDowntime: "< 4 hours",
        clientSatisfaction: "100%"
    },
    sections: [
        {
            heading: "Our Migration Expertise & Platform Coverage",
            icon: <FaExchangeAlt className="text-blue-600 text-3xl" />,
            details: (
                <>
                    <p>With over 50+ successful migrations completed, we are certified specialists in all major accounting platforms with proven expertise in complex enterprise-level transitions.</p>
                    <h4 className="font-semibold mt-4 mb-2">Source Systems We Migrate From:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>QuickBooks:</strong> Desktop (Pro, Premier, Enterprise), QuickBooks Online, Point of Sale</li>
                        <li><strong>Sage:</strong> 50cloud, 100, 300, X3, Intacct, BusinessWorks</li>
                        <li><strong>Legacy Systems:</strong> Peachtree, MYOB, Simply Accounting, Great Plains</li>
                        <li><strong>ERP Systems:</strong> SAP, Oracle, Microsoft Dynamics, Epicor</li>
                        <li><strong>Specialty Software:</strong> Industry-specific accounting solutions</li>
                    </ul>
                    <h4 className="font-semibold mt-4 mb-2">Target Platforms We Deploy:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>Cloud Solutions:</strong> NetSuite, Xero, FreshBooks, Wave, Zoho Books</li>
                        <li><strong>Enterprise Systems:</strong> SAP Business One, Oracle NetSuite, Sage Intacct</li>
                        <li><strong>Industry Solutions:</strong> Construction, Manufacturing, Retail, Professional Services</li>
                    </ul>
                </>
            )
        },
        {
            heading: "Our Proven 6-Phase Migration Process",
            icon: <FaCogs className="text-indigo-500 text-3xl" />,
            details: (
                <>
                    <p>Our systematic approach ensures flawless execution with minimal business disruption and maximum data integrity.</p>
                    <div className="space-y-3 mt-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                            <h5 className="font-semibold">Phase 1: Discovery & Assessment (Week 1)</h5>
                            <p className="text-sm">Complete system audit, data mapping, custom field analysis, and migration strategy development</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                            <h5 className="font-semibold">Phase 2: Planning & Architecture (Week 2)</h5>
                            <p className="text-sm">Chart of accounts restructuring, workflow design, integration planning, and timeline finalization</p>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-3">
                            <h5 className="font-semibold">Phase 3: Data Preparation & Cleaning (Week 3)</h5>
                            <p className="text-sm">Data validation, duplicate removal, format standardization, and backup creation</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                            <h5 className="font-semibold">Phase 4: Migration Execution (Week 4)</h5>
                            <p className="text-sm">Automated data transfer, real-time monitoring, and immediate validation checks</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                            <h5 className="font-semibold">Phase 5: Testing & Validation (Week 5)</h5>
                            <p className="text-sm">Comprehensive testing, balance verification, and user acceptance testing</p>
                        </div>
                        <div className="border-l-4 border-teal-500 pl-3">
                            <h5 className="font-semibold">Phase 6: Go-Live & Support (Week 6+)</h5>
                            <p className="text-sm">Production deployment, team training, and 90-day support coverage</p>
                        </div>
                    </div>
                </>
            )
        },
        {
            heading: "Data Integrity & Compliance Guarantee",
            icon: <FaShieldAlt className="text-green-500 text-3xl" />,
            details: (
                <>
                    <p>We maintain the highest standards of data accuracy and regulatory compliance throughout every migration project.</p>
                    <h4 className="font-semibold mt-4 mb-2">What We Guarantee:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>100% Data Accuracy:</strong> Every transaction, customer record, and financial entry transferred perfectly</li>
                        <li><strong>Complete Audit Trail:</strong> Full transaction history preservation with original timestamps</li>
                        <li><strong>Regulatory Compliance:</strong> GAAP, SOX, GDPR, and industry-specific requirements maintained</li>
                        <li><strong>Multi-Year History:</strong> Historical data preservation (up to 10+ years) with full reporting capability</li>
                        <li><strong>Bank Reconciliation:</strong> All reconciled transactions maintain their status and history</li>
                        <li><strong>Custom Fields & Categories:</strong> Business-specific data structures recreated exactly</li>
                    </ul>
                    <h4 className="font-semibold mt-4 mb-2">Security & Privacy:</h4>
                    <ul className="list-disc ml-5">
                        <li>End-to-end encryption during data transfer</li>
                        <li>SOC 2 Type II compliant processes</li>
                        <li>Multi-factor authentication and secure access controls</li>
                        <li>Comprehensive data backup and recovery procedures</li>
                    </ul>
                </>
            )
        },
        {
            heading: "Risk Mitigation & Business Continuity",
            icon: <FaExclamationTriangle className="text-yellow-500 text-3xl" />,
            details: (
                <>
                    <p>Our comprehensive risk management approach ensures your business operations continue uninterrupted during the migration process.</p>
                    <h4 className="font-semibold mt-4 mb-2">Pre-Migration Risk Assessment:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>Timing Optimization:</strong> Strategic scheduling around month-end, quarter-end, and tax periods</li>
                        <li><strong>Dependency Mapping:</strong> Complete analysis of integrations, payroll, and third-party connections</li>
                        <li><strong>Rollback Planning:</strong> Detailed contingency plans with instant restoration capabilities</li>
                        <li><strong>Performance Testing:</strong> Load testing and performance benchmarking pre-go-live</li>
                    </ul>
                    <h4 className="font-semibold mt-4 mb-2">Business Continuity Measures:</h4>
                    <ul className="list-disc ml-5">
                        <li>Parallel system operation during transition period</li>
                        <li>Real-time data synchronization capabilities</li>
                        <li>24/7 technical support during critical migration phases</li>
                        <li>Emergency response protocols with dedicated technical team</li>
                        <li>Phased migration options for large enterprises</li>
                    </ul>
                </>
            )
        },
        {
            heading: "Comprehensive Training & Support",
            icon: <FaClipboardCheck className="text-orange-500 text-3xl" />,
            details: (
                <>
                    <p>Our commitment extends beyond migration completion with comprehensive training programs and ongoing support to ensure your team's success.</p>
                    <h4 className="font-semibold mt-4 mb-2">Training Programs:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>Executive Overview:</strong> Strategic benefits and high-level system capabilities</li>
                        <li><strong>End-User Training:</strong> Role-specific training for accounting staff, managers, and executives</li>
                        <li><strong>Administrator Training:</strong> System configuration, user management, and basic troubleshooting</li>
                        <li><strong>Advanced Features:</strong> Reporting, automation, and integration capabilities</li>
                    </ul>
                    <h4 className="font-semibold mt-4 mb-2">Ongoing Support Options:</h4>
                    <ul className="list-disc ml-5">
                        <li><strong>90-Day Warranty:</strong> Free support for any migration-related issues</li>
                        <li><strong>Help Desk Support:</strong> Dedicated support team with 4-hour response time</li>
                        <li><strong>Monthly Health Checks:</strong> System performance monitoring and optimization</li>
                        <li><strong>Quarterly Business Reviews:</strong> Strategic consultation and system enhancement planning</li>
                        <li><strong>24/7 Emergency Support:</strong> Critical issue resolution with 1-hour response time</li>
                    </ul>
                </>
            )
        }
    ]
}

};

const ServiceDetail = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const { serviceTitle } = useParams();
    const formattedTitle = decodeURIComponent(serviceTitle);
    const service = serviceData[formattedTitle];


    if (!service) {
        return <div className="text-center text-red-500 text-2xl py-20">Service Not Found</div>;
    }

    return (
        <div>
            <div
                className="relative text-center bg-cover bg-center bg-no-repeat py-16 h-[90vh] flex items-center justify-center"
                style={{ backgroundImage: `url(${service.image})` }}
            >
                {/* Dark Overlay for Better Readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative  px-6">
                    {/* <div className="inline-block bg-gray-300 p-8 rounded-full shadow-md">{service.icon}</div> */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{service.title}</h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-3 drop-shadow-md">
                        {service.description}
                    </p>
                </div>
            </div>



            {/* Accordion Sections */}
            <div className="py-16 px-6 md:px-20">
                {service?.sections?.map((section, index) => (
                    <div key={index} className="mb-4 border border-gray-300 rounded-lg shadow-md">
                        <button
                            className="w-full flex justify-between items-center p-6 bg-gray-100 rounded-t-lg focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="text-xl text-left font-bold text-black">{section.heading}</h2>
                            {openIndex === index ? (
                                <FaMinus className="text-xl text-gray-600" />
                            ) : (
                                <FaPlus className="text-xl text-gray-600" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="p-6 bg-white border-t border-gray-700 rounded-b-lg">
                                <p className="text-gray-900">{section.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDetail;
