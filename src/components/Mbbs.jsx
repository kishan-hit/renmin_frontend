import React from 'react';
import { motion } from "framer-motion";


const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Mbbs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32 mt-16 md:mt-20">
      <motion.h2
        className="text-center text-blue-900 text-4xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        MBBS
      </motion.h2>

      <motion.h4
        className="text-gray-900 text-xl mx-auto mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Comprehensive Guide to Studying MBBS Courses in India, Russia, China,
        Kyrgyzstan, Kazakhstan, Bangladesh, Uzbekistan for Indian &amp; International Students
        with Renmin Education Consultancy -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Embarking on an MBBS (Bachelor of Medicine, Bachelor of Surgery) journey is a
        life-changing decision for aspiring doctors worldwide. It is a dream for many
        students to study medicine and pursue a career in healthcare, contributing to the
        well-being of society. However, getting into a reputable medical college can be
        challenging, especially for international students looking to study MBBS abroad.
        <br />
        In this comprehensive guide, we will provide you with an overview of studying
        MBBS in India, Russia, China, Kyrgyzstan, Kazakhstan, Bangladesh, and
        Uzbekistan. This will include information about top private and government medical
        colleges, admission processes, and the different scholarship opportunities available
        for Indian and international students. Renmin Education Consultancy offers expert
        guidance throughout the application process, helping students select the best
        universities, secure scholarships, and navigate visa processes.
      </motion.div>
    </section>
  )
}

export default Mbbs