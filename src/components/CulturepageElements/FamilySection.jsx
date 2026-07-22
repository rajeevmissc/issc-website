import family_bg from "../../Assets/Images/family_bg.webp";

export default function HeroSection() {
  return (
    <div 
      className="relative w-6xl h-[600px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${family_bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative  text-white max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 py-3 tracking-wider">WE ARE A FAMILY</h2>
        <p className="mt-4 text-lg leading-relaxed">
          At the heart of our company lies a culture built on trust, 
          innovation, and collaboration. We foster an 
          environment where integrity shapes our actions, 
          creativity fuels progress, and teamwork drives success.
        </p>
      </div>
    </div>
  );
}
