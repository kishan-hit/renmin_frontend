import React from "react";
import { Typography, Container, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { FaArrowRight } from "react-icons/fa";

const applicationSteps = [
  {
    title: "Step 1: Choose the Right Scholarship",
    details: [
      "Research the various scholarships available, including CSC scholarships, university-specific scholarships, and local government scholarships.",
      "Consider your eligibility, the benefits offered, and the specific requirements of each scholarship.",
    ],
  },
  {
    title: "Step 2: Prepare Required Documents",
    intro:
      "Typically, you will need the following documents to apply for a scholarship:",
    details: [
      "Valid Passport (for international students)",
      "High School or Bachelor’s Degree Certificate (depending on the level of study)",
      "Academic Transcripts",
      "Proof of Language Proficiency (usually in Chinese or English, depending on the program)",
      "Recommendation Letters",
      "Personal Statement or Motivation Letter",
      "Medical Certificate",
    ],
  },
  {
    title: "Step 3: Apply to Universities",
    details: [
      "Apply to your chosen Chinese universities through their official application portals. Each university will have its own set of application requirements and deadlines.",
      "Apply for scholarships either directly through the university’s scholarship office or through the China Scholarship Council (CSC).",
    ],
  },
  {
    title: "Step 4: Wait for the Result",
    details: [
      "Once your application is submitted, universities and scholarship committees will review your application. If you are successful, you will receive an admission letter and scholarship offer.",
    ],
  },
  {
    title: "Step 5: Visa Application",
    details: [
      "After receiving your scholarship offer and admission letter, the next step is to apply for a Chinese Student Visa (X1 or X2). Ensure that you submit all the required documents to the Chinese Embassy in your home country.",
    ],
  },
  {
    title: "Step 6: Arrival and Orientation",
    details: [
      "Upon arrival in China, you will attend an orientation program organized by your university, which will include information on settling into China, understanding the academic system, and learning about student life.",
    ],
  },
];

const ApplicationProcess = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="py-12 px-4 md:px-8">
      <Container maxWidth="lg">
        {/* Section Heading */}
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
            The Application Process for Scholarships in China
          </Typography>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6">
          {applicationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "gray.900", mb: 2 }}
              >
                {step.title}
              </Typography>
              {step.intro && (
                <Typography variant="body2" sx={{ color: "gray.700", mb: 1 }}>
                  {step.intro}
                </Typography>
              )}
              <ul className="space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <Typography variant="body2" sx={{ color: "gray.700" }}>
                      {"- " + detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ApplicationProcess;
