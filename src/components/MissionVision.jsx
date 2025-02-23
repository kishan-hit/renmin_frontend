import React from "react";
import { FaBullseye, FaBinoculars } from "react-icons/fa";

const MissionVision = () => {
    return (
        <section className="bg-gray-200 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

                <div className="md:w-1/2 flex items-start">
                    <FaBullseye className="text-[#bf1d1d] text-5xl mr-4" />
                    <div>
                        <h2 className="text-[#bf1d1d] text-3xl font-bold flex items-center">
                            Our Mission
                            <span className="ml-2 w-10 h-1 bg-[#bf1d1d] inline-block"></span>
                        </h2>
                        <ul className="mt-4 space-y-2 text-lg text-gray-700 leading-relaxed">
                            <li>🔹 Renmin Education aims to empower students by guiding them toward successful admissions in top universities worldwide.</li>
                            <li>🔹 We are dedicated to providing personalized mentorship, ensuring students make informed decisions for their academic and professional careers.</li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/2 flex items-start">
                    <FaBinoculars className="text-[#bf1d1d] text-5xl mr-4" />
                    <div>
                        <h2 className="text-[#bf1d1d] text-3xl font-bold flex items-center">
                            Our Vision
                            <span className="ml-2 w-10 h-1 bg-[#bf1d1d] inline-block"></span>
                        </h2>
                        <ul className="mt-4 space-y-2 text-lg text-gray-700 leading-relaxed">
                            <li>🔹 To become the most trusted and ethical educational consultancy, committed to student success.</li>
                            <li>🔹 We strive to enhance global learning opportunities by connecting students with institutions that align with their aspirations.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
