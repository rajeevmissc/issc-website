import React from "react";
import HeroSection from "../components/HomepageElements/Hero_3";
import ChallengesSection from "../components/HomepageElements/ChallengesSection";
import ServicesSection from "../components/HomepageElements/ServicesSection";
import CTASection from "../components/HomepageElements/CTASection";
import ExpertInsights from "../components/HomepageElements/ExpertInsights";
import CareerSection from "../components/HomepageElements/CareerSection";
import HeroSliderMobile from "../components/HomepageElements/MobileHomePage";
const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <HeroSection /> 
        <ChallengesSection />
      </div>
      <HeroSliderMobile />
      <ServicesSection />
      <div className="bg-gray-100">
        <CTASection />
      </div>
      <ExpertInsights />
      <CareerSection />
    </div>
  );
};

export default HomePage;



