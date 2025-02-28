import React, { useState } from "react";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import logo from "../assets/images/logo3.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const [isMobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [isCountriesOpen, setCountriesOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#bf1d1d] shadow-md px-6 md:px-12 lg:px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 bg-white rounded-full p-1"
          />
        </div>

        <div className="hidden lg:flex space-x-8 text-white font-medium items-center">
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About Us
          </div>
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/services")}
          >
            Our Services
          </div>
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/scholarship")}
          >
            Scholarship
          </div>
          <div className="relative">
            <div
              className="hover:text-gray-300 cursor-pointer flex items-center"
              onClick={() => setCountriesOpen(!isCountriesOpen)}
            >
              Countries <FaChevronDown className="ml-1" />
            </div>
            {isCountriesOpen && (
              <div className="absolute left-0 bg-white text-black shadow-md mt-2 py-2 w-48">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/countries/usa")}
                >
                  USA
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/countries/canada")}
                >
                  Canada
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/countries/uk")}
                >
                  UK
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="hover:text-gray-300 cursor-pointer flex items-center"
              onClick={() => setCoursesOpen(!isCoursesOpen)}
            >
              Courses <FaChevronDown className="ml-1" />
            </div>
            {isCoursesOpen && (
              <div className="absolute left-0 bg-white text-black shadow-md mt-2 py-2 w-48">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/courses/engineering")}
                >
                  Engineering
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/courses/medicine")}
                >
                  Medicine
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate("/courses/business")}
                >
                  Business
                </div>
              </div>
            )}
          </div>
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </div>
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </div>
        </div>

        <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#bf1d1d] text-white flex flex-col items-start py-6 px-6 space-y-4">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/about")}>
            About Us
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/services")}>
            Our Services
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/scholarship")}
          >
            Scholarship
          </div>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => setMobileCountriesOpen(!isMobileCountriesOpen)}
          >
            Countries <FaChevronDown className="ml-1" />
          </div>
          {isMobileCountriesOpen && (
            <div className="pl-4">
              <div
                className="cursor-pointer"
                onClick={() => navigate("/countries/usa")}
              >
                USA
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/countries/canada")}
              >
                Canada
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/countries/uk")}
              >
                UK
              </div>
            </div>
          )}
          <div
            className="cursor-pointer flex items-center"
            onClick={() => setMobileCoursesOpen(!isMobileCoursesOpen)}
          >
            Courses <FaChevronDown className="ml-1" />
          </div>
          {isMobileCoursesOpen && (
            <div className="pl-4">
              <div
                className="cursor-pointer"
                onClick={() => navigate("/courses/engineering")}
              >
                Engineering
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/courses/medicine")}
              >
                Medicine
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/courses/business")}
              >
                Business
              </div>
            </div>
          )}
          <div className="cursor-pointer" onClick={() => navigate("/gallery")}>
            Gallery
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
