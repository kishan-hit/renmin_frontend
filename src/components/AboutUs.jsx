import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneCode: "+91",
    phoneNumber: "",
    field1: "",
    field2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 px-4 md:px-10 lg:px-32 gap-8 py-16 mt-16 md:mt-20">
      <Slide direction="left" duration={1000} triggerOnce className="w-full lg:w-[60%]">
        <div className="px-2 md:px-4 lg:px-12">
          <h2 className="text-4xl font-bold text-blue-900">About Renmin Education</h2>
          <h3 className="text-2xl text-gray-700 mb-6">Who we are</h3>
          <p className="text-gray-600 leading-relaxed">
            Renmin Education is a premier educational consultancy based in India,
            committed to guiding students toward successful admissions in the world’s
            most prestigious universities. With a team of experienced and highly qualified
            counselors, we specialize in providing personalized guidance to students
            aiming for higher education abroad. Our mission is to help students navigate
            the complexities of the international education landscape, ensuring they
            make informed decisions that align with their academic goals and career
            aspirations.
          </p>

          <button
            className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-[#bf1d1d] transition duration-300"
            onClick={() => navigate('/about')}
          >
            Read More
          </button>
        </div>
      </Slide>

      <div className="w-full lg:w-[40%]">
        <Fade direction='up' delay={1} triggerOnce>
          <div className="bg-[#002B49] text-white p-6 rounded-lg shadow-lg w-full mx-auto">
            <p className="text-lg text-center mt-2">We’d love to learn more about you!</p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input type="text" name="name" placeholder="Your Name" className="w-full p-2 rounded bg-white text-black" required />
              <input type="email" name="email" placeholder="Your Email" className="w-full p-2 rounded bg-white text-black" required />

              <select name="country" className="w-full p-2 rounded bg-white text-black" required>
                <option value="">Select Your Country</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
              </select>

              <div className="flex space-x-2">
                <select name="phoneCode" className="p-2 rounded bg-white text-black w-1/4">
                  <option value="+91">+91</option>
                  <option value="+7">+7</option>
                  <option value="+86">+86</option>
                </select>

                <input type="tel" name="phoneNumber" placeholder="Your Phone Number" className="p-2 rounded bg-white text-black w-3/4" required />
              </div>

              <select name="field1" className="w-full p-2 rounded bg-white text-black" required>
                <option value="">Select your state</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
              </select>

              <select name="field2" className="w-full p-2 rounded bg-white text-black" required>
                <option value="">Select your city</option>
                <option value="OptionA">Option A</option>
                <option value="OptionB">Option B</option>
              </select>

              <button type="submit" className="bg-[#004B87] text-white w-full p-2 rounded">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
