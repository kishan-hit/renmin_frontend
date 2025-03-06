import {
  FaUniversity,
  FaMoneyBillWave,
  FaGraduationCap,
  FaGlobeAsia,
  FaUserGraduate,
  FaMoneyCheckAlt,
  FaPassport,
  FaHotel,
  FaFileAlt,
  FaClipboardList,
  FaPlaneDeparture,
} from "react-icons/fa";

const countriesData = {
  china: {
    title: "Study In China",
    introduction:
      "China has become one of the most sought-after destinations for international students who are keen on pursuing high-quality education, particularly in medical and technical fields. In recent years, a growing number of students from India and other parts of the world are looking to China to pursue MBBS, Bachelor's, Master’s, and PhD courses, thanks to the country’s top-ranked universities, advanced infrastructure, and affordable education. The added advantage of scholarships, including full and partial funding, makes China a highly appealing choice for students looking for affordable education abroad.",
    whyStudy: [
      {
        title: "High-Quality Education",
        description:
          "China is home to some of the world’s leading universities offering globally recognized degree programs. Renowned institutions such as Peking University, Fudan University, Tsinghua University, and Zhejiang University provide students with exceptional learning opportunities, state-of-the-art facilities, and cutting-edge research programs.",
        icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />, // University Icon
      },
      {
        title: "Affordable Tuition and Living Costs",
        description:
          "Studying in China is considerably cheaper than pursuing higher education in many Western countries. The cost of tuition for MBBS, Bachelor's, Master's, and PhD programs is reasonable and offers great value for the quality of education students receive. Furthermore, living expenses in China, including accommodation, food, and transportation, are affordable compared to many countries.",
        icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />, // Money Icon
      },
      {
        title: "Scholarship Opportunities",
        description:
          "One of the biggest advantages of studying in China is the wide range of scholarships available for international students. These scholarships can cover tuition fees, living expenses, and even airfare, making it easier for students from India and other countries to pursue their dreams without facing a significant financial burden.",
        icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />, // Graduation Cap Icon
      },
      {
        title: "Cultural Exposure",
        description:
          "China is a culturally rich and diverse country that provides students with a unique opportunity to experience a different culture, language, and lifestyle. International students can benefit from the exposure to global perspectives, particularly as China plays a pivotal role in the world’s economy.",
        icon: <FaGlobeAsia className="text-[#bf1d1d] text-4xl" />, // Globe Icon
      },
    ],
    renminEducation: {
      title: "Why Choose Renmin Education Consultancy?",
      description:
        "Renmin Education is a trusted name when it comes to helping international students gain admission to top Chinese universities. The consultancy provides a comprehensive range of services, ensuring that students not only get admission to the right course but also benefit from scholarship opportunities.",
      services: [
        {
          title: "Expert Guidance and Counseling",
          icon: <FaUserGraduate className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Admission Assistance",
          icon: <FaUniversity className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Scholarship Application Assistance",
          icon: <FaMoneyCheckAlt className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Visa Assistance",
          icon: <FaPassport className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Accommodation and Pre-Departure Services",
          icon: <FaHotel className="text-[#bf1d1d] text-2xl" />,
        },
      ],
    },
    mbbs: {
      title: "Study MBBS in China Under Scholarship",
      description:
        "MBBS is one of the most popular and sought-after programs for international students in China. Medical universities in China offer MBBS programs in English, allowing international students, especially those from India, to study medicine without language barriers. China’s medical universities are recognized by the World Health Organization (WHO) and are included in the list of universities approved by the Medical Council of India (MCI).",
      keyFeatures: {
        Duration:
          "The MBBS course in China typically lasts for five years, followed by a one-year internship.",
        Affordability:
          "The tuition fees for MBBS in China are much lower compared to medical education in countries like the United States, the United Kingdom, and India.",
        QualityEducation:
          "China is known for its high standards of medical education, and many universities offer cutting-edge training in medicine.",
        MciRecognition:
          "Many medical universities in China are recognized by the Medical Council of India, making it easier for Indian students to practice medicine in India after completing their degree.",
      },
      topUniversities: [
        {
          name: "Peking University Health Science Center",
          img: "Peking University Health Science Center.png",
          website: "https://e.bjmu.edu.cn/",
        },
        {
          name: "Zhejiang University School of Medicine",
          img: "Zhejiang University School of Medicine.png",
          website: "https://ism.zju.edu.cn/",
        },
        {
          name: "Fudan University Shanghai Medical College",
          img: "Fudan University Shanghai Medical College.png",
          website: "https://shmc.fudan.edu.cn/eng/main.htm",
        },
        {
          name: "Shandong University School of Medicine",
          img: "Shandong University School of Medicine.png",
          website: "http://www.mbbs.sdu.edu.cn/",
        },
        {
          name: "Nanjing Medical University",
          img: "Nanjing Medical University.png",
          website: "https://english.njmu.edu.cn/",
        },
      ],
      scholarships: [
        "Chinese Government Scholarships (CGS)",
        "Belt and Road Scholarship",
        "University-Specific Scholarships",
      ],
    },
    bachelorPrograms: {
      title: "Study Bachelor’s Degree in China Under Scholarship",
      description:
        "China offers a wide variety of undergraduate programs across various disciplines such as Engineering, Business, Technology, Arts, and Social Sciences. The Bachelor’s programs in China are well-structured and offer students practical exposure to their chosen fields of study.",
      fieldsOfStudy: [
        {
          name: "Engineering",
          description:
            "China is known for its advanced engineering programs in fields like Electrical, Mechanical, Civil, Computer Science, and Environmental Engineering.",
        },
        {
          name: "Business & Economics",
          description:
            "With China’s growing economy, undergraduate programs in Business Administration, International Trade, and Economics are in high demand.",
        },
        {
          name: "Technology",
          description:
            "With global giants like Alibaba and Huawei, China offers top-notch education in Computer Science, Information Technology, and Artificial Intelligence.",
        },
        {
          name: "Humanities & Arts",
          description:
            "Students can study various programs in Chinese Literature, History, International Relations, and Philosophy.",
        },
      ],
      scholarships: [
        "Chinese Government Scholarship (CGS)",
        "Belt and Road Scholarship",
        "Confucius Institute Scholarship",
      ],
    },
    mastersAndPhd: {
      title: "Study Master’s and PhD Courses in China Under Scholarship",
      description:
        "China is a hub for research and innovation, with top universities offering excellent Master’s and PhD programs in fields such as Engineering, Business, Medicine, and Natural Sciences. Students pursuing higher degrees in China have the opportunity to work with leading researchers and gain exposure to cutting-edge technologies and methodologies.",
      fieldsOfStudy: [
        {
          name: "Engineering & Technology",
          description:
            "With a focus on innovation, AI, robotics, renewable energy, and other emerging technologies, China provides exceptional opportunities for engineering students.",
        },
        {
          name: "Business & Management",
          description:
            "China offers MBA programs and Master’s in International Business, Finance, and Economics, making it an ideal destination for business students.",
        },
        {
          name: "Medical Sciences",
          description:
            "Advanced programs in medical research, public health, and pharmacology provide cutting-edge training for medical students and researchers.",
        },
        {
          name: "Natural & Applied Sciences",
          description:
            "China is a leader in scientific research across fields such as biology, chemistry, and physics, offering numerous research opportunities.",
        },
      ],
      scholarships: [
        "Chinese Government Scholarship (CGS)",
        "University-Specific Scholarships",
        "Confucius Institute Scholarship",
      ],
    },
    renminEducationHelp: {
      title: "How Renmin Education Helps You Get Admission",
      description:
        "Renmin Education is your trusted partner in ensuring that you not only get admitted to your desired course but also secure scholarships to support your studies.",
      services: [
        {
          title: "Expert Consultation",
          icon: <FaUserGraduate className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Assistance with Scholarship Applications",
          icon: <FaFileAlt className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Application Processing",
          icon: <FaClipboardList className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Visa and Accommodation Assistance",
          icon: <FaPassport className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Pre-Departure Briefing",
          icon: <FaPlaneDeparture className="text-[#bf1d1d] text-2xl" />,
        },
      ],
    },
    conclusion:
      "Studying in China offers international students a unique opportunity to receive a world-class education at affordable rates. With its top universities, modern infrastructure, and a wide range of scholarship opportunities, China has become a leading destination for students pursuing MBBS, Bachelor's, Master’s, and PhD programs. Renmin Education is here to guide you through every step of the application process, from choosing the right course and university to securing scholarships and ensuring a smooth admission process.",
  },
};

export default countriesData;
