const HowItWorks = () => {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Here’s how it works</h2>
  
        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="flex items-center bg-red-500 text-white p-6 md:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <span className="text-5xl md:text-6xl font-extrabold mr-4">1</span>
            <p className="text-lg font-medium">Fill out the 2-minute partner application form</p>
          </div>
  
          {/* Step 2 */}
          <div className="flex items-center bg-blue-100 text-gray-900 p-6 md:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <span className="text-5xl md:text-6xl font-extrabold text-blue-500 mr-4">2</span>
            <p className="text-lg font-medium">We’ll review your application within 2 weeks</p>
          </div>
  
          {/* Step 3 */}
          <div className="flex items-center bg-pink-200 text-gray-900 p-6 md:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <span className="text-5xl md:text-6xl font-extrabold text-pink-600 mr-4">3</span>
            <p className="text-lg font-medium">If all’s well, you’ll get an invitation to join us on PartnerStack</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  