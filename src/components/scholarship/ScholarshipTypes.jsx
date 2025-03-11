import React from "react";
import { Container, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { FaArrowRight } from "react-icons/fa";

const ScholarshipTypes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="py-12 px-4 md:px-8">
      <Container maxWidth="lg">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h2"
            sx={{ fontWeight: "bold", color: "#bf1d1d", mb: 2 }}
          >
            Types of Scholarships in China for Indian & International Students
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray.700",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            China offers a variety of scholarships for international students at
            different levels, including undergraduate (bachelor’s), postgraduate
            (master’s and PhD), and Chinese language courses. The scholarships
            typically cover tuition, accommodation, medical insurance, and
            living stipends. Below are the major types of scholarships offered
            by the Chinese government and Chinese universities.
          </Typography>
        </motion.div>

        {/* 1. Chinese Government Scholarships */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
          >
            1. Chinese Government Scholarships
          </Typography>
          <Typography variant="body2" sx={{ color: "gray.700", mb: 2 }}>
            The Chinese Government Scholarship (CSC) is one of the most
            prestigious and comprehensive scholarships available for
            international students. The program is funded by the Chinese
            government and administered through the China Scholarship Council
            (CSC). The CSC Scholarship covers various aspects of a student’s
            academic journey in China.
          </Typography>

          {/* Types of Chinese Government Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Types of Chinese Government Scholarships
          </Typography>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Bilateral Program:</strong> These scholarships are
                available through agreements between the Chinese government and
                various countries. Students receive full funding, including
                tuition, accommodation, and monthly stipends.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Chinese University Program:</strong> These are
                scholarships provided by Chinese universities to support
                international students. While the scope of the scholarships may
                vary, they generally cover tuition fees, accommodation, and a
                monthly stipend for living expenses.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Great Wall Program:</strong> Targeted at students from
                developing countries, this program provides scholarships for
                study and research in China.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>EU Program:</strong> This is specifically for students
                from European Union countries. It offers full funding for study
                in China.
              </Typography>
            </li>
          </ul>

          {/* Benefits of CSC */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Benefits of the Chinese Government Scholarship (CSC)
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Full Tuition Coverage:</strong> The scholarship covers
                the entire tuition fee for the duration of the program.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Accommodation:</strong> Accommodation costs in
                university dormitories are fully covered.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Monthly Stipend:</strong> Students receive a handsome
                monthly stipend to cover living expenses. <br />
                • Undergraduate: CNY 2,500 per month <br />
                • Master’s: CNY 3,000 per month <br />• PhD: CNY 3,500 per month
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Medical Insurance:</strong> A comprehensive health
                insurance policy is provided.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Round-trip Airfare:</strong> Travel expenses to and from
                China are often covered.
              </Typography>
            </li>
          </ul>
        </motion.div>

        {/* 2. University-Specific Scholarships */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
          >
            2. University-Specific Scholarships
          </Typography>
          <Typography variant="body2" sx={{ color: "gray.700", mb: 2 }}>
            Several Chinese universities offer their own scholarships for
            international students. These scholarships may vary in terms of
            coverage and benefits, but they are often aimed at enhancing the
            global diversity of the student body.
          </Typography>

          {/* Popular University-Specific Scholarships Include */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Popular University-Specific Scholarships Include:
          </Typography>
          <ul className="space-y-2 mb-4">
            <li className="flex flex-col">
              <Typography
                variant="body2"
                sx={{ color: "gray.700", fontWeight: 600 }}
              >
                • Tsinghua University Scholarships
              </Typography>
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Tsinghua University provides scholarships for both undergraduate
                and postgraduate international students. The scholarship covers
                tuition, accommodation, and living expenses. Tsinghua is known
                for offering full and partial scholarships based on academic
                merit.
              </Typography>
            </li>
            <li className="flex flex-col">
              <Typography
                variant="body2"
                sx={{ color: "gray.700", fontWeight: 600 }}
              >
                • Peking University Scholarships
              </Typography>
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                As one of China’s most prestigious universities, Peking
                University offers various scholarships for international
                students. The scholarships include tuition waivers, stipends,
                and other benefits.
              </Typography>
            </li>
            <li className="flex flex-col">
              <Typography
                variant="body2"
                sx={{ color: "gray.700", fontWeight: 600 }}
              >
                • Shanghai Jiao Tong University Scholarships
              </Typography>
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                SJTU offers several types of scholarships for international
                students, including the SJTU Scholarship and the Chinese
                Government Scholarship.
              </Typography>
            </li>
            <li className="flex flex-col">
              <Typography
                variant="body2"
                sx={{ color: "gray.700", fontWeight: 600 }}
              >
                • Fudan University Scholarships
              </Typography>
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Fudan offers Fudan University Scholarships that cover the entire
                cost of education, including tuition, accommodation, and
                stipends.
              </Typography>
            </li>
          </ul>

          {/* Benefits of University-Specific Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Benefits of University-Specific Scholarships
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Full Tuition Coverage:</strong> Scholarships typically
                cover all or most tuition fees.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Accommodation:</strong> Most university scholarships
                offer accommodation in university dormitories.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Monthly Stipends:</strong> A stipend to cover living
                expenses is often provided, which can vary depending on the
                university and level of study.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Medical Insurance:</strong> A health insurance plan is
                often included.
              </Typography>
            </li>
          </ul>
        </motion.div>

        {/* 3. Confucius Institute Scholarships */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
          >
            3. Confucius Institute Scholarships (for Chinese Language Studies)
          </Typography>
          <Typography variant="body2" sx={{ color: "gray.700", mb: 2 }}>
            The Confucius Institute Scholarship is designed for students who
            want to learn the Chinese language. Offered by the Confucius
            Institute Headquarters, the scholarship covers tuition fees,
            accommodation, and living expenses for students enrolled in Chinese
            language programs at various universities in China.
          </Typography>

          {/* Benefits of Confucius Institute Scholarship */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Benefits of the Confucius Institute Scholarship
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Full Tuition Waiver</strong>
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Accommodation:</strong> Free or subsidized accommodation
                in university dormitories.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Living Stipend:</strong> A monthly stipend to cover
                living costs. <br />• For long-term students: CNY 2,500 per
                month for language programs.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Medical Insurance:</strong> Comprehensive health
                insurance for the duration of the scholarship.
              </Typography>
            </li>
          </ul>
        </motion.div>

        {/* 4. Local Government Scholarships */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
          >
            4. Local Government Scholarships
          </Typography>
          <Typography variant="body2" sx={{ color: "gray.700", mb: 2 }}>
            Some provincial and local governments in China offer scholarships to
            international students. These are typically provided to attract
            foreign talent to specific regions of China and are available for
            students from countries that have bilateral agreements with the
            respective province.
          </Typography>

          {/* Popular Local Government Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Popular Local Government Scholarships
          </Typography>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Beijing Government Scholarship
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Guangzhou Government Scholarship
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Shandong Government Scholarship
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Chongqing Government Scholarship
              </Typography>
            </li>
          </ul>

          {/* Benefits of Local Government Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Benefits of Local Government Scholarships
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Full or Partial Tuition Coverage:</strong> Scholarships
                may cover all or part of the tuition fees.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Accommodation:</strong> Local government scholarships
                may cover accommodation costs.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Living Stipends:</strong> A monthly stipend may be
                provided to cover living expenses.
              </Typography>
            </li>
          </ul>
        </motion.div>

        {/* 5. Corporate and NGO Scholarships */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
          >
            5. Corporate and NGO Scholarships
          </Typography>
          <Typography variant="body2" sx={{ color: "gray.700", mb: 2 }}>
            In addition to government and university-based scholarships, various
            international organizations, foundations, and companies offer
            scholarships for students wishing to study in China. These
            scholarships may be aimed at specific fields of study, such as
            engineering, business, medicine, or technology, and can be based on
            merit or financial need.
          </Typography>

          {/* Examples of Corporate and NGO Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Examples of Corporate and NGO Scholarships
          </Typography>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                The China-Africa Friendship Scholarship
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                China Scholarship for Developing Countries
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                Asia-Europe Foundation Scholarships
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                The Belt and Road Initiative Scholarship
              </Typography>
            </li>
          </ul>

          {/* Benefits of Corporate and NGO Scholarships */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "gray.900", mb: 1 }}
          >
            Benefits of Corporate and NGO Scholarships
          </Typography>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Tuition Fee Coverage:</strong> Most scholarships cover
                full or partial tuition.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Living Stipend:</strong> Corporate and NGO scholarships
                often provide a stipend for living expenses.
              </Typography>
            </li>
            <li className="flex items-start space-x-2">
              <FaArrowRight className="text-[#bf1d1d] mt-1" />
              <Typography variant="body2" sx={{ color: "gray.700" }}>
                <strong>Travel Expenses:</strong> Some corporate scholarships
                may cover travel expenses to China.
              </Typography>
            </li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};

export default ScholarshipTypes;
