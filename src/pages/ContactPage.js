import React from "react";
import Location from "../components/Location";
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Location />
      <Footer />
    </div>
  );
};

export default ContactPage;
