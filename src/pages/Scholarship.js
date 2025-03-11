import React from "react";
import { Typography, Container, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";
import {
  FaGlobeAsia,
  FaGraduationCap,
  FaMoneyBillWave,
  FaUniversity,
} from "react-icons/fa";
import ApplicationProcess from "../components/scholarship/ApplicationProcess";
import Conclusion from "../components/Conclusion";
import ScholarshipTypes from "../components/scholarship/ScholarshipTypes";

const whyStudy = [
  {
    title: "High-Quality Education",
    description:
      "China is home to some of the world’s leading universities offering globally recognized degree programs. Renowned institutions such as Peking University, Fudan University, Tsinghua University, and Zhejiang University provide students with exceptional learning opportunities, state-of-the-art facilities, and cutting-edge research programs.",
    icon: <FaUniversity className="text-[#bf1d1d] text-4xl" />,
  },
  {
    title: "Affordable Tuition and Living Costs",
    description:
      "Compared to many Western countries, China offers education at a much lower cost. Tuition fees in China are significantly more affordable, and the living costs are also relatively low, especially in comparison to countries like the United States, Canada, or the United Kingdom.",
    icon: <FaMoneyBillWave className="text-[#bf1d1d] text-4xl" />,
  },
  {
    title: "Scholarships & Financial Support",
    description:
      "China’s government, along with individual universities, provides a wide variety of scholarships to support international students. These scholarships cover tuition fees, living expenses, and even round-trip airfare, allowing students to focus on their studies without financial worry.",
    icon: <FaGraduationCap className="text-[#bf1d1d] text-4xl" />,
  },
  {
    title: "Cultural Exposure",
    description:
      "Studying in China offers the unique opportunity to experience a vibrant and ancient culture. Students can explore the country's history, traditions, and language, while also being part of a global academic community.",
    icon: <FaGlobeAsia className="text-[#bf1d1d] text-4xl" />,
  },
];

const conclusion =
  "Studying in China under a scholarship is a remarkable opportunity for Indian and international students to access high-quality education at affordable costs. With a wide variety of scholarships offered by the Chinese government, universities, local governments, and international organizations, students can receive not only full tuition coverage but also generous stipends to support their living expenses. China’s rapidly expanding education system, its vibrant culture, and rich history make it an attractive destination for students from around the world. The extensive scholarship options ensure that financial barriers do not stop deserving students from pursuing their dreams of higher education. If you're an aspiring student looking to study in China with a scholarship, Renmin Education Consultancy can guide you through the application process, help you choose the best scholarship programs, and ensure a smooth transition into life as an international student in China. Start your journey today, and explore the incredible opportunities that await you in China! ";

const Scholarship = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="bg-gradient-to-r from-white to-blue-50  flex flex-col overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="py-8 px-4 md:px-8 mt-20">
        <Container maxWidth="lg" className="text-center">
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#bf1d1d",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Comprehensive Guide to Studying in China Under Scholarship &
            Handsome Stipends
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray.700",
              mb: 2,
              mx: "auto",
              maxWidth: "700px",
            }}
          >
            China has rapidly become one of the world’s leading educational
            destinations, offering world-class academic programs at affordable
            tuition rates. The country is not only renowned for its rich
            cultural heritage but also for its top-notch education system,
            particularly in fields such as engineering, business, medicine,
            technology, and natural sciences. Moreover, China’s commitment to
            providing education to international students is reflected in its
            wide range of scholarships, including handsome stipends, to ensure
            that students from all over the world can study there without
            financial constraints.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray.700",
              mt: 2,
              mx: "auto",
              maxWidth: "700px",
            }}
          >
            In this comprehensive guide, we will discuss how Indian and
            international students can study in China under various
            scholarships, the types of scholarships available, the application
            process, and the stipends that make China an increasingly attractive
            option for higher education.
          </Typography>
        </Container>
      </section>

      {/* Why Study Here Section */}
      {whyStudy.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "#bf1d1d",
                mb: 3,
              }}
            >
              Why Study Here?
            </Typography>
          </motion.div>

          <Container maxWidth="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {whyStudy.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#bf1d1d] text-3xl">
                        {point.icon}
                      </div>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "gray.900" }}
                      >
                        {point.title}
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "gray.600",
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      {point.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </>
      )}

      <ScholarshipTypes />
      <ApplicationProcess />
      <Conclusion conclusion={conclusion} />
      <Footer />
    </div>
  );
};

export default Scholarship;
