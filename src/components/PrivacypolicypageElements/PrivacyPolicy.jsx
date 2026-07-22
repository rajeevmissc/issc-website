import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-600 text-white text-center py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/mnt/data/Intro.png')" }}
        ></div>
        <div className="relative">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-8 text-gray-700">
        <p>
          ISSC (International Shared Support Centre) (“ISSC”, “we”, “our”, “us”)
          is committed to protecting the privacy of visitors to our website and
          individuals who choose to share their personal data with us. This
          Privacy Policy explains how we collect, use, store, and protect
          personal information.
        </p>
        <p>
          By using our website, you consent to the terms of this Privacy Policy.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number, and other details you provide when you fill in our “Get in
              Touch” form.
            </li>
            <li>
              <strong>Job Application Information:</strong> Résumés, cover
              letters, qualifications, employment history, and any other details
              provided when applying for a role with ISSC.
            </li>
          </ul>
          <p className="mt-2">
            We do not use cookies or automated tracking tools on our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            2. How We Use Personal Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Responding to your inquiries or requests submitted through our website.</li>
            <li>Assessing applications and considering candidates for employment opportunities.</li>
            <li>Communicating with you regarding services, opportunities, or information you requested.</li>
            <li>Complying with legal and regulatory obligations.</li>
          </ul>
          <p className="mt-2">
            We will not sell, rent, or trade your personal data to third
            parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">3. Sharing of Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Internal Teams:</strong> To respond to your queries or
              review job applications.
            </li>
            <li>
              <strong>Service Providers:</strong> Trusted third parties who
              support our business operations (e.g., secure email hosting, cloud
              storage), bound by confidentiality obligations.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law or to
              protect our legal rights.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            4. Data Storage and Retention
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this policy, unless a longer retention
              period is required by law.
            </li>
            <li>
              Résumés and applications may be stored for future recruitment
              purposes unless you request deletion.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of electronic
            transmission or storage is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            6. International Data Transfers
          </h2>
          <p>
            As we serve clients and applicants globally, your personal data may
            be transferred and stored outside your home country. In such cases,
            we ensure appropriate safeguards are in place to protect your data
            in accordance with applicable data protection laws.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">7. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access, update, or correct your personal information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict the processing of your personal data.</li>
            <li>Withdraw consent (where applicable).</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at the email address
            below.
          </p>
          
        </div>

         <div>
          <h2 className="text-2xl font-bold mb-2">8. Minors </h2>
          <p>
            Our website is not directed at children under the age of 16,
            and we do not knowingly collect personal data from children. 
            If we learn we have collected data from a child, we will promptly delete it.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">9. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technologies, or legal requirements. Any
            updates will be posted on this page with a revised effective date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions or requests regarding this Privacy Policy
            or how your personal information is handled, please contact us at:
          </p>
          <p className="mt-2 font-semibold">
            International Shared Support Centre (ISSC) <br />
            Email: info@issc.co.in <br />
            Address: 448-a, Enkay Square, Udyog Vihar Phase V, Sector-19, Gurugram, Haryana 122008
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
