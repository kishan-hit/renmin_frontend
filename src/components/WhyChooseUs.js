import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function WhyChooseUs() {
    const data = [
        {
            title: "Expert Counselors with Global Insight",
            description: "Our team of counselors is equipped with in -depth knowledge of global universities, admission requirements, and career trends.We understand what institutions are looking for and guide you in presenting your best self."
        },
        {
            title: "Tailored Solutions for Every Student",
            description: "We know that each student has different aspirations, whether it’s pursuing a career in technology, business, healthcare, or the arts. We help you choose the best-fit university and program based on your interests, academic background, and career objectives."
        },
        {
            title: "End-to-End Services",
            description: "From selecting universities to visa guidance, we provide end to end assistance to ensure a seamless application process. Our services include: University and course selection, Assistance with applications and documentation, Preparing for entrance exams and interviews, Guidance on securing scholarships and financial aid, Visa counseling and travel arrangements"
        },
        {
            title: "Proven Track Record of Success",
            description: "With years of experience and a track record of successfully placing students in top universities, Renmin Education has built a strong reputation in the field of international education consultancy. Our students have been admitted to prestigious institutions like Harvard, MIT, Oxford, Cambridge, and many others."
        },
        {
            title: "Scholarships and Financial Aid",
            description: "We work closely with universities to keep our students informed about scholarship opportunities and financial aid options, helping make their education abroad more affordable."
        },
        {
            title: "Post-Admission Support",
            description: "Our services don’t end with the acceptance letter. We offer post-admission support, including pre-departure orientation, guidance on accommodation, and cultural acclimatization tips, ensuring that students feel confident and prepared for their academic journey abroad."
        },
        {
            title: "Global Reach with Local Expertise",
            description: "While our headquarters are in India, Renmin Education’s impact spans the globe. We have established strong relationships with a wide range of international universities and colleges, enabling us to offer our students access to the best educational institutions worldwide. Our expertise covers universities in the United States, the United Kingdom, Europe, Canada, Australia, and other sought-after destinations for higher education."
        },
        {
            title: "Student-Centered Approach",
            description: "At Renmin Education, our students are at the heart of everything we do. We prioritize their individual needs, ensuring that every step of the application process is guided with care and attention. Our team offers one-on-one consultations to understand each student’s academic background, career goals, and personal preferences. This allows us to recommend the best institutions and programs that will set them on the path to success."
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="bg-gray-100">
            <div className='px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 bg-gray-200'>
                <h2 className="text-center text-blue-900 text-4xl font-bold">Why Choose Us?</h2>

                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="p-4 h-60 md:h-[17rem] mb-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-110 hover:shadow-xl duration-700">
                                <div>
                                    <div className='text-2xl font-bold text-[#bf1d1d] mb-1'>{item.title}</div>
                                    <div className='text-gray-700 h-32 overflow-y-auto text-justify'>{item.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
