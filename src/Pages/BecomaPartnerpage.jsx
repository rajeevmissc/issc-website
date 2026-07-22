import HeroSection from "../components/BecomePartnerpageElements/HeroSection";
import PartnerBenefits from "../components/BecomePartnerpageElements/PartnerBenefits";
import HowItWorks from "../components/BecomePartnerpageElements/HowItWorks";
import PromoBanner from "../components/BecomePartnerpageElements/PromoBanner";
import TestimonialPartnerSlider from "../components/BecomePartnerpageElements/TestimonialPartnerSlider";
import CallToAction from "../components/BecomePartnerpageElements/CallToAction";
import CTA_secoundry_section from "../components/CommonComponets/CTA_secoundry_section";
import FAQ from "../components/BecomePartnerpageElements/FAQBP";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PartnerBenefits />
      <HowItWorks />
      <PromoBanner />
      <TestimonialPartnerSlider />
      <FAQ />
      <CallToAction />
      <CTA_secoundry_section />
    </div>
  );
};

export default HomePage;



