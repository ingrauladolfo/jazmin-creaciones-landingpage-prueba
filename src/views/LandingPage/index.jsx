import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SocialMediaButtons from "./SocialMediaButtons";
import ScrollToTopButton from "./ScrollToTopButton";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";
import LocateUsSection from "./LocateusSection";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocateUsSection />
      <SocialMediaButtons />
    </>
  );
};

export default LandingPage;
