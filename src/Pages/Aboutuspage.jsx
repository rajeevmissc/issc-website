import HeroSection from "../components/AboutuspageElements/HeroSection";
import VisionMisionSection from "../components/AboutuspageElements/VisionMisionSection"; 
import CoreValues from  "../components/AboutuspageElements/CoreValues";
import CTA_secoundry_section from "../components/CommonComponets/CTA_secoundry_section";
import MeetOurTeam from "../components/HomepageElements/MeetOurTeam";
import CTASection from "../components/HomepageElements/CTASection";
import FounderQuote from "../components/AboutuspageElements/FounderQuotes";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <VisionMisionSection />
      <CoreValues />
      {/* <FounderQuote/> */}
      <CTASection />
      <MeetOurTeam />
      <CTA_secoundry_section />

    </div>
  );
};

export default HomePage;



