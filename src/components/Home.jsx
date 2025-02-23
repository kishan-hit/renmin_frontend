import React from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import OurSuccessfulVisas from "./OurSuccessfulVisas";
import Stats from "./Stats";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-200">
      <NavBar />
      <AboutUs />
      <OurSuccessfulVisas />
      <Stats />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
