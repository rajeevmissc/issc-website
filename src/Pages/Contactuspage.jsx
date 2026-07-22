import React from "react";
import ContactFrom from "../components/ContactuspageElements/contactFrom";
import FAQ from "../components/ContactuspageElements/FAQsection";
import Map from "../components/ContactuspageElements/Map";
import CTASection from "../components/HomepageElements/CTASection";

const HomePage = () => {
  return (
    <div>
      <ContactFrom />
      <Map />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default HomePage;



