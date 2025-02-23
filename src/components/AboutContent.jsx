import React from 'react';
import aboutImage from '../assets/images/about.jpeg';
import expertImage from '../assets/images/expertGuidance.jpeg';

const AboutContent = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-20 lg:mt-24">
                <h1 className="text-4xl font-bold text-blue-900 text-center">About Us</h1>
                <p className="text-center mt-1 text-2xl text-gray-700 mb-6">
                    Renmin Education: Shaping Your Academic Future with Global Opportunities
                </p>

                <div className="flex flex-col md:flex-row items-center mt-10 space-y-6 md:space-y-0 md:space-x-8">
                    <div className="md:w-2/3">
                        <p className="text-gray-700 leading-relaxed">
                            Renmin Education is a premier educational consultancy based in India,
                            committed to guiding students toward successful admissions in the world’s
                            most prestigious universities. With a team of experienced and highly qualified
                            counselors, we specialize in providing personalized guidance to students
                            aiming for higher education abroad. Our mission is to help students navigate
                            the complexities of the international education landscape, ensuring they
                            make informed decisions that align with their academic goals and career
                            aspirations.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In today’s increasingly globalized world, studying abroad offers unparalleled
                            opportunities for personal growth, academic excellence, and career
                            advancement. Renmin Education understands the challenges students face
                            when selecting the right institution, program, and country for their higher
                            education journey. Whether you're aiming to study in the United States, the
                            United Kingdom, Canada, Australia, or any other top education hub, we are
                            here to make that dream a reality.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <img src={aboutImage} alt="Renmin Education" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-blue-900 mt-10">Expert Guidance for Your Academic Success</h2>
                <div className="flex flex-col md:flex-row items-center mt-6 space-y-6 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/3">
                        <img src={expertImage} alt="Expert Guidance" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-gray-700 leading-relaxed">
                            At Renmin Education, we believe that every student is unique, with their
                            own set of strengths, interests, and goals. Our expert counselors take a
                            personalized approach to ensure that each student is matched with the
                            institution and program that best suits their individual profile. We offer
                            comprehensive services that range from selecting the right course and
                            university to handling the entire application process, including document
                            preparation, test registration, and interview coaching.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Our team stays updated with the latest developments in the global education
                            sector, keeping track of admission trends, scholarship opportunities, and visa
                            policies. This ensures that our students are always informed about the best
                            options available to them. With a deep understanding of the admission
                            requirements for top universities worldwide, we help students craft compelling
                            applications that stand out in a competitive global marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutContent;
