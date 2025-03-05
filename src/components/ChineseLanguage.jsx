import React from "react";
import { motion } from "framer-motion";
import BLCU from '../assets/images/universities/BLCU.jpeg';
import FU from '../assets/images/universities/Fudan_University.jpeg';
import SJTU from '../assets/images/universities/SJTU.jpeg';
import TSU from '../assets/images/universities/Tsinghua_University.jpeg';
import { FaMapMarkerAlt } from "react-icons/fa";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const universities = [
  {
    id: 1,
    name: "Beijing Language and Culture University",
    location: "Beijing",
    specialization: "Specializing in Chinese language education for international students, BLCU is one of the most popular destinations for learning Mandarin.",
    image: BLCU,
  },
  {
    id: 2,
    name: "Tsinghua University",
    location: "Beijing",
    specialization: "Offering high-quality language programs and being one of the top universities in China with global recognition.",
    image: SJTU,
  },
  {
    id: 3,
    name: "Fudan University",
    location: "Shanghai",
    specialization: "Providing an excellent Chinese language program integrated with cultural immersion opportunities.",
    image: FU,
  },
  {
    id: 4,
    name: "Shanghai Jiao Tong University",
    location: "Shanghai",
    specialization: "Offering both short-term and long-term Chinese language programs with a focus on practical language use in business and society.",
    image: TSU,
  },
];

