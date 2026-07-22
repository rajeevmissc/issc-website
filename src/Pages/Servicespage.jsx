import React from "react";
import HeroSection from "../components/HomepageElements/HeroSection2";
import ServicesSection from "../components/ServicespageElements/ServicesSection";
import ChooseusSection from "../components/ServicespageElements/ChooseusSection";
import CTASection from "../components/HomepageElements/CTASection";
import CaseStudies from "../components/ServicespageElements/Casestudies";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ChooseusSection />
      <CTASection />
      <CaseStudies />
    </div>
  );
};

export default HomePage;



