import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../assets/images/logo3.png';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-[#161616] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">

                <div className="md:w-1/3">
                    <div className="bg-white p-1 rounded-lg inline-block">
                        <img src={logo} alt="Company Logo" className="w-24" />
                    </div>
                    <p className="text-gray-200 text-sm mt-4 mb-4">
                        Renmin Education is a premier educational consultancy based in India,
                        committed to guiding students toward successful admissions in the world’s
                        most prestigious universities.
                    </p>
                    <div className="flex space-x-3">
                        <FaWhatsapp className="text-gray-300 hover:text-white text-xl cursor-pointer" />
                        <FaInstagram className="text-gray-300 hover:text-white text-xl cursor-pointer" />
                        <FaFacebook className="text-gray-300 hover:text-white text-xl cursor-pointer" />
                    </div>
                </div>

                <div className="md:w-1/3 flex flex-col space-y-6 mt-6 md:mt-0">
                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                        <FaPhoneAlt className="text-[#bf1d1d] text-2xl" />
                        <div>
                            <h4 className="text-[#bf1d1d] font-semibold">Call / WhatsApp</h4>
                            <p className="text-gray-600 text-sm">+91 7033 919 405</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                        <FaMapMarkerAlt className="text-[#bf1d1d] text-2xl" />
                        <div>
                            <h4 className="text-[#bf1d1d] font-semibold">Location</h4>
                            <p className="text-gray-600 text-sm">
                                3 rd Floor Logix Park Near Sector 16 Metro station Noida Uttar
                                Pradesh India 201301
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                        <FaEnvelope className="text-[#bf1d1d] text-2xl" />
                        <div>
                            <h4 className="text-[#bf1d1d] font-semibold">Mail</h4>
                            <p className="text-gray-600 text-sm">renmineducation@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-100 text-xs mt-6">
                Copyright © 2025 All rights reserved by Renmin education.
            </div>
        </footer>
    );
};

export default Footer;
