import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ServiceContent from "../components/ServiceContent";
import WhyChooseUs from "../components/WhyChooseUs";
import NavBar from "../components/navbar/NavBar";

const ServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ServiceContent />
      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default ServicePage;
