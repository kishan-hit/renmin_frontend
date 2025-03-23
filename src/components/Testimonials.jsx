import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import profile from "../assets/images/profile.png";
import Abdal from '../assets/images/testimonials/Abdal.jpeg';
import Alfaiz from '../assets/images/testimonials/Alfaiz.jpeg';
import Amaan from '../assets/images/testimonials/Amaan.jpeg';
import Ankita from '../assets/images/testimonials/Ankita.jpeg';
import Kaif from '../assets/images/testimonials/Kaif.jpeg';
import Nisha from '../assets/images/testimonials/Nisha.jpeg';
import Pooja from '../assets/images/testimonials/Pooja.jpeg';
import Prachi from '../assets/images/testimonials/Prachi.jpeg';
import Shams from '../assets/images/testimonials/Shams.jpeg';

const testimonials = [
  {
    name: "Alfaiz Sheikh",
    university: "Northwestern Polytechnical University",
    image: Alfaiz,
    review:
      "Renmin Education helped me to get a fully funded scholarship in B.Tech (Material Science & Engineering) at Northwestern Polytechnical University, Xi'an, China.",
  },
  {
    name: "Mohd Abdal",
    university: "Zhengzhou University",
    image: Abdal,
    review:
      "Renmin Education helped me to get admission to Zhengzhou University in International Economics & Trade under a partial scholarship.",
  },
  {
    name: "Pooja Venkatesh",
    university: "Yangzhou University",
    image: Pooja,
    review:
      "Hi, my name is Pooja Venkatesh. I am from Tamil Nadu. Renmin Education helped me to get admission in the Chinese language at Yangzhou University.",
  },
  {
    name: "Amaan",
    university: "Samarkand State Medical University",
    image: Amaan,
    review:
      "Hi, my name is Amaan. I am from Uttar Pradesh. Renmin Education helped me to get MBBS admission in Samarkand State Medical University, Uzbekistan.",
  },
  {
    name: "Ankita",
    university: "Pskov State Medical University",
    image: Ankita,
    review:
      "Hi, my name is Ankita. I am from Haryana. Renmin Education helped me to get MBBS admission in Pskov State Medical University, Russia - 2024.",
  },
  {
    name: "Prachi",
    university: "Perm State Medical University",
    image: Prachi,
    review:
      "Hi, my name is Prachi. I am from Delhi. Renmin Education helped me to get MBBS admission in Perm State Medical University, Russia - 2024.",
  },
  {
    name: "Shams",
    university: "Nantong University",
    image: Shams,
    review:
      "Hi, I am Shams from Afghanistan. Renmin Education helped me to get MBA admission under a fully funded scholarship at Nantong University - 2024.",
  },
  {
    name: "Nisha",
    university: "International Business at Nanjing",
    image: Nisha,
    review:
      "Hi, my name is Nisha. I am from Punjab. Renmin Education helped me to get admission in International Business at Nanjing under a scholarship.",
  },
  {
    name: "Kaif",
    university: "Orenburg State Medical University",
    image: Kaif,
    review:
      "Hi, my name is Kaif. I am from Delhi. Got admission in the MBBS course at Orenburg State Medical University, Russia - 2024. Renmin Education helped us a lot.",
  }
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
    <section className="bg-gray-100 py-16 px-6 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-blue-900">What Our Students Say</h2>
      <div className="w-16 h-1 bg-blue-900 mx-auto my-4"></div>

      <div className="relative max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full shadow-md"
        />

        <h3 className="text-lg font-bold text-blue-900 mt-4">{name}</h3>
        <p className="text-sm text-gray-500 font-medium">{university}</p>

        <p className="text-gray-600 mt-4 italic px-4 relative">
          <span className="text-4xl text-blue-900 absolute left-0 -top-2">❝</span>
          {review}
          <span className="text-4xl text-blue-900 absolute right-0 -bottom-2">❞</span>
        </p>

        <button
          className="absolute left-2 md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          onClick={prevTestimonial}
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-2 md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          onClick={nextTestimonial}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
