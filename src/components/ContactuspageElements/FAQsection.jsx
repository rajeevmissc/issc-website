import { useState } from "react";

const faqs = [
  { question: "What is ISSC, and what does it do?", answer: "ISSC stands for the International Shared Support Centre. We are a collective of client and enablement service teams dedicated to delivering strategic support to partnering firms. Our primary mission is to help these firms provide exceptional client services efficiently. We achieve this through a range of services and access to our exceptional talent pool, equipping them to navigate the ever-evolving digital landscape." },
  { question: "What sets ISSC apart from other support centres?",answer: "ISSC stands out as a premier offshoring specialist committed to excellence, integrity, and social responsibility. We firmly believe in conducting business the right way, generating profit through ethical practices, and actively contributing to society. Apart from this, we have a first mover advantage in this field which is demonstrated through our exceptional client serving experience since 2018." },
  { question: "How can I get in touch with ISSC?", answer: "You can reach out to ISSC through our website's contact page. Whether you have inquiries about our services or wish to explore a potential partnership, we're here to assist you." },
  { question: "What types of services does ISSC offer?", answer: "ISSC offers a comprehensive suite of services, including audit, accounting advisory, IT advisory, taxation, risk advisory, business support services, digitalization, and bookkeeping. These services address various needs of our partnering firms and assist them in achieving their goals." },
  { question: "What is ISSC's approach to talent and growth?", answer: "At ISSC, we consider our people our most valuable assets. We create an environment that fosters personal and professional growth and believe in equality and respect for all individuals. We set ambitious goals and push ourselves to achieve them." },
  { question: "How does ISSC work?", answer: "ISSC works by building collaborative partnerships, sharing our expertise, and offering a range of services to enhance the capabilities and success of the firms we support." },
  { question: "How does ISSC ensure compliance?", answer: "ISSC ensures compliance through a multifaceted approach that includes regular assessments, robust procedures, and continuous monitoring. Our compliance team works diligently to stay updated with the current relevant regulations and industry standards. We conduct regular audits and assessments of our systems, processes, and controls to identify and eﬃciently address non-compliance issues. Our commitment to compliance is an integral part of our corporate culture, and we collaborate closely with stakeholders to maintain a high standard of adherence."}
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-2">Answers to Common Inquiries About Our Services</p>

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
