import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import profile from "../assets/images/profile.png";

const testimonials = [
  {
    name: "Ritika Sharma",
    university: "V.N. Karazin Kharkiv National University",
    image: profile,
    review:
      "Renmin Education provided me with the best guidance for my MBBS admission abroad. They helped me choose the right university and made the process stress-free!",
  },
  {
    name: "Aryan Singh",
    university: "Kazan Federal University",
    image: profile,
    review:
      "I had so many doubts about studying abroad, but Renmin Education guided me at every step. Thanks to them, I am now studying at a top-ranked university in Russia!",
  },
  {
    name: "Pooja Verma",
    university: "Orenburg State Medical University",
    image: profile,
    review:
      "The team at Renmin Education is very supportive and professional. They helped me with admission, visa, and even travel arrangements. Highly recommended!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { name, university, image, review } = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 py-16 px-6 text-center relative">
      <h2 className="text-3xl font-bold text-blue-900">What Our Students Say</h2>
      <div className="w-16 h-1 bg-blue-900 mx-auto my-4"></div>

      <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg relative">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow-md"
        />

        <h3 className="text-lg font-bold text-blue-900 mt-4">{name}</h3>
        <p className="text-sm text-gray-500 font-medium">{university}</p>

        <p className="text-gray-600 mt-4 italic px-4 relative">
          <span className="text-4xl text-blue-900 absolute left-0 -top-2">❝</span>
          {review}
          <span className="text-4xl text-blue-900 absolute right-0 -bottom-2">❞</span>
        </p>

        <button
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          onClick={prevTestimonial}
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          onClick={nextTestimonial}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
