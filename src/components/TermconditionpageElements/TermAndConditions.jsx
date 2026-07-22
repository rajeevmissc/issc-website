const TermsAndConditions = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-600 text-white text-center py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/mnt/data/Intro.png')" }}
        ></div>
        <div className="relative">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-lg">Effective Date: 2nd September 2025</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-8 text-gray-700">
        <p>
          Welcome to the website of ISSC (International Shared Support Centre)
          (“ISSC”, “we”, “our”, “us”). By accessing or using our website, you
          agree to comply with and be bound by the following Terms &
          Conditions. If you do not agree, please do not use our website.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-2">1. Use of the Website</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The content on this website is provided for general informational purposes only.</li>
            <li>You may not use this website for any unlawful purpose or in a way that may damage, disable, or impair the functionality of the site.</li>
            <li>ISSC reserves the right to suspend or restrict access to the website at our discretion.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">2. Intellectual Property Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All content, logos, designs, graphics, and text displayed on this website are the property of ISSC unless otherwise stated.</li>
            <li>You may view and download content for personal, non-commercial use only.</li>
            <li>Any unauthorized reproduction, distribution, or modification of website content is strictly prohibited.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">3. No Professional Advice</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The information on this website does not constitute professional, financial, or legal advice.</li>
            <li>ISSC provides consulting services only upon formal engagement. Reliance on website content alone is at your own risk.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">4. Third-Party Links</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Our website may contain links to third-party websites for convenience.</li>
            <li>ISSC does not endorse or control such external websites and is not responsible for their content or practices.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">5. Job Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>If you submit your résumé or other application materials, you consent to ISSC processing your personal data for recruitment purposes in accordance with our Privacy Policy.</li>
            <li>Applications may be retained for future opportunities unless you request deletion.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>While we strive to ensure the accuracy of information on this website, ISSC makes no warranties or representations of any kind, express or implied.</li>
            <li>ISSC shall not be held liable for any loss or damage, direct or indirect, arising from the use of this website.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">7. Indemnification</h2>
          <p>
            You agree to indemnify and hold ISSC, its affiliates, employees, and
            representatives harmless from any claims, liabilities, damages, or
            expenses arising out of your use of this website or violation of
            these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">8. Changes to Terms</h2>
          <p>
            ISSC may update or modify these Terms from time to time without
            prior notice. Any changes will be posted on this page with a revised
            effective date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
          <p>
            For any questions regarding these Terms & Conditions, please contact
            us at:
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

export default TermsAndConditions;
