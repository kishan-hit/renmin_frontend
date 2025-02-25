import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import logo from '../assets/images/logo3.png';
import { useNavigate } from 'react-router-dom';

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
                    <div className="hover:text-gray-300 cursor-pointer" onClick={() => navigate('/')} > Home</div>
                    <div className="hover:text-gray-300 cursor-pointer" onClick={() => navigate('/about')}>About Us</div>
                    <div className="hover:text-gray-300 cursor-pointer" onClick={() => navigate('/services')} > Our Services</div>

                    <div
                        className="relative flex items-center space-x-1 cursor-pointer"
                        onMouseEnter={() => setCountriesOpen(true)}
                        onMouseLeave={() => setCountriesOpen(false)}
                    >
                        <div className="flex items-center hover:text-gray-300 py-4">
                            Countries <FaChevronDown className="ml-1 text-sm" />
                        </div>
                        {isCountriesOpen && (
                            <div className="absolute left-0 top-full w-40 bg-white shadow-md rounded-md flex flex-col text-gray-700 font-normal z-10">
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">China</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Russia</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Krygyzstan</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Bangladesh</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Uzbekistan</div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative flex items-center space-x-1 cursor-pointer"
                        onMouseEnter={() => setCoursesOpen(true)}
                        onMouseLeave={() => setCoursesOpen(false)}
                    >
                        <div className="flex items-center hover:text-gray-300 py-4">
                            Courses <FaChevronDown className="ml-1 text-sm" />
                        </div>
                        {isCoursesOpen && (
                            <div className="absolute left-0 top-full w-48 bg-white shadow-md rounded-md flex flex-col text-gray-700 font-normal z-10">
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Chinese Language</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Masters</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">Bachelors</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">PhD</div>
                                <div className="px-4 py-2 cursor-pointer hover:bg-blue-200">MBBS</div>
                            </div>
                        )}
                    </div>

                    <div className="hover:text-gray-300 cursor-pointer">Scholarship</div>
                    <div className="hover:text-gray-300 cursor-pointer">Gallery</div>
                    <div className="hover:text-gray-300 cursor-pointer" onClick={() => navigate('/contact-us')}>Contact Us</div>
                </div>

                <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {
                isMobileMenuOpen && (
                    <div className="lg:hidden bg-[#bf1d1d] text-white flex flex-col items-start py-6 px-6 space-y-4">
                        <div className="cursor-pointer" onClick={() => navigate('/')}>Home</div>
                        <div className="cursor-pointer" onClick={() => navigate('/about')}>About Us</div>
                        <div className="cursor-pointer" onClick={() => navigate('/services')}>Our Services</div>

                        <div className="cursor-pointer flex justify-between items-center w-full" onClick={() => setMobileCountriesOpen(!isMobileCountriesOpen)}>
                            <span>Countries</span>
                            {isMobileCountriesOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                        {isMobileCountriesOpen && (
                            <div className="flex flex-col pl-4 space-y-2 w-full">
                                <div className="cursor-pointer hover:bg-blue-200 py-1">China</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Russia</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Krygyzstan</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Bangladesh</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Uzbekistan</div>
                            </div>
                        )}

                        <div className="cursor-pointer flex justify-between items-center w-full" onClick={() => setMobileCoursesOpen(!isMobileCoursesOpen)}>
                            <span>Courses</span>
                            {isMobileCoursesOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                        {isMobileCoursesOpen && (
                            <div className="flex flex-col pl-4 space-y-2 w-full">
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Chinese Language</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Masters</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">Bachelors</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">PhD</div>
                                <div className="cursor-pointer hover:bg-blue-200 py-1">MBBS</div>
                            </div>
                        )}

                        <div className="cursor-pointer">Scholarship</div>
                        <div className="cursor-pointer">Gallery</div>
                        <div className="cursor-pointer" onClick={() => navigate('/contact-us')}>Contact Us</div>
                    </div>
                )
            }
        </nav>
    );
};

export default NavBar;
