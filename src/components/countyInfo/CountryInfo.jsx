import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import CountryCourse from "./CountryCourse";

const titleAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const listItemAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

const CountryInfo = ({
  title,
  introduction,
  whyStudy = [],
  renminEducation,
  mbbs,
  bachelorPrograms,
  mastersAndPhd,
  renminEducationHelp,
  conclusion,
}) => {
  console.log(bachelorPrograms);
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Title and Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-2"
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#1e40af",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              {title}
            </Typography>
          </motion.div>

          {/* Introduction Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "#475569",
                mb: !4,
                maxWidth: "!700px",
                mx: "!auto",
                fontWeight: "bold",
              }}
            >
              {introduction}
            </Typography>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Study Here? */}
      {whyStudy.length > 0 && (
        <>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <Typography
              variant="h5"
              className="!font-bold !mb-6 !text-[#bf1d1d] !text-center 
                 !tracking-wide !md:text-3xl !text-2xl"
            >
              Why Study Here?
            </Typography>
          </motion.div>

          {/* Animated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {whyStudy.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white shadow-[0px_4px_10px_#bf1d1d] p-6 rounded-lg border border-gray-200 hover:shadow-[0px_6px_14px_#bf1d1d] transition-shadow duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col items-start text-left space-y-2">
                  {/* Icon & Title in the Same Line */}
                  <div className="flex items-center space-x-3">
                    <div className="text-[#bf1d1d] text-3xl">{point.icon}</div>
                    <Typography
                      variant="h6"
                      className="!font-semibold text-gray-900"
                    >
                      {point.title}
                    </Typography>
                  </div>

                  {/* Description Below */}
                  <Typography
                    variant="body2"
                    className="text-gray-600 leading-relaxed !font-semibold"
                  >
                    {point.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/*why to choose Renmin Education */}
      {renminEducation && (
        <div className="bg-gray-100 py-6 px-6 !mt-4 ">
          {" "}
          {/* Increased Padding */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Title Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
            >
              <Typography
                variant="h5"
                className="!font-bold !mb-6 text-[#bf1d1d] text-center 
                 tracking-wide md:text-3xl text-2xl"
              >
                {renminEducation.title}
              </Typography>

              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#475569",
                  mb: !4,
                  maxWidth: "!700px",
                  mx: "!auto",
                  fontWeight: "bold",
                }}
              >
                {renminEducation.description}
              </Typography>
            </motion.div>

            {/* List of Services with Icons & Animation */}
            <List className="text-gray-700 mx-auto !mt-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center">
                {renminEducation.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={listItemAnimation}
                    className="w-full flex"
                  >
                    <ListItem className="flex items-center space-x-4 p-4 bg-white shadow-[2px_2px_2px_#cf9393] rounded-lg w-full hover:shadow-[0px_6px_14px_#cf9393] cursor-pointer transition-shadow duration-300">
                      <div className="text-[#bf1d1d] text-3xl">
                        {service.icon}
                      </div>{" "}
                      {/* Larger Icon */}
                      <ListItemText
                        primary={
                          <Typography
                            variant="h6"
                            className="font-semibold text-gray-900 md:text-xl"
                          >
                            {service.title}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </div>
            </List>
          </div>
        </div>
      )}

      {/* mbbs */}
      {mbbs && <CountryCourse course={mbbs} />}

      {/* Bachelor Programs */}
      {bachelorPrograms && <CountryCourse course={bachelorPrograms} />}

      {/* Masters and PhD */}
      {mastersAndPhd && <CountryCourse course={mastersAndPhd} />}

      {/* How Renmin Education Helps */}
      {renminEducationHelp && (
        <div className="bg-gray-100 py-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
            >
              <Typography
                variant="h5"
                className="!font-bold !mb-6 text-[#bf1d1d] text-center 
                   tracking-wide md:text-3xl text-2xl"
              >
                {renminEducationHelp.title}
              </Typography>

              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#475569",
                  mb: 4,
                  maxWidth: "700px",
                  mx: "auto",
                  fontWeight: "bold",
                }}
              >
                {renminEducationHelp.description}
              </Typography>
            </motion.div>

            {/* List of Services with Icons & Animation */}
            <List className="text-gray-700 mx-auto !mt-6">
              <div className="grid grid-cols-1 gap-6 justify-items-center">
                {renminEducationHelp.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={listItemAnimation}
                    className="w-full flex"
                  >
                    <ListItem className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg w-full hover:shadow-[0px_6px_14px_#bf1d1d] cursor-pointer transition-shadow duration-300">
                      <div className="text-[#bf1d1d] text-3xl">
                        {service.icon}
                      </div>
                      <ListItemText
                        primary={
                          <Typography
                            variant="h6"
                            className="font-semibold text-gray-900 md:text-xl"
                          >
                            {service.title}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </div>
            </List>
          </div>
        </div>
      )}

      {/* Conclusion */}
      {conclusion && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center py-2"
        >
          <div className="max-w-4xl mx-auto px-4">
            {/* Title Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#bf1d1d",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                Conclusion
              </Typography>
            </motion.div>

            {/* Introduction Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#475569",
                  mb: !4,
                  maxWidth: "!700px",
                  mx: "!auto",
                  fontWeight: "bold",
                }}
              >
                {conclusion}
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CountryInfo;
