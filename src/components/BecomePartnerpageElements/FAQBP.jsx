import { useState } from "react";

const faqs = [
  { question: "What services do you offer?", answer: "We provide expert consulting in accounting, audit, taxation, mergers & acquisitions (M&A), and financial strategy." },
  { question: "How do I schedule a consultation?", answer: "You can schedule a consultation by contacting us via email or phone. Our team will assist you in setting up an appointment." },
  { question: "What industries do you specialize in?", answer: "We specialize in serving businesses across finance, corporate sectors, and emerging startups." },
  { question: "What is your approach to mergers & acquisitions?", answer: "We offer end-to-end M&A consulting, including due diligence, valuation, negotiation, and post-merger integration strategies." },
  { question: "Do you provide ongoing financial advisory services?", answer: "Yes, we offer continuous support through tailored financial advisory packages, helping businesses grow and comply with regulations." },
  { question: "How qualified are your consultants?", answer: "Our consultants have extensive experience, holding certifications in CPA, CFA, and other financial domains." },
  { question: "What tax services do you provide?", answer: "We offer tax planning, compliance, and advisory services to help businesses optimize their tax strategies and meet legal obligations." },
  { question: "Can you assist with financial risk management?", answer: "Yes, we provide risk assessment and mitigation strategies to help businesses navigate financial uncertainties and maintain stability." },
  { question: "Do you offer bookkeeping and accounting support?", answer: "Absolutely! We provide full-cycle bookkeeping, financial reporting, and accounting services tailored to your business needs." },
  { question: "How can you help with corporate financial restructuring?", answer: "We assist businesses in restructuring their finances, optimizing debt structures, and improving financial efficiency to enhance profitability." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-2">Answers to Common Inquiries About Our Consulting Services</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}