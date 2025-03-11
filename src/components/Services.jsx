import React from "react";
import { motion } from "framer-motion";
import { Fade } from 'react-awesome-reveal';
import { FaUniversity, FaFileAlt, FaBook, FaMoneyBillWave, FaPassport, FaUserGraduate, FaPlane, FaHandshake, FaBriefcase, FaUsers } from "react-icons/fa";

const services = [
    {
        icon: <FaUniversity />,
        title: "University and Course Selection",
        description: "We help students choose the right universities and programs based on their academic background, career aspirations, and personal preferences."
    },
    {
        icon: <FaFileAlt />,
        title: "Application Assistance",
        description: "Our team provides step-by-step assistance with the entire application process, ensuring applications stand out in a highly competitive field."
    },
    {
        icon: <FaBook />,
        title: "Entrance Exam Guidance and Test Preparation",
        description: "We provide coaching and resources for standardized tests like GRE, GMAT, TOEFL, and IELTS to help students achieve top scores."
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Scholarships and Financial Aid Guidance",
        description: "We offer detailed information on scholarships, financial aid, and education loans to help students fund their education."
    },
    {
        icon: <FaPassport />,
        title: "Visa Counseling and Documentation",
        description: "We guide students through the visa application process, ensuring they understand requirements and deadlines for smooth approval."
    },
    {
        icon: <FaUserGraduate />,
        title: "Interview Coaching and Profile Building",
        description: "We provide tailored interview coaching and help build a strong academic and extracurricular profile to enhance admission chances."
    },
    {
        icon: <FaPlane />,
        title: "Pre-Departure Orientation and Travel Support",
        description: "We offer guidance on accommodation, health insurance, cultural adjustment, and travel arrangements to ease the transition abroad."
    },
    {
        icon: <FaHandshake />,
        title: "Post-Admission Support",
        description: "We continue supporting students after admission with academic preparation and connecting them with alumni for guidance."
    },
    {
        icon: <FaBriefcase />,
        title: "Career Counseling and Internship Opportunities",
        description: "We help students build careers by providing career counseling and connecting them with internship/job opportunities in their field."
    },
    {
        icon: <FaUsers />,
        title: "Alumni Network and Global Connections",
        description: "Our strong alumni network offers mentorship, job opportunities, and valuable connections for students studying abroad."
    }
];

const Services = () => {
    return (
        <section className="py-16 bg-gray-100">
            <Fade direction='up' delay={1} triggerOnce>
                <h2 className="text-center text-[#bf1d1d] text-4xl font-bold">Services We Offer</h2>
                <p className="text-center mt-1 text-2xl text-gray-700 mb-6 px-2">
                    Our Comprehensive Services: Tailored to Your Needs
                </p>
                <p className="text-gray-700 text-center max-w-6xl mx-auto mb-12 px-2">
                    At Renmin Education, we offer a range of services designed to make your journey
                    to studying abroad as smooth and successful as possible. Our end-to-end services
                    cover every aspect of your study abroad experience, including:
                </p>
            </Fade>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start bg-white shadow-[0px_4px_10px_#bf1d1d] p-6 rounded-lg border border-gray-200 hover:shadow-[0px_6px_14px_#bf1d1d] transition-shadow duration-300"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="text-[#bf1d1d] text-4xl mr-4">{service.icon}</div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mt-1">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
