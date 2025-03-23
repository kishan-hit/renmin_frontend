import React from 'react';
import { motion } from "framer-motion";
import AIIMS from '../assets/images/universities/AIIMS.jpeg';
import AltaiCollege from '../assets/images/universities/AltaiCollege.jpeg';
import BhartiVidyapeethCollege from '../assets/images/universities/BhartiVidyapeethCollege.jpeg';
import ChittagongCollege from '../assets/images/universities/ChittagongCollege.jpeg';
import ChristianMedicalCollege from '../assets/images/universities/ChristianMedicalCollege.jpeg';
import DhakaMedicalCollege from '../assets/images/universities/DhakaMedicalCollege.jpeg';
import JilinUniversity from '../assets/images/universities/JilinUniversity.jpeg';
import JIPMER from '../assets/images/universities/JIPMER.jpeg';
import KazakhUniversity from '../assets/images/universities/KazakhUniversity.jpeg';
import KazanFederalCollege from '../assets/images/universities/KazanFederalCollege.jpeg';
import KingGeorgeCollege from '../assets/images/universities/KingGeorgeCollege.jpeg';
import KyrgyzStateCollege from '../assets/images/universities/KyrgyzStateCollege.jpeg';
import LadyHardingeCollege from '../assets/images/universities/LadyHardingeCollege.jpeg';
import ManipalCollege from '../assets/images/universities/ManipalCollege.jpeg';
import MoscowStateCollege from '../assets/images/universities/MoscowStateCollege.jpeg';
import OshStateUniversity from '../assets/images/universities/OshStateUniversity.jpeg';
import PekingUniversity from '../assets/images/universities/PekingUniversity.jpeg';
import RamchnadraCollege from '../assets/images/universities/RamchnadraCollege.jpeg';
import RNRMU from '../assets/images/universities/RNRMU.jpeg';
import SamarkandStateCollege from '../assets/images/universities/SamarkandStateCollege.jpeg';
import SechenovUniversity from '../assets/images/universities/SechenovUniversity.jpeg';
import SemeyStateUniversity from '../assets/images/universities/SemeyStateUniversity.jpeg';
import SmolenskUniversity from '../assets/images/universities/SmolenskUniversity.jpeg';
import TashkentUniversity from '../assets/images/universities/TashkentUniversity.jpeg';
import XiamenUniversity from '../assets/images/universities/XiamenUniversity.jpeg';
import ZhejiangUniversity from '../assets/images/universities/ZhejiangUniversity.jpeg';
import FU from '../assets/images/universities/Fudan_University.jpeg';
import SJTU from '../assets/images/universities/SJTU.jpeg';
import ChinaMbbs from '../assets/images/feeDetails/MBBS_IN_CHINA.jpg';
import BangladeshMbbs from '../assets/images/feeDetails/MBBS_IN_BNGLADESH.jpg';
import RussiaMbbs from '../assets/images/feeDetails/MBBS_IN_RUSSIA.jpg';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const IndGvmtColleges = [
  {
    id: 1,
    name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    about: "One of India’s most prestigious medical colleges",
    specialization: "Offers MBBS courses with rigorous training and research",
    eligibility: "NEET (National Eligibility cum Entrance Test)",
    fees: "INR 1,000 - 5,000 per year",
    image: AIIMS,
  },
  {
    id: 2,
    name: "King George’s Medical University, Lucknow",
    about: "Established as one of the oldest medical universities in India",
    specialization: "Offers excellent clinical exposure and medical training",
    eligibility: "NEET qualification required",
    fees: "INR 20,000 - 30,000 per year",
    image: KingGeorgeCollege,
  },
  {
    id: 3,
    name: "Lady Hardinge Medical College, New Delhi",
    about: "One of the top colleges for women in India",
    specialization: "Offers world-class teaching facilities and infrastructure",
    eligibility: "NEET qualification required",
    fees: "INR 10,000 per year",
    image: LadyHardingeCollege,
  },
  {
    id: 4,
    name: "Christian Medical College (CMC), Vellore",
    about: "Christian minority community run medical college",
    specialization: "Known for its high-quality education, research, and patient care",
    eligibility: "NEET qualification required",
    fees: "INR 8 - 10 Lakhs per year for private seats",
    image: ChristianMedicalCollege,
  },
  {
    id: 5,
    name: "JIPMER, Puducherry",
    about: "Seeks to be a model for health systems in India through innovations in education",
    specialization: "Recognized globally for its research output and clinical training",
    eligibility: "NEET qualification required",
    fees: "INR 1,500 to 5,000 annually",
    image: JIPMER,
  },
];

