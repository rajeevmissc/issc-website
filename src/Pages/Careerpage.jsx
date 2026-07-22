import React from "react";
import ImpactSection from "../components/CareerpageElements/ImpactSection";
import HiringProcess from "../components/CareerpageElements/HiringProcess";
import Benefits from "../components/CareerpageElements/Benefits";
import CTA_Team from "../components/CareerpageElements/CTA_Team";
import AllPosts from "../components/CulturepageElements/AllPosts";
import AdditionContent from "../components/CareerpageElements/AdditionContent";
const HomePage = () => {
  return (
    <div>
      <ImpactSection />
      <Benefits />
      <AdditionContent />
      <HiringProcess />
      <AllPosts />
      <CTA_Team />
    </div>
  );
};

export default HomePage;

