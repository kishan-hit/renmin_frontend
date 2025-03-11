import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Conclusion = ({ conclusion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-6"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Animated Title */}
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

        {/* Animated Text */}
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
              fontWeight: 500,
              margin: "0 auto",
            }}
          >
            {conclusion}
          </Typography>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Conclusion;
