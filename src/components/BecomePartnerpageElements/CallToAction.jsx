import BG from "../../Assets/Images/BP.webp";
const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#322450] via-[#322450] to-[#e41e30] p-10 rounded-xl flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto text-white">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4">Let’s do this</h2>
        <p className="text-lg mb-6">
          We’re looking forward to doing great things together—what are you
          waiting for?
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center">
          <span className="mr-2">🚀</span> Become a partner
        </button>
      </div>
      <div className="md:w-1/2 p-2 flex justify-center rounded-xl">
        <img
          src={BG}
          alt="Person smiling"
          className="w-full max-w-xs rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CallToAction;
