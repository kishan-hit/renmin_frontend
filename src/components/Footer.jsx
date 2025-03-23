import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/logo3.png";

const Footer = () => {
  const handleOpenLink = () => {
    window.open(
      "https://maps.app.goo.gl/p7SRxfELNUchFwe18",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="relative z-10 bg-[#161616] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section */}
        <div className="md:w-1/3">
          <div className="bg-white p-1 rounded-lg inline-block">
            <img src={logo} alt="Company Logo" className="w-24" />
          </div>
          <p className="text-gray-200 text-sm mt-4 mb-4">
            Renmin Education is a premier educational consultancy based in
            India, committed to guiding students toward successful admissions in
            the world’s most prestigious universities.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://wa.me/917033919405"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-gray-300 hover:text-white text-xl cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/renmin_education?igsh=MW84dWc5bTBsM29heA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-300 hover:text-white text-xl cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/share/1B6FwyTQNY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-300 hover:text-white text-xl cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          {/* Call / WhatsApp Card */}
          <a
            href="tel:+917033919405"
            className="block"
            target="_self"
            rel="noopener noreferrer"
          >
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer">
              <FaPhoneAlt className="text-[#bf1d1d] text-2xl" />
              <div>
                <h4 className="text-[#bf1d1d] font-semibold">
                  Call / WhatsApp
                </h4>
                <p className="text-gray-600 text-sm">+91 7033 919 405</p>
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div
            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
            onClick={handleOpenLink}
          >
            <FaMapMarkerAlt className="text-[#bf1d1d] text-2xl" />
            <div>
              <h4 className="text-[#bf1d1d] font-semibold">Location</h4>
              <p className="text-gray-600 text-sm">
                3rd Floor Logix Park, Near Sector 16 Metro Station, Noida, Uttar
                Pradesh, India 201301
              </p>
            </div>
          </div>

          {/* Mail Card */}
          <a
            href="mailto:renmineducation@gmail.com"
            className="block"
            target="_self"
            rel="noopener noreferrer"
          >
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer">
              <FaEnvelope className="text-[#bf1d1d] text-2xl" />
              <div>
                <h4 className="text-[#bf1d1d] font-semibold">Mail</h4>
                <p className="text-gray-600 text-sm">
                  renmineducation@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-100 text-xs mt-6">
        Copyright © 2025 All rights reserved by Renmin Education.
      </div>
    </footer>
  );
};

export default Footer;