const ChineseLanguage = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32 mt-16 md:mt-20">
      <motion.h2
        className="text-center text-blue-900 text-4xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Chinese Language
      </motion.h2>

      <motion.h4
        className="text-gray-900 text-xl mx-auto mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Study Chinese Language in China for Indian &amp; International Students with Renmin Education
        Consultancy
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        China, with its rich cultural history, rapidly growing economy, and increasing influence on the global
        stage, has become an attractive destination for students worldwide to study the Chinese language.
        Whether you’re interested in learning Mandarin for professional, personal, or academic reasons,
        China offers the perfect environment to immerse yourself in the language and culture.
      </motion.div>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Renmin Education Consultancy plays a key role in assisting Indian and international students in
        applying to top Chinese language programs in China. With expertise in university selection,
        application guidance, visa processing, and other essential services, Renmin Education Consultancy
        helps students to smoothly navigate their journey of learning Chinese in China.
      </motion.div>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        In this comprehensive guide, we will discuss the reasons why studying Chinese in China is an ideal
        choice, the benefits of learning Chinese, the various language programs available, and the role of
        Renmin Education Consultancy in facilitating this experience for students from India and abroad.
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Why Study Chinese Language in China? -
      </motion.h4>

      <motion.ol
        className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Immersive Language Environment:</span><span className='text-gray-700'> China is the birthplace of the Chinese language (Mandarin) and the best place to learn it. By living
            and studying in China, you get to immerse yourself in the language daily. Practicing Chinese in real-
            life scenarios such as shopping, traveling, meeting locals, or dining at restaurants accelerates your
            learning process significantly. China offers you the rare opportunity to learn the language not only in
            the classroom but also through practical exposure to the culture, traditions, and everyday activities
            that are an integral part of the language.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">High Quality of Education:</span><span className='text-gray-700'> China is home to numerous prestigious universities that offer world-class language programs.
            Universities like Beijing Language and Culture University, Shanghai Jiao Tong University, Fudan
            University, and Peking University are renowned for their specialized Chinese language programs.
            These universities employ highly experienced and qualified teachers, many of whom are native
            Chinese speakers, ensuring students receive high-quality instruction that covers speaking, listening,
            reading, and writing in Chinese.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Cost-Effective Education:</span><span className='text-gray-700'> Studying Chinese in China is extremely affordable compared to other countries. The cost of living in
            China is relatively low, particularly when compared to Western countries, and tuition fees for
            Chinese language programs are very reasonable. This makes studying in China an attractive and cost-
            effective option for students from India and abroad.
            <br />
            For Indian students, this is especially advantageous, as the exchange rate of the Indian Rupee to the
            Chinese Yuan makes living in China even more affordable. Additionally, students can save on
            transportation costs since flights to China from India are reasonably priced.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">China's Growing Global Influence:</span><span className='text-gray-700'> Mandarin Chinese is becoming increasingly important in the global job market due to China&#39;s rapid
            economic development. Learning Chinese opens up countless opportunities in fields such as
            business, trade, diplomacy, education, translation, tourism, and technology. As China continues to
            rise as a global superpower, speaking Mandarin becomes a highly valued skill for those looking to
            work in international relations, finance, or any profession involving cross-cultural communication.<br />
            In China, students have the unique opportunity to learn Chinese in its natural context, which is not
            only enriching for personal growth but also for career development in the global market.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Cultural Immersion:</span><span className='text-gray-700'> Learning Chinese in China means you will also be immersed in the country&#39;s rich culture, history, and
            traditions. From ancient landmarks like the Great Wall of China to modern cities like Shanghai,
            students will experience firsthand the cultural diversity that the country has to offer. In addition to
            language classes, students can engage in activities such as calligraphy, Chinese tea ceremonies,
            martial arts (Tai Chi), and traditional festivals like the Chinese New Year, all of which contribute to a
            deeper understanding of the Chinese language and its cultural nuances.</span>
        </motion.li>
      </motion.ol>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Types of Chinese Language Programs in China -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        China offers a variety of Chinese language programs to cater to the diverse needs of international
        students. These programs range from short-term language courses for beginners to advanced study
        in Chinese literature and culture.
      </motion.div>

      <motion.ol
        className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Chinese Language Foundation Programs:</span><span className='text-gray-700'> These programs are designed for beginners who have little to no prior knowledge of the Chinese language. The courses focus on the basics of Mandarin, including pronunciation (pinyin), basic
            grammar, and common vocabulary. These programs lay the foundation for future language learning
            and are ideal for students who want to build a strong understanding of Chinese before moving to
            more advanced levels.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Intensive Chinese Language Programs:</span><span className='text-gray-700'> These programs are designed for students who wish to quickly acquire proficiency in Chinese.
            Intensive courses provide a higher level of immersion, with classes typically being held every day.
            Students focus on speaking, listening, reading, and writing skills, often with a focus on business
            Chinese or Chinese for academic purposes. These programs are suitable for students who wish to
            learn Chinese in a shorter period and wish to gain practical proficiency.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Long-Term Chinese Language Programs:</span><span className='text-gray-700'> These programs are typically 1-year or 2-year courses where students learn Chinese over a longer
            period. The curriculum is more in-depth and often includes specialized courses in Chinese culture,
            history, and literature. This program is perfect for students who want to reach a high level of fluency
            in the language and pursue advanced studies or work in China.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Chinese Language and Culture Programs:</span><span className='text-gray-700'> In addition to language courses, many universities in China offer programs that integrate the study
            of Chinese language with Chinese culture. These programs include courses in Chinese history,
            philosophy, art, and literature, allowing students to gain a well-rounded understanding of China.
            Students who are interested in Chinese studies or cultural exchange may find this type of program
            particularly appealing.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Chinese Language for Business and Professionals:</span><span className='text-gray-700'> These programs are aimed at individuals who need Chinese for professional purposes. The
            curriculum includes language courses tailored to business communication, trade relations, and
            corporate culture. Students can also engage in internships or work experience while learning
            Chinese, gaining a deeper understanding of the language in a professional context.</span>
        </motion.li>
      </motion.ol>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Benefits of Learning Chinese in China -
      </motion.h4>

      <motion.ol
        className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Effective Language Acquisition:</span><span className='text-gray-700'> Living and studying in China provides the best environment for learning the Chinese language. In
            addition to formal language courses, students are constantly exposed to the language in daily
            interactions with locals. This total immersion method accelerates learning and helps students
            develop fluency much faster than in non-Chinese-speaking environments.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Globally Recognized Certifications:</span><span className='text-gray-700'> Upon successful completion of Chinese language programs, students receive certification from
            Chinese universities. These certificates are recognized worldwide and can add significant value to a
            student&#39;s resume. The HSK (Hanyu Shuiping Kaoshi), or the Chinese Proficiency Test, is an official
            standardized test for Mandarin and can be taken after studying Chinese in China to validate one’s
            proficiency level. A good score in HSK can enhance career prospects in industries that require
            knowledge of Chinese.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Rich Cultural Experience:</span><span className='text-gray-700'> Studying Chinese in China offers a unique opportunity to explore the country&#39;s rich history,
            traditions, and cultural heritage. Whether it is through attending local festivals, visiting historical
            landmarks, or engaging with local communities, students can learn about the culture alongside the
            language. This holistic experience will give students an appreciation of Chinese customs and a
            deeper understanding of how the language functions within the cultural context.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Networking Opportunities:</span><span className='text-gray-700'> China is a hub for global business, technology, and trade. By studying in China, students can interact
            with peers from around the world and professionals who are connected to the Chinese market. This
            can create valuable networking opportunities, particularly for students who wish to pursue careers
            in international trade, diplomacy, technology, or business.</span>
        </motion.li>
      </motion.ol>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Renmin Education Consultancy’s Role in Helping Students -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Renmin Education Consultancy assists Indian and international students in securing admission to
        Chinese language programs in China. With a strong network of partner universities across China,
        Renmin Education Consultancy ensures that students receive the best education in a supportive and
        efficient manner. Here’s how Renmin Education Consultancy can help:
      </motion.div>

      <motion.ol
        className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">University Selection and Admission Assistance:</span><span className='text-gray-700'> Renmin Education Consultancy helps students choose the best Chinese university for their language
            studies based on their preferences, location, budget, and language proficiency. The consultancy
            provides detailed information on various universities and their programs, including Beijing Language
            and Culture University, Tsinghua University, Shanghai Jiao Tong University, and Fudan University.
            The consultancy assists with the entire admission process, including preparing application forms,
            submitting documents, and meeting university requirements. The team ensures that students are
            successfully admitted to top-tier universities that match their goals.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Visa Processing and Guidance:</span><span className='text-gray-700'> Renmin Education Consultancy helps students with the visa application process for studying in China.
            The consultancy provides students with step-by-step guidance on applying for a Student Visa (X
            Visa), ensuring they meet the necessary requirements and submit the required documentation.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Pre-Departure Briefing:</span><span className='text-gray-700'> Before departure, Renmin Education Consultancy offers pre-departure briefings to help students
            prepare for their study journey in China. These briefings include advice on cultural adjustments, local
            customs, safety tips, and essential information about living in China.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Accommodation and Travel Arrangements:</span><span className='text-gray-700'> Renmin Education Consultancy helps students find suitable accommodation, whether in university
            dormitories or private rentals. The consultancy also assists with travel arrangements, including flight
            bookings and airport pick-up services, ensuring students are comfortably settled in their new
            environment.</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Post-Arrival Support:</span><span className='text-gray-700'> Once students arrive in China, Renmin Education Consultancy continues to provide support.
            Whether it’s helping students adjust to life in China, providing assistance with academic issues, or
            offering guidance on health insurance, the consultancy ensures that students feel supported
            throughout their academic journey.</span>
        </motion.li>
      </motion.ol>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-8 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Top Universities in China for Learning Chinese -
      </motion.h4>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-16 lg:px-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {universities.map((uni) => (
          <motion.div
            key={uni.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            variants={cardVariants}
          >
            <motion.img
              src={uni.image}
              alt={uni.name}
              className="w-full h-[14rem] object-cover"
              variants={fadeInVariants}
            />

            <div className="p-4 flex flex-col items-center text-center space-y-2">
              <motion.h3
                variants={fadeInVariants}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {uni.name}
              </motion.h3>

              <motion.div
                variants={fadeInVariants}
                className="text-base font-medium flex items-center gap-2 text-gray-900"
              >
                <FaMapMarkerAlt className="text-blue-900 text-lg" />
                <span>{uni.location}</span>
              </motion.div>

              <motion.p
                variants={fadeInVariants}
                className="text-sm text-gray-700 px-4"
              >
                {uni.specialization}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        Cost of Studying Chinese in China -
      </motion.h4>

      <motion.div
        className="text-gray-700 text-lg mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        The cost of studying Chinese in China is highly affordable compared to other countries. Here is an
        approximate breakdown of costs:
      </motion.div>

      <motion.ol
        className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Tuition Fees:</span>
          <span className="text-gray-700"> $1,500 to $3,500 per year (depending on the program and university)</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Accommodation:</span>
          <span className="text-gray-700"> $800 to $2,000 per year (depending on whether students stay in university dormitories or private accommodation)</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Living Expenses:</span>
          <span className="text-gray-700"> $300 to $600 per month</span>
        </motion.li>
        <motion.li variants={fadeInVariants}>
          <span className="font-bold text-blue-900">Total Cost for 1 Year:</span>
          <span className="text-gray-700"> $2,600 to $6,100 (including tuition, accommodation, and living expenses)</span>
        </motion.li>
      </motion.ol>

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
        Studying Chinese in China offers unparalleled opportunities for students to learn the language in its
        natural setting, gain practical exposure to Chinese culture, and take advantage of China’s growing
        global influence.
      </motion.div>

    </section>
  );
};

export default ChineseLanguage;
