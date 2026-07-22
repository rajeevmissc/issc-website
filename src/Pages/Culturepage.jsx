import HeroSection from "../components/CulturepageElements/HeroSection";
import VisionSection from "../components/CulturepageElements/VisonMision";
import FamilySection from "../components/CulturepageElements/FamilySection";
import ValuesAndEnviroment from "../components/CulturepageElements/ValuesAndEnviroment";
import AllPosts from "../components/CulturepageElements/AllPosts";
import CTA_Team from "../components/CareerpageElements/CTA_Team";
const FAQ = () => {
  return (
    <div>
      <HeroSection />
      <VisionSection />
      <ValuesAndEnviroment />
      <FamilySection />
      <AllPosts />
      <div className="bg-gray-100">
        <CTA_Team />
      </div>
    </div>
  );
};

export default FAQ;