const IndPrvtColleges = [
  {
    id: 1,
    name: "Sri Ramachandra Institute of Higher Education and Research, Chennai",
    about: "One of India’s most prestigious medical colleges",
    fees: "Approx INR 15 lakhs per year",
    image: RamchnadraCollege,
  },
  {
    id: 2,
    name: "Manipal College of Medical Sciences, Manipal",
    about: "Known for its research, medical infrastructure, and international student community",
    fees: "Around INR 18 Lakhs per year.",
    image: ManipalCollege,
  },
  {
    id: 3,
    name: "Bharati Vidyapeeth Medical College, Pune",
    about: "Provides high-quality education and training for aspiring doctors",
    fees: "Approx. INR 8 Lakhs per year",
    image: BhartiVidyapeethCollege,
  }
]

const RussiaGvmtColleges = [
  {
    id: 1,
    name: "Pirogov Russian National Research Medical University (RNRMU), Moscow",
    eligibility: "Students must have completed 12th grade in the science",
    fees: "Approximately USD 5,000 to USD 7,000 annually",
    image: RNRMU,
  },
  {
    id: 2,
    name: "Kazan Federal University, Kazan",
    eligibility: "High school diploma with science subjects",
    fees: "Approximately USD 4,000 to USD 6,000 per year",
    image: KazanFederalCollege,
  },
  {
    id: 3,
    name: "Altai State Medical University, Barnaul",
    eligibility: "12th-grade qualification with a focus on science",
    fees: "Approximately USD 3,000 to USD 5,000 annually",
    image: AltaiCollege,
  },
  {
    id: 4,
    name: "Moscow State Medical University",
    eligibility: "Completion of 12th grade with science subjects",
    fees: "Approximately USD 6,000 to USD 8,000 annually",
    image: MoscowStateCollege,
  }
];

const RussiaPrvtColleges = [
  {
    id: 1,
    name: "Sechenov University, Moscow",
    about: "Offers high-quality medical education in English and Russian.",
    fees: "Approximately USD 7,000 to USD 10,000 annually",
    image: SechenovUniversity,
  },
  {
    id: 2,
    name: "Smolensk State Medical University, Smolensk",
    about: "Known for affordable medical programs and excellent faculty.",
    fees: "Approximately USD 4,000 to USD 6,000 annually",
    image: SmolenskUniversity,
  }
];

const ChinaGvmtColleges = [
  {
    id: 1,
    name: "Peking University Health Science Center, Beijing",
    about: "One of China’s leading medical universities",
    eligibility: "Completion of 12th grade with science subjects",
    fees: "USD 4,000 to USD 6,000 annually",
    image: PekingUniversity,
  },
  {
    id: 2,
    name: "Fudan University, Shanghai",
    about: "Known for its prestigious medical faculty and research output.",
    eligibility: "High school diploma with a science background",
    fees: "USD 5,000 to USD 7,000 per year",
    image: FU,
  },
  {
    id: 3,
    name: "Shanghai Jiao Tong University, Shanghai",
    about: "Offers one of the best clinical and academic training programs.",
    eligibility: "High school graduation with science subjects",
    fees: "Around USD 6,000 to USD 8,000 per year",
    image: SJTU,
  },
  {
    id: 4,
    name: "Zhejiang University, Hangzhou",
    about: "Offers modern medical programs and research opportunities.",
    eligibility: "Completion of science subjects in high school",
    fees: "USD 5,000 to USD 7,000 annually",
    image: ZhejiangUniversity,
  }
];

const ChinaPrvtColleges = [
  {
    id: 1,
    name: "Jilin University, Changchun",
    about: "Offers advanced clinical and medical education",
    fees: "USD 4,000 to USD 6,000 per year",
    image: JilinUniversity,
  },
  {
    id: 2,
    name: "Xiamen University, Xiamen",
    about: "Known for providing medical programs in English for international students",
    fees: "USD 5,000 to USD 8,000 per year",
    image: XiamenUniversity,
  }
];

const KyrgyzstanColleges = [
  {
    id: 1,
    name: "Osh State University",
    about: "Offers an excellent MBBS program with an affordable fee structure",
    fees: "USD 3,000 to USD 5,000 per year",
    image: OshStateUniversity,
  },
  {
    id: 2,
    name: "Kyrgyz State Medical Academy, Bishkek",
    about: "Known for its world-class faculty and medical research facilities",
    fees: "USD 3,500 to USD 6,000 per year",
    image: KyrgyzStateCollege,
  }
];

const KazakhstanColleges = [
  {
    id: 1,
    name: "Kazakh National Medical University, Almaty",
    about: "Offers MBBS in English, focusing on practical training",
    fees: "USD 3,500 to USD 5,000 annually",
    image: KazakhUniversity,
  },
  {
    id: 2,
    name: "Semey State Medical University",
    about: "Known for its high-quality medical programs",
    fees: "USD 3,000 to USD 4,500 annually",
    image: SemeyStateUniversity,
  }
];

