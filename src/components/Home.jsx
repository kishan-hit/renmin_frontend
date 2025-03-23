import React, { useState, useEffect } from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";
import AboutUs from "./AboutUs";
import OurSuccessfulVisas from "./OurSuccessfulVisas";
import Stats from "./Stats";
import Modal from "./Modal";
// import SecondaryNav from "./SecondaryNav";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Modal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />

      <div className={isModalOpen ? "blur-md pointer-events-none" : ""}>
        {/* <SecondaryNav /> */}
        <NavBar />
        {/* <SecondaryNav /> */}
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
