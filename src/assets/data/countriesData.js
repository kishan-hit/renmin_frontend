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
  FaLanguage,
  FaTheaterMasks,
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
  // data for russia
  russia: {
    title: "Study In Russia",
    introduction:
      "Russia has long been recognized as one of the top destinations for students seeking quality education, especially in the fields of medicine, engineering, and science. Over the years, the country has attracted a growing number of international students, particularly from India and other parts of the world. The affordability of education, high-quality teaching, and globally recognized medical programs have made Russia an ideal choice for those seeking to pursue MBBS and Postgraduate (PG) medical degrees.",

    whyStudy: [
      {
        title: "High-Quality Medical Education",
        description:
          "Russian medical universities are among the best in the world, offering globally recognized medical programs that are taught in both Russian and English. Many Russian universities are listed in the World Health Organization (WHO) Directory of Medical Schools, and their medical programs are accredited by prominent international medical bodies.",
        icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Affordable Tuition Fees",
        description:
          "Studying in Russia is much more affordable compared to Western countries, where the cost of medical education can be exorbitant. Tuition fees for MBBS and PG courses in Russia are significantly lower, making it an attractive option for international students.",
        icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "No Entrance Exams",
        description:
          "Unlike many countries that require entrance exams for admission to medical schools, Russian medical universities do not require students to appear for entrance exams such as NEET in India. Admission is based on academic qualifications.",
        icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Globally Recognized Degrees",
        description:
          "Degrees awarded by Russian universities are recognized globally, including in India. Russian medical degrees are accepted by the Medical Council of India (MCI), which allows students to practice medicine in India after completing their MBBS and clearing the MCI screening test.",
        icon: <FaGlobeAsia className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "English-Medium Programs",
        description:
          "Many Russian medical universities offer MBBS and PG courses in English, ensuring that international students can study without language barriers. This is particularly advantageous for Indian students who may not be proficient in the Russian language.",
        icon: <FaLanguage className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Cultural Diversity and Global Exposure",
        description:
          "Russia is home to students from all over the world. Studying in Russia offers international students the opportunity to interact with peers from diverse cultures, enhancing their global outlook.",
        icon: <FaTheaterMasks className="text-[#bf1d1d] text-4xl" />,
      },
    ],
    renminEducation: {
      title:
        "How Renmin Education Consultancy Helps Indian and International Students",
      description:
        "Renmin Education is a trusted name when it comes to helping international students gain admission to top Russian universities. The consultancy provides a comprehensive range of services, ensuring that students not only get admission to the right course but also benefit from scholarship opportunities.",
      services: [
        {
          title: " University Selection Assistance",
          icon: <FaUniversity className="text-[#bf1d1d] text-2xl" />,
        },
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
      title: "Benefits of Studying MBBS and PG Courses in Russia",
      description:
        "MBBS and PG in Russia is highly sought-after due to its world-class education system, affordable tuition fees, and global recognition. Russian medical universities provide advanced training with a focus on clinical practice.",
      keyFeatures: {
        Affordability:
          "Tuition fees for MBBS in Russia are much lower compared to medical education in countries like the US, UK, and India.",
        QualityEducation:
          "Russia is known for its high standards of medical education, and many universities offer cutting-edge training in medicine.",
        InternshipAndClinicalTraining:
          "MBBS students in Russia undergo rigorous clinical training and internships at affiliated hospitals and medical centers, giving them the opportunity to gain practical experience in diagnosing and treating patients under the supervision of experienced doctors.",
        AdvancedResearchOpportunities:
          "Russian universities are known for their strong emphasis on research and innovation. Medical students have the opportunity to participate in cutting-edge research in various medical fields, such as pharmacology, surgery, pathology, and more. Students are encouraged to contribute to medical research and development, which is crucial for their career advancement.",
        LowAdmissionRequirements:
          "The admission requirements for MBBS and PG medical programs in Russia are relatively straightforward. Students need to have completed their secondary education (12th grade) with a strong foundation in subjects like Physics, Chemistry, and Biology for MBBS, and an undergraduate degree in a related field for PG courses. There is no requirement for entrance exams like NEET (National Eligibility cum Entrance Test) for MBBS.",
        WideRangeOfMedicalPrograms:
          "Russia offers a wide variety of medical programs at both the undergraduate and postgraduate levels, including general medicine, dentistry, pharmacy, public health, and various specialized fields in medicine. This provides students with the flexibility to choose the course that aligns with their interests and career goals.",
      },
      topUniversities: [
        {
          name: "St. Petersburg State University",
          img: "St. Petersburg State University.png",
          website: "https://english.spbu.ru/",
        },
        {
          name: "Lomonosov Moscow State University",
          img: "Lomonosov Moscow State University.png",
          website: "https://msu.ru/en/",
        },
        {
          name: "Kazan Federal University (KFU)",
          img: "Kazan Federal University.png",
          website: "https://eng.kpfu.ru/",
        },
        {
          name: "Russia State Medical University (RSMU)",
          img: "Russia State Medical University.png",
          website: "https://rsmu.in/",
        },
        {
          name: "Novosibirsk State University",
          img: "Novosibirsk State University.png",
          website: "https://english.nsu.ru/",
        },
      ],
      costOfStudy: {
        title: "Cost of Studying MBBS and PG in Russia",
        description:
          "The cost of studying MBBS and PG courses in Russia is affordable compared to Western countries. Below is an approximate breakdown of the costs:",
        programs: [
          {
            title: "MBBS Programs",
            tuitionFees:
              "$3,000 to $7,000 per year (depending on the university)",
            livingExpenses: "$100 to $300 per month",
            totalCost:
              "$20,000 to $40,000 (including tuition and living expenses)",
          },
          {
            title: "PG Programs",
            tuitionFees:
              "$4,000 to $8,000 per year (depending on the specialization and university)",
            livingExpenses: "$100 to $300 per month",
          },
        ],
      },
      howToApply: {
        title:
          "How to Apply for MBBS and PG Courses in Russia with Renmin Education Consultancy",
        description:
          "The process to apply for MBBS and PG medical courses in Russia is simple and straightforward. Renmin Education Consultancy assists students throughout the entire journey.",
        steps: [
          {
            title: "Select Your Program and University",
            description:
              "Based on your preferences, academic qualifications, and budget, Renmin Education Consultancy will help you choose the best university and program in Russia.",
          },
          {
            title: "Prepare and Submit Documents",
            description:
              "Renmin Education Consultancy will guide you in preparing all the necessary documents, including your academic transcripts, passport, medical certificate, and other requirements for admission.",
          },
          {
            title: "Apply for Scholarships",
            description:
              "The consultancy will assist you in applying for available scholarships that can help reduce tuition fees and cover living costs.",
          },
          {
            title: "Secure Your Visa",
            description:
              "Renmin Education Consultancy helps with the visa application process, ensuring you meet all requirements for a student visa to Russia.",
          },
          {
            title: "Pre-Departure and Accommodation Assistance",
            description:
              "The consultancy will provide a pre-departure briefing and assist with accommodation and travel arrangements.",
          },
        ],
      },
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
      "Studying MBBS and PG courses in Russia offers Indian and international students a unique opportunity to receive high-quality medical education at affordable rates. With globally recognized degrees, excellent clinical training, and a rich cultural experience, Russia is an ideal destination for aspiring doctors. Renmin Education Consultancy is your trusted partner in navigating the entire process—from choosing the right university to securing scholarships, visas, and accommodation. Start your journey to study in Russia today with Renmin Education Consultancy and take the first step toward a successful medical career!",
  },
  // data for ukraine
  kyrgyzstan: {
    title:
      "Study MBBS in Kyrgyzstan for Indian & International Students with Renmin Education Consultancy",
    introduction:
      "Kyrgyzstan has become one of the most popular destinations for Indian and international students aspiring to pursue MBBS (Bachelor of Medicine and Bachelor of Surgery). The country offers affordable and high-quality medical education, attracting thousands of students each year from countries like India, Nepal, Bangladesh, and beyond. Kyrgyzstan is known for its low tuition fees, English-medium programs, and a simple admission process that makes it an attractive destination for aspiring doctors. Renmin Education Consultancy is a leading educational consultancy that assists students in their journey to study MBBS in Kyrgyzstan. From selecting the right university to securing scholarships, processing admissions, and providing visa assistance, Renmin Education Consultancy is your trusted partner for pursuing a medical degree in Kyrgyzstan. This detailed guide will walk you through the reasons why Kyrgyzstan is an ideal place to study MBBS, the benefits of studying in this Central Asian country, and how Renmin Education Consultancy can help you secure admission to top medical universities in Kyrgyzstan.",
    whyStudy: [
      {
        title: "Affordable Medical Education",
        description:
          "One of the primary reasons why students choose Kyrgyzstan for MBBS is the affordability of education. Tuition fees range between $3,000 to $6,000 per year, making it an economical choice. Additionally, the cost of living is significantly lower compared to Western countries, making it budget-friendly.",
        icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Globally Recognized Medical Degrees",
        description:
          "Medical universities in Kyrgyzstan are recognized by prestigious international bodies such as WHO and MCI, ensuring that graduates can practice medicine globally.",
        icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "No Entrance Exams",
        description:
          "Kyrgyzstan does not require international students to take entrance exams. Admission is based on academic performance, making the process simpler and less stressful.",
        icon: <FaFileAlt className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "English-Medium Programs",
        description:
          "Most medical universities in Kyrgyzstan offer MBBS programs in English, allowing international students to study without language barriers.",
        icon: <FaLanguage className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Experienced Faculty and Modern Infrastructure",
        description:
          "Kyrgyzstan's medical universities boast state-of-the-art facilities and experienced faculty, providing hands-on clinical exposure through internships.",
        icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Diverse and Welcoming Student Community",
        description:
          "Kyrgyzstan hosts students from various countries, creating a multicultural environment that enriches the learning experience.",
        icon: <FaTheaterMasks className="text-[#bf1d1d] text-4xl" />,
      },
    ],
    renminEducation: {
      title: "Why Choose Renmin Education Consultancy?",
      description:
        "Renmin Education Consultancy offers personalized counseling, university selection assistance, document guidance, scholarship applications, visa processing, and pre-departure briefings for students aspiring to study MBBS in Kyrgyzstan.",
      services: [
        {
          title: "University Selection Assistance",
          icon: <FaUniversity className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Admission Process Guidance",
          icon: <FaUserGraduate className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Scholarship Assistance",
          icon: <FaMoneyCheckAlt className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Visa Assistance",
          icon: <FaPassport className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Accommodation and Travel Assistance",
          icon: <FaHotel className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Pre-Departure Briefing",
          icon: <FaPlaneDeparture className="text-[#bf1d1d] text-2xl" />,
        },
      ],
    },
    mbbs: {
      title: "Study MBBS in Kyrgyzstan Under Scholarship",
      description:
        "MBBS in Kyrgyzstan is an attractive option due to its affordable tuition fees, quality education, and practical clinical training. Medical programs are offered in English, ensuring no language barriers, and graduates receive globally recognized degrees.",
      keyFeatures: {
        Affordability:
          "The tuition fees for MBBS in Kyrgyzstan are much lower than in Western countries and even compared to medical schools in India. On average, students can expect to pay around $3,000 to $6,000 per year in tuition fees. This is significantly more affordable than private medical schools in India or abroad, making Kyrgyzstan an ideal choice for students who are seeking a cost-effective education.",
        QualityEducation:
          "Kyrgyzstan's medical universities follow a curriculum that is designed to meet international standards. These universities are recognized by international organizations such as the WHO, UNESCO, and the Medical Council of India (MCI), ensuring that students receive high-quality education in line with global standards. Students are trained in both theoretical knowledge and practical skills through internships and clinical rotations in local hospitals and medical centers. The hands-on experience is essential for their professional growth and ability to practice medicine globally.",
        StudentFriendlyEnvironment:
          "Kyrgyzstan offers a safe and student-friendly environment. The universities are known for their student-centric approach, providing all the necessary support to international students. International students receive assistance with accommodation, language barriers, and cultural adjustments, helping them settle down and focus on their studies. Moreover, Kyrgyzstan's low crime rate, affordable public transport system, and peaceful lifestyle make it a great destination for students looking for a comfortable living environment while pursuing their education",
        VisaFreeTravelToOtherCountries:
          "Kyrgyzstan is located in the heart of Central Asia and provides easy access to many other countries in the region. This is advantageous for international students who wish to explore other parts of Central Asia and Europe during their study breaks. Additionally, Kyrgyzstan offers relatively easy visa regulations for international students, allowing them to travel freely.",
      },
      topUniversities: [
        {
          name: "Kyrgyz State Medical Academy (KSMA)",
          img: "Kyrgyz State Medical Academy.png",
          website: "https://www.kgma.kg/en",
        },
        {
          name: "International School of Medicine (ISM)",
          img: "International School of Medicine.png",
          website: "https://ism.edu.kg/",
        },
        {
          name: "Asian Medical Institute (AMI)",
          img: "Asian Medical Institute.png",
          website: "https://asmi.edu.kg/",
        },
        {
          name: "Jalal-Abad State University",
          img: "Jalal-Abad State University.png",
          website: "https://jasu.kg/",
        },
        {
          name: "Osh State University",
          img: "Osh State University.png",
          website: "https://www.oshsu.kg/en",
        },
      ],
      costOfStudy: {
        title: "Cost of Studying MBBS in Kyrgyzstan",
        description:
          "Studying MBBS in Kyrgyzstan is affordable compared to many other countries. The total cost of studying in Kyrgyzstan includes tuition fees, accommodation, food, and other living expenses. Here’s a breakdown of the cost:",
        programs: [
          {
            title: "MBBS Programs",
            tuitionFees: "$3,000 to $6,000 per year",
            accommodation: " $500 to $1,000 per year",
            livingExpenses: "$100 to $300 per month",
            totalCost:
              "$20,000 to $35,000 (including tuition and living expenses)",
          },
        ],
      },
      howToApply: {
        title:
          "How to Apply for MBBS in Kyrgyzstan with Renmin Education Consultancy",
        description:
          "The process to apply for MBBS in Kyrgyzstan is simple and straightforward. Here’s a step-by-step guide to help you get started.",
        steps: [
          {
            title: "Choose the University",
            description:
              "Based on your preferences, budget, and career goals, Renmin Education Consultancy will help you choose the best medical university in Kyrgyzstan.",
          },
          {
            title: "Prepare and Submit Documents",
            description:
              "Prepare the necessary documents (12th-grade mark sheet, passport, etc.) and submit them to the consultancy.",
          },
          {
            title: "Get Admission",
            description:
              "Renmin Education Consultancy will submit your application to the university and ensure you receive an admission letter.",
          },
          {
            title: "Visa Application",
            description:
              "Renmin Education Consultancy will assist you in applying for your student visa.",
          },
          {
            title: "Pre-Departure and Accommodation Assistance",
            description:
              "Attend the pre-departure briefing and get ready for your journey to Kyrgyzstan.",
          },
        ],
      },
    },
    renminEducationHelp: {
      title: "How Renmin Education Helps You Get Admission",
      description:
        "Renmin Education is your trusted partner in guiding you through the admission process, ensuring you secure scholarships and receive comprehensive support from university selection to visa assistance.",
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
      "Kyrgyzstan offers an excellent opportunity for international students to pursue affordable and high-quality MBBS education. With its reputable medical universities, low tuition fees, and student-friendly environment, Kyrgyzstan is a top destination for aspiring doctors. Renmin Education Consultancy provides comprehensive support throughout the admission process, ensuring students are well-prepared for their journey.",
  },

  // data for bangladesh
  bangladesh: {
    title:
      "Study MBBS in Bangladesh for Indian & International Students with Renmin Education Consultancy",
    introduction:
      "Bangladesh has become one of the most popular destinations for international students seeking to pursue MBBS (Bachelor of Medicine and Bachelor of Surgery). Due to its affordable medical education, high-quality teaching, and the fact that its medical degrees are recognized worldwide, Bangladesh has emerged as an attractive option for Indian and international students. With a growing number of students opting to study MBBS in Bangladesh, the country is gaining recognition for providing medical education at a fraction of the cost compared to Western nations. Renmin Education Consultancy provides a seamless pathway for students to secure admission to top medical universities in Bangladesh.",
    whyStudy: [
      {
        title: "Affordable Medical Education",
        description:
          "One of the key reasons why students choose Bangladesh for MBBS is the affordability of education. Tuition fees for MBBS programs typically range between $5,000 to $10,000 per year, and living expenses are reasonable, with monthly costs of around $150 to $300.",
        icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Globally Recognized Degrees",
        description:
          "Medical universities in Bangladesh are recognized by international bodies such as the World Health Organization (WHO), Medical Council of India (MCI), UNESCO, and WFME, ensuring that graduates can practice medicine globally.",
        icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "No Entrance Exams",
        description:
          "Bangladesh offers a simple admission process for international students, with most universities not requiring entrance exams like NEET. Admission is based on academic performance, making the process straightforward.",
        icon: <FaFileAlt className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "English-Medium Instruction",
        description:
          "Many top medical universities in Bangladesh offer MBBS programs in English, eliminating language barriers and creating a global learning environment.",
        icon: <FaLanguage className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Experienced Faculty and Modern Infrastructure",
        description:
          "Bangladesh's medical institutions boast modern infrastructure, experienced faculty, and extensive clinical training, ensuring a high-quality education.",
        icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Cultural Similarities and Safe Environment",
        description:
          "For Indian students, Bangladesh offers a culturally familiar and safe environment with similar customs and lifestyles, making it easier to adapt and thrive.",
        icon: <FaTheaterMasks className="text-[#bf1d1d] text-4xl" />,
      },
    ],
    renminEducation: {
      title: "Why Choose Renmin Education Consultancy?",
      description:
        "Renmin Education Consultancy offers personalized counseling, university selection assistance, document guidance, scholarship assistance, visa support, and accommodation arrangements, ensuring a seamless admission process for MBBS students in Bangladesh.",
      services: [
        {
          title: "University Selection Assistance",
          icon: <FaUniversity className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Admission Guidance and Application Process",
          icon: <FaUserGraduate className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Scholarship Assistance",
          icon: <FaMoneyCheckAlt className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Visa Assistance",
          icon: <FaPassport className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Accommodation and Travel Assistance",
          icon: <FaHotel className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Pre-Departure Briefing",
          icon: <FaPlaneDeparture className="text-[#bf1d1d] text-2xl" />,
        },
      ],
    },
    mbbs: {
      title: "Study MBBS in Bangladesh",
      description:
        "Bangladesh offers high-quality MBBS education at affordable costs. Medical programs are conducted in English, ensuring no language barriers, and graduates receive internationally recognized degrees, making it an attractive option for aspiring doctors.",
      keyFeatures: {
        LowTuitionFees:
          "The cost of studying MBBS in Bangladesh is among the lowest when compared to Western countries. The tuition fees for medical programs in Bangladesh range between $5,000 to $10,000 per year, which is far more affordable than private medical colleges in India or other countries. The overall cost of pursuing an MBBS degree in Bangladesh for six years, including tuition and living expenses, may range between $25,000 and $50,000, which is significantly more affordable than studying in countries like the United States, UK, or Australia.",
        AccreditedMedicalPrograms:
          "Bangladesh offers globally recognized medical programs that meet the standards of international medical organizations. The recognition by WHO, MCI, and UNESCO ensures that students graduating from Bangladeshi universities are eligible to practice in various countries. Students are also eligible to appear for licensing exams like FMGE (for Indian students), USMLE (for those wanting to practice in the US), and PLAB (for those wanting to practice in the UK).",
        ClinicalTraining:
          "Bangladeshi medical universities provide students with the opportunity to participate in extensive clinical training during their MBBS program. Students get practical exposure by working in some of the country’s best hospitals, allowing them to apply the theoretical knowledge they acquire in the classroom to real-life medical scenarios. This hands-on experience is essential for students who wish to become competent doctors after graduation.",
        NoLanguageBarrier:
          "Since most medical universities in Bangladesh offer MBBS programs in English, there is no language barrier for international students. English-medium programs enable students to understand complex medical concepts, participate in classroom discussions, and build their academic skills without any communication problems.",
        GoodInfrastructureAndFacilities:
          "The medical universities in Bangladesh are well-equipped with modern infrastructure, including hospitals, libraries, hostels, and research facilities. Students benefit from the advanced technology and educational tools provided by these universities. Furthermore, the universities offer a conducive learning environment with interactive classrooms, seminars, and practical sessions.",
      },
      topUniversities: [
        {
          name: "Dhaka Medical University",
          img: "Dhaka Medical University.png",
          website: "https://dmch.gov.bd/",
        },
        {
          name: "Shaheed Suhrawardy Medical College",
          img: "Shaheed Suhrawardy Medical College.png",
          website: "https://www.shsmc.gov.bd/",
        },
        {
          name: "Chittagong Medical College",
          img: "Chittagong Medical College.png",
          website: "https://cmch.gov.bd/",
        },
        {
          name: "Enam Medical College",
          img: "Enam Medical College.png",
          website: "https://emcbd.info/",
        },
        {
          name: "Bangladesh Medical College",
          img: "Bangladesh Medical College.png",
          website: "https://www.bmc-bd.org/",
        },
      ],
      costOfStudy: {
        title: "Cost of Studying MBBS in Bangladesh",
        description:
          "The cost of studying MBBS in Bangladesh is very affordable compared to other countries. Here is an approximate breakdown of the costs:",
        programs: [
          {
            title: "MBBS Programs",
            tuitionFees: "$5,000 to $10,000 per year",
            accommodation:
              "$1,000 to $2,000 per year (depending on whether the student stays in a university hostel or private accommodation)",
            livingExpenses: "$150 to $300 per month",
            totalCost:
              "$25,000 to $50,000 (including tuition fees, accommodation, and living expenses)",
          },
        ],
      },
    },
    renminEducationHelp: {
      title: "How Renmin Education Helps You Get Admission",
      description:
        "Renmin Education is your trusted partner in guiding you through the admission process, ensuring that you secure scholarships and receive comprehensive support from university selection to visa assistance.",
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
      "Bangladesh offers international students a unique opportunity to pursue an affordable, high-quality MBBS education at globally recognized universities. With low tuition fees, English-medium programs, experienced faculty, and modern infrastructure, Bangladesh is an attractive destination for aspiring doctors. Renmin Education Consultancy provides comprehensive support throughout the admission process, from university selection to visa assistance, ensuring a smooth journey for students.",
  },

  // data for ukraine

  uzbekistan: {
    title:
      "Study MBBS in Uzbekistan for Indian & International Students with Renmin Education Consultancy",
    introduction:
      "Uzbekistan, a Central Asian country rich in history and culture, has emerged as a leading destination for international students seeking to pursue MBBS (Bachelor of Medicine and Bachelor of Surgery) degrees. With affordable tuition fees, globally recognized medical programs, and the availability of English-medium courses, Uzbekistan offers an attractive option for Indian and international students wishing to pursue medical studies abroad. Renmin Education Consultancy plays a pivotal role in assisting students from India and other countries to secure admission to top medical universities in Uzbekistan. From university selection and application processing to visa assistance and pre-departure services, Renmin Education Consultancy provides end-to-end support to students in their journey to becoming doctors. This comprehensive guide explores the reasons why Uzbekistan is a preferred destination for MBBS studies, the advantages of studying MBBS in Uzbekistan, the services offered by Renmin Education Consultancy, and the step-by-step process of applying for admission.",
    whyStudy: [
      {
        title: "Affordable Medical Education",
        description:
          "One of the primary reasons why students opt to study MBBS in Uzbekistan is the affordability of medical education. Compared to countries like the United States, UK, or India (private medical colleges), the cost of studying MBBS in Uzbekistan is very low. The tuition fees for MBBS programs in Uzbekistan range from $3,000 to $6,000 per year, making it a highly cost-effective option for students. Additionally, the cost of living in Uzbekistan is much lower than in many other countries, allowing students to manage their expenses efficiently. Accommodation, food, and transportation costs are reasonable, making it easier for international students to maintain a comfortable lifestyle during their studies.",
        icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Globally Recognized Degrees",
        description:
          "Medical universities in Uzbekistan are recognized by international medical organizations such as the World Health Organization (WHO), UNESCO, and Medical Council of India (MCI). This ensures that students graduating from Uzbek universities are eligible to appear for licensing exams such as the FMGE (Foreign Medical Graduate Examination) in India, the USMLE (United States Medical Licensing Examination), and PLAB (Professional and Linguistic Assessments Board) for the UK.",
        icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "No Entrance Exams",
        description:
          "Unlike many countries that require entrance exams for medical school admissions, Uzbekistan offers a simplified admission process for international students. There is no need for students to appear for entrance exams like NEET (National Eligibility Cum Entrance Test) or any other entrance exam. As long as students meet the basic eligibility criteria (such as completing their higher secondary education with subjects like Physics, Chemistry, and Biology), they can apply directly to medical universities in Uzbekistan.",
        icon: <FaFileAlt className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "English-Medium Programs",
        description:
          "Many of Uzbekistan's top medical universities offer MBBS programs in English, making it easier for international students, especially those from non-Russian or non-Uzbek speaking countries, to follow the curriculum and communicate with their peers and faculty. The availability of English-medium courses ensures that students can focus on their studies without worrying about language barriers, making the learning experience more effective and enjoyable.",
        icon: <FaLanguage className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Experienced Faculty and Modern Infrastructure",
        description:
          "Uzbekistan boasts several prestigious medical universities that provide students with top-notch academic and clinical education. The faculty members are highly qualified, with many professors having received education and training from prestigious universities in Europe, Russia, and other parts of the world.",
        icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />,
      },
      {
        title: "Cultural Similarities and Safe Environment",
        description:
          "For Indian students, Uzbekistan offers cultural and geographical proximity. The country shares several cultural similarities with India, such as a passion for traditional food, customs, and practices. The daily life and cultural environment are comfortable for Indian students, making it easier for them to adjust to life in Uzbekistan.",
        icon: <FaTheaterMasks className="text-[#bf1d1d] text-4xl" />,
      },
    ],
    renminEducation: {
      title: "Why Choose Renmin Education Consultancy?",
      description:
        "Renmin Education Consultancy offers personalized counseling, university selection assistance, document guidance, scholarship assistance, visa support, and accommodation arrangements, ensuring a seamless admission process for MBBS students in Uzbekistan.",
      services: [
        {
          title: "University Selection Assistance",
          icon: <FaUniversity className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Admission Guidance and Application Process",
          icon: <FaUserGraduate className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Scholarship Assistance",
          icon: <FaMoneyCheckAlt className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Visa Assistance",
          icon: <FaPassport className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Accommodation and Travel Assistance",
          icon: <FaHotel className="text-[#bf1d1d] text-2xl" />,
        },
        {
          title: "Pre-Departure Briefing",
          icon: <FaPlaneDeparture className="text-[#bf1d1d] text-2xl" />,
        },
      ],
    },
    mbbs: {
      title: "Study MBBS in Uzbekistan",
      description:
        "Uzbekistan offers high-quality MBBS education at affordable costs. Programs are conducted in English, ensuring no language barriers, and graduates receive internationally recognized degrees.",
      keyFeatures: {
        LowTuitionFees:
          "$3,000 to $6,000 per year for MBBS programs, making it an affordable alternative to private medical colleges in India and the West.",
        RecognizedMedicalDegrees:
          "Uzbekistan’s medical degrees are recognized by WHO, MCI, UNESCO, and other global organizations, enabling graduates to practice internationally.",
        QualityEducationAndResearch:
          "Uzbekistan offers a high standard of education in medicine. The curriculum is structured to meet international standards, and the universities place a strong emphasis on practical training, clinical experience, and research.",
        EnglishMediumPrograms:
          "Most medical universities in Uzbekistan offer MBBS courses in English, eliminating language barriers for international students.",
        CulturalDiversityAndStudentCommunity:
          "Uzbekistan has a diverse student community, with international students from various countries, providing a global learning experience.",
        EasierVisaProcess:
          "Uzbekistan has a relatively simple visa application process for international students. Once you receive your admission letter from a university in Uzbekistan, the visa application process is straightforward and quick. The university typically provides guidance and assistance throughout the visa application process, ensuring that students can travel to Uzbekistan without hassle.",
      },
      topUniversities: [
        {
          name: "Tashkent Medical Academy",
          img: "Tashkent Medical Academy.png",
          website: "https://tma.uz/en/",
        },
        {
          name: "Andijan State Medical Institute",
          img: "Andijan State Medical Institute.png",
          website: "https://adti.uz/en/",
        },
        {
          name: "Samarkand State Medical Institute",
          img: "Samarkand State Medical Institute.png",
          website: "https://www.sammu.uz/en",
        },
        {
          name: "Bukhara State Medical Institute",
          img: "Bukhara State Medical Institute.png",
          website:
            "https://www.rmcedu.com/bukhara-state-medical-institute.html",
        },

        {
          name: "Karshi State Medical Institute",
          img: "Karshi State Medical Institute.png",
          website: "https://qarshidu.uz/en",
        },
      ],
      costOfStudy: {
        title: "Cost of Studying MBBS in Uzbekistan",
        description:
          "The cost of studying MBBS in Uzbekistan is highly affordable compared to Western countries. Below is a breakdown of the estimated costs:",
        programs: [
          {
            title: "MBBS Programs",
            tuitionFees: "$3,000 to $6,000 per year",
            accommodation: "$1,000 to $2,000 per year",
            livingExpenses: "$150 to $300 per month",
            totalCost:
              "$20,000 to $35,000 (including tuition and living expenses for 6 years)",
          },
        ],
      },
    },
    renminEducationHelp: {
      title: "How Renmin Education Helps You Get Admission",
      description:
        "Renmin Education is your trusted partner in guiding you through the admission process, ensuring that you secure scholarships and receive comprehensive support from university selection to visa assistance.",
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
      "Uzbekistan offers international students a unique opportunity to pursue an affordable, high-quality MBBS education at globally recognized universities. With low tuition fees, English-medium programs, experienced faculty, and modern infrastructure, Uzbekistan is an attractive destination for aspiring doctors. Renmin Education Consultancy provides comprehensive support throughout the admission process, from university selection to visa assistance, ensuring a smooth journey for students.",
  },
};

export default countriesData;