const BangladeshColleges = [
  {
    id: 1,
    name: "Dhaka Medical College, Dhaka",
    about: "One of the best government medical colleges in Bangladesh",
    fees: "Approximately USD 5,000 to USD 7,000 per year",
    image: DhakaMedicalCollege,
  },
  {
    id: 2,
    name: "Chittagong Medical College",
    about: "Offers comprehensive medical education with a focus on clinical training",
    fees: "USD 4,000 to USD 6,000 per year",
    image: ChittagongCollege,
  }
];

const UzbekistanColleges = [
  {
    id: 1,
    name: "Tashkent Medical Academy",
    about: "One of the top choices for international students",
    fees: "USD 3,000 to USD 5,000 annually",
    image: TashkentUniversity,
  },
  {
    id: 2,
    name: "Samarkand State Medical Institute",
    about: "Provides high-quality medical education with a focus on research.",
    fees: "USD 3,500 to USD 6,000 annually",
    image: SamarkandStateCollege,
  }
];

const data = [
  { country: "India", budget: "45 - 60 lakhs" },
  { country: "Russia", budget: "15 - 40 lakhs" },
  { country: "China", budget: "18 - 35 lakhs" },
  { country: "Kyrgyzstan", budget: "20 - 40 lakhs" },
  { country: "Uzbekistan", budget: "20 - 30 lakhs" },
  { country: "Bangladesh", budget: "30 - 50 lakhs" },
];

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

      <div className="flex justify-center mt-10 mb-10 px-4">
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-collapse border border-gray-400 w-full max-w-md sm:max-w-lg md:max-w-xl min-w-[300px] text-center shadow-lg"
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Country</th>
              <th className="border border-gray-400 px-4 py-2">Overall Budget</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{item.country}</td>
                <td className="border border-gray-400 px-4 py-2">{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      <motion.h4
        className="text-blue-900 text-xl mx-auto mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in India -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        India is home to some of the most prestigious medical universities, offering high-
        quality education, practical training, and research opportunities. Many international
        students, especially from neighboring countries like Nepal, Sri Lanka, Bangladesh,
        and even further countries, travel to India for their MBBS studies.
      </motion.div>

      {/* India */}
      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Government MBBS Colleges in India -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {IndGvmtColleges.map((gvmtInd) => (
          <motion.div
            key={gvmtInd.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtInd.image}
              alt={gvmtInd.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtInd.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtInd.about}, {gvmtInd.specialization}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Eligibility: </span>{gvmtInd.eligibility}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtInd.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Private MBBS Colleges in India -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {IndPrvtColleges.map((prvtInd) => (
          <motion.div
            key={prvtInd.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={prvtInd.image}
              alt={prvtInd.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {prvtInd.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {prvtInd.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{prvtInd.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Renmin Education Consultancy assists students with NEET exam preparation
          (if applicable).
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Provides detailed guidance on scholarships, visa applications, and university selection.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Helps with pre-arrival formalities and accommodation arrangements.
        </motion.li>
      </motion.ul>
      {/*  */}
      {/* Russia */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in Russia -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Russia is one of the most affordable and popular destinations for MBBS studies.
        Russian medical universities are recognized by the World Health Organization
        (WHO), Medical Council of India (MCI), and other global medical organizations.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Government Medical Universities in Russia -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {RussiaGvmtColleges.map((gvmtRus) => (
          <motion.div
            key={gvmtRus.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtRus.image}
              alt={gvmtRus.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtRus.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  <span className='text-gray-900 font-bold'>Eligibility: </span>{gvmtRus.eligibility}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtRus.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Private Medical Universities in Russia -
      </motion.h4> */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {RussiaPrvtColleges.map((prvtRus) => (
          <motion.div
            key={prvtRus.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={prvtRus.image}
              alt={prvtRus.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {prvtRus.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {prvtRus.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{prvtRus.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 mb-8"
        variants={cardVariants}
      >
        <motion.img
          src={RussiaMbbs}
          alt='ChinaMbbs'
          className="w-full object-cover"
          variants={fadeInVariants}
        />
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Helps students apply for scholarships available for Indian and international
          students.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Assists with visa applications and accommodation arrangements.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Provides guidance on university selection, admission procedures, and cost
          estimation.
        </motion.li>
      </motion.ul>
      {/* */}
      {/* China */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in China -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        China has become a top choice for medical education due to its affordable fees,
        advanced infrastructure, and wide recognition by global medical organizations.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Government Medical Universities in China -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ChinaGvmtColleges.map((gvmtChina) => (
          <motion.div
            key={gvmtChina.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtChina.image}
              alt={gvmtChina.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtChina.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtChina.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Eligibility: </span>{gvmtChina.eligibility}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtChina.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Private Medical Universities in China -
      </motion.h4> */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ChinaPrvtColleges.map((prvtChina) => (
          <motion.div
            key={prvtChina.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={prvtChina.image}
              alt={prvtChina.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {prvtChina.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {prvtChina.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{prvtChina.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 mb-8"
        variants={cardVariants}
      >
        <motion.img
          src={ChinaMbbs}
          alt='ChinaMbbs'
          className="w-full object-cover"
          variants={fadeInVariants}
        />
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Visa assistance, including guidance on Chinese student visas.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Helps students apply for scholarships such as the Chinese Government Scholarship and University-Specific Scholarships.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Provides pre-departure orientation and accommodation assistance.
        </motion.li>
      </motion.ul>
      {/* */}
      {/* Kyrgyzstan */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in Kyrgyzstan -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Kyrgyzstan offers a high standard of medical education at a very affordable cost,
        making it a preferred choice for Indian students seeking to pursue MBBS abroad.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Medical Universities in Kyrgyzstan -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {KyrgyzstanColleges.map((gvmtKyrg) => (
          <motion.div
            key={gvmtKyrg.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtKyrg.image}
              alt={gvmtKyrg.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtKyrg.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtKyrg.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Eligibility: </span>{gvmtKyrg.eligibility}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtKyrg.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Provides visa assistance and ensures smooth travel arrangements.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Helps students with university selection and scholarship applications.
        </motion.li>
      </motion.ul>
      {/* */}
      {/* Kazakhstan */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in Kazakhstan -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Kazakhstan is becoming a popular destination for students from India and abroad
        due to its affordable tuition and quality medical programs.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Medical Universities in Kazakhstan -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {KazakhstanColleges.map((gvmtKaz) => (
          <motion.div
            key={gvmtKaz.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtKaz.image}
              alt={gvmtKaz.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtKaz.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtKaz.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Eligibility: </span>{gvmtKaz.eligibility}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtKaz.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Helps with admission procedures, visa guidance, and accommodation.
        </motion.li>
        <motion.li variants={fadeInVariants}>
          Provides information about available scholarships for international students.
        </motion.li>
      </motion.ul>
      {/* */}
      {/* Bangladesh */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in Bangladesh -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Bangladesh offers a high standard of medical education at an affordable cost,
        making it an attractive option for Indian and international students.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Medical Colleges in Bangladesh -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {BangladeshColleges.map((gvmtBan) => (
          <motion.div
            key={gvmtBan.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtBan.image}
              alt={gvmtBan.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtBan.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtBan.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtBan.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 mb-8"
        variants={cardVariants}
      >
        <motion.img
          src={BangladeshMbbs}
          alt='ChinaMbbs'
          className="w-full object-cover"
          variants={fadeInVariants}
        />
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Assists with admission processing, scholarship applications, and visa procedures.
        </motion.li>
      </motion.ul>
      {/* */}
      {/* Uzbekistan */}
      <motion.h4
        className="text-blue-900 text-xl mx-auto mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS in Uzbekistan -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Uzbekistan offers a wide range of affordable medical programs, and its universities
        are recognized globally.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Medical Universities in Uzbekistan -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {UzbekistanColleges.map((gvmtUzb) => (
          <motion.div
            key={gvmtUzb.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={gvmtUzb.image}
              alt={gvmtUzb.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {gvmtUzb.name}
              </motion.h3>
              <ul className="text-gray-700 space-y-1 pl-2">
                <li>
                  {gvmtUzb.about}
                </li>
                <li>
                  <span className='text-gray-900 font-bold'>Fees: </span>{gvmtUzb.fees}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        How Renmin Education Consultancy Helps: -
      </motion.h4>

      <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
        <motion.li variants={fadeInVariants}>
          Provides admission support, visa assistance, and helps with scholarships.
        </motion.li>
      </motion.ul>
      {/* */}

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Conclusion -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Studying MBBS abroad offers incredible opportunities to receive world-class medical
        education at an affordable cost. Countries like India, Russia, China, Kyrgyzstan,
        Kazakhstan, Bangladesh, and Uzbekistan offer various advantages for both Indian
        and international students, including affordable tuition fees, global recognition, and
        high-quality education. Renmin Education Consultancy plays a pivotal role in guiding
        students through the entire admission process, from university selection to
        scholarship applications, ensuring a smooth journey toward achieving your dream of
        becoming a doctor.<br />
        Contact Renmin Education Consultancy for personalized advice and assistance in
        your MBBS study journey!
      </motion.div>
    </section>
  )
}

export default Mbbs