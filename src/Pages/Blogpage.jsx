import React from "react";
import HeroSection from "../components/BlogpageElements/HeroSection";
import FAQ from "../components/ContactuspageElements/FAQsection";
import CTA_secoundry_section from "../components/CommonComponets/CTA_secoundry_section";
import AllPosts from"../components/BlogpageElements/AllPosts";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AllPosts />
      <FAQ />
      <CTA_secoundry_section />
    </div>
  );
};

export default HomePage;



