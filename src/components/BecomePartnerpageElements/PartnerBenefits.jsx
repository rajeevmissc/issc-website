import BP_benifit from "../../Assets/Images/BP_benifit.webp";

const PartnerBenefits = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Being a partner has its benefits
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src={BP_benifit} 
            alt="Team working together" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        {/* Benefits Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit Item */}
          <div className="flex gap-3">
            <span className="text-red-500 text-xl">✔</span>
            <div>
              <h3 className="font-semibold">Make money</h3>
              <p className="text-gray-600 text-sm">
                Earn a revenue share of up to 23% for as long as your referral has a paid plan with us.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-red-500 text-xl">✔</span>
            <div>
              <h3 className="font-semibold">Become a pro</h3>
              <p className="text-gray-600 text-sm">
                Learn how to include in your services and hone your skills with tailored training.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-red-500 text-xl">✔</span>
            <div>
              <h3 className="font-semibold">Promote your business</h3>
              <p className="text-gray-600 text-sm">
                Participate in case studies, press releases, speaking opportunities, and co-marketing.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-red-500 text-xl">✔</span>
            <div>
              <h3 className="font-semibold">Get the inside scoop</h3>
              <p className="text-gray-600 text-sm">
                Try our latest features and product launches before anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
