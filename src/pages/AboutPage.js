import React from "react";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import Stats from "../components/Stats";
import MissionVision from "../components/MissionVision";
import NavBar from "../components/navbar/NavBar";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <AboutContent />
      <Stats />
      <MissionVision />
      <Footer />
    </div>
  );
};

export default AboutPage;
