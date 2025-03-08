import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const CountryCourse = ({ course }) => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listItemAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    }),
  };

  return (
    <>
      <div className="mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className=""
        >
          <Typography
            variant="h4"
            className="!font-bold !mb-6 !text-[#bf1d1d] !text-center 
                 !tracking-wide !md:text-3xl !text-2xl"
          >
            {course.title}
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
            {course.description}
          </Typography>
        </motion.div>
        {/* Key Features Section */}
        {course.keyFeatures && (
          <>
            <Typography
              variant="h6"
              align="center"
              className="!font-bold !mt-6 text-blue-900"
            >
              Key Features
            </Typography>
            <List className="pl-5 !pt-0">
              {Object.entries(course?.keyFeatures).map(
                ([feature, description], index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={listItemAnimation}
                    className="w-full flex"
                  >
                    <ListItem
                      key={index}
                      className="mt-4 flex items-center space-x-4 p-4 bg-white shadow-[2px_2px_2px_#cf9393] rounded-lg w-full hover:shadow-[0px_6px_14px_#cf9393] cursor-pointer transition-shadow duration-300"
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            className="!font-semibold"
                          >
                            {feature.replace(/([A-Z])/g, " $1").trim()}{" "}
                            {/* Formats camelCase to normal text */}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="body2"
                            className="text-gray-600 !font-semibold"
                          >
                            {description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </motion.div>
                )
              )}
            </List>
          </>
        )}
        {/* Fields of Study Section */}
        {course?.fieldsOfStudy != null && (
          <>
            <Typography
              variant="h6"
              align="center"
              className="!font-bold !mt-6 text-blue-900"
            >
              Fields of Study
            </Typography>
            <List className="pl-5 !pt-0">
              {course.fieldsOfStudy.map((field, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={listItemAnimation}
                  className="w-full flex"
                >
                  <ListItem className="mt-4 flex items-center space-x-4 p-4 bg-white shadow-[2px_2px_2px_#cf9393] rounded-lg w-full hover:shadow-[0px_6px_14px_#cf9393] cursor-pointer transition-shadow duration-300">
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          className="!font-semibold text-gray-900"
                        >
                          {field.name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          className="text-gray-600 !font-semibold"
                        >
                          {field.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </>
        )}
        {/* Top Universities Section */}
        {course?.topUniversities?.length > 0 && (
          <Typography
            variant="h6"
            align="center"
            className="!font-bold !mt-8 text-blue-900"
          >
            Top Universities
          </Typography>
        )}
        {course?.topUniversities?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {course?.topUniversities?.map((university, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 450 }}
                className={`w-full mx-auto shadow-md transition-transform hover:scale-105
        ${
          course?.topUniversities?.length % 2 !== 0 &&
          index === course?.topUniversities?.length - 1
            ? "md:col-span-2"
            : ""
        }`}
              >
                <CardActionArea
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.PUBLIC_URL}/${university.img}`}
                    alt={university.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {university.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        )}
        {/* Scholarships Section */}
        {course?.scholarships != null && (
          <Typography
            variant="h6"
            align="center"
            className="!font-bold !mt-8 text-blue-900"
          >
            Scholarships Available
          </Typography>
        )}
        <List className="pl-5">
          {course?.scholarships?.map((scholarship, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={listItemAnimation}
              className="w-full flex"
            >
              <ListItem
                key={index}
                className="mt-4 flex items-center space-x-4 p-4 bg-white shadow-[2px_2px_2px_#cf9393] rounded-lg w-full hover:shadow-[0px_6px_14px_#cf9393] cursor-pointer transition-shadow duration-300"
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {scholarship}
                    </Typography>
                  }
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        {/* Cost */}
        {course?.costOfStudy && (
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
                {course?.costOfStudy.title}
              </Typography>
            </motion.div>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
              {["mbbs", "pg"].map((program, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col bg-white shadow-[0px_4px_10px_#bf1d1d] p-6 rounded-lg border border-gray-200 
                     hover:shadow-[0px_6px_14px_#bf1d1d] transition-shadow duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Program Title */}
                  <Typography
                    variant="h6"
                    className="!font-semibold text-gray-900 mb-3"
                  >
                    {course?.costOfStudy[program].title}
                  </Typography>

                  {/* Tuition Fees */}
                  <Typography
                    variant="body2"
                    className="text-gray-600 leading-relaxed !font-semibold"
                  >
                    <strong>Tuition Fees:</strong>{" "}
                    {course?.costOfStudy[program].tuitionFees}
                  </Typography>

                  {/* Living Expenses */}
                  <Typography
                    variant="body2"
                    className="text-gray-600 leading-relaxed !font-semibold"
                  >
                    <strong>Living Expenses:</strong>{" "}
                    {course?.costOfStudy[program].livingExpenses}
                  </Typography>

                  {/* Total Cost (Only for MBBS) */}
                  {course?.costOfStudy[program]?.totalCost && (
                    <Typography
                      variant="body2"
                      className="text-gray-600 leading-relaxed !font-semibold"
                    >
                      <strong>Total Cost:</strong>{" "}
                      {course?.costOfStudy[program]?.totalCost}
                    </Typography>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* apply */}
        <>
          {/* Section Title */}
          <Typography
            variant="h6"
            align="center"
            className="!font-bold !mt-8 text-blue-900"
          >
            {course?.howToApply?.title}
          </Typography>

          <Typography
            variant="body1"
            align="center"
            className="!text-gray-600 !font-semibold !mt-2 !max-w-2xl !mx-auto"
          >
            {course?.howToApply?.description}
          </Typography>

          {/* Steps List */}
          <List className="pl-5 !pt-0 !mt-4">
            {course?.howToApply?.steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={listItemAnimation}
                className="w-full flex"
              >
                <ListItem
                  className="mt-4 flex items-center space-x-4 p-4 bg-white shadow-[2px_2px_2px_#cf9393] rounded-lg w-full 
                hover:shadow-[0px_6px_14px_#cf9393] cursor-pointer transition-shadow duration-300"
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className="!font-semibold"
                      >
                        {step.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        className="!text-gray-600 !font-semibold"
                      >
                        {step.description}
                      </Typography>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </>
      </div>
    </>
  );
};

export default CountryCourse;
