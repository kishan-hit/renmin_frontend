import React, { useState, useEffect } from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import OurSuccessfulVisas from "./OurSuccessfulVisas";
import Stats from "./Stats";
import Modal from "./Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-red-200">
      <Modal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />

      <div className={isModalOpen ? "blur-md pointer-events-none" : ""}>
        <NavBar />
        <AboutUs />
        <OurSuccessfulVisas />
        <Stats />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
