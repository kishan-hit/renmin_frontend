import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";

const scholarships = [
  {
    title: "Chinese Government Scholarship (CSC)",
    coverage:
      "Full tuition, accommodation, living stipend, medical insurance, and sometimes airfare.",
    eligibility:
      "Students from all countries who meet the admission requirements of the Chinese universities they are applying to.",
    application:
      "Applications for the CSC Scholarship are made directly through participating Chinese universities or their local Chinese embassies.",
  },
  {
    title: "Belt and Road Scholarship",
    coverage:
      "Full tuition, accommodation, living expenses, and medical insurance.",
    eligibility:
      "Available to students from countries participating in the Belt and Road Initiative.",
    application:
      "Applications are typically submitted through the Chinese embassy or directly to universities involved in the initiative.",
  },
  {
    title: "University-Specific Scholarships",
    coverage:
      "Varies by university, typically includes tuition, accommodation, and living stipends.",
    eligibility: "Criteria vary by university, often merit-based.",
    application: "Apply directly through university portals.",
  },
  {
    title: "Confucius Institute Scholarship",
    coverage:
      "Full tuition, accommodation, living expenses, and medical insurance.",
    eligibility:
      "Applicants must be non-Chinese citizens with a good academic record and a desire to study Chinese language or culture.",
    application:
      "Applications can be made through Confucius Institutes worldwide or directly to participating Chinese universities.",
  },
  {
    title: "Provincial Scholarships",
    coverage: "Tuition and accommodation, some offer monthly stipends.",
    eligibility: "Criteria vary by province and university.",
    application: "Apply through provincial government portals or universities.",
  },
];

const Scholarship = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect screen size

  return (
    <>
      <NavBar />
      {/* Background */}
      <div
        style={{
          background: "white",
          minHeight: "100vh",
          padding: "120px 0",
        }}
      >
        <Container maxWidth="lg">
          {/* Page Title */}
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
            🎓 Scholarships & Financial Aid
          </Typography>

          {/* Subtitle */}
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
            We understand the financial burden of studying abroad. Renmin
            Education provides detailed information about scholarships,
            financial aid opportunities, and education loans.
          </Typography>

          {/* Conditional Rendering Based on Screen Size */}
          {isMobile ? (
            // Mobile View (Cards)
            <Grid container spacing={4}>
              {scholarships.map((scholarship, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      transition: "all 0.3s ease",
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                      padding: "10px",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                      },
                      height: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#1e40af",
                          mb: 1,
                          textAlign: "center",
                        }}
                      >
                        {scholarship.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#334155", mb: 1, textAlign: "center" }}
                      >
                        <strong>Coverage:</strong> {scholarship.coverage}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#334155", mb: 1, textAlign: "center" }}
                      >
                        <strong>Eligibility:</strong> {scholarship.eligibility}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#334155",
                          textAlign: "center",
                          flexGrow: 1,
                        }}
                      >
                        <strong>Application:</strong> {scholarship.application}
                      </Typography>
                      <Box sx={{ mt: "20px" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            background: "#1e40af",
                            color: "#fff",
                            fontWeight: "bold",
                            borderRadius: "10px",
                          }}
                        >
                          Apply Now
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            // PC View (List with Button on Right)
            <List>
              {scholarships.map((scholarship, index) => (
                <ListItem
                  key={index}
                  sx={{ borderBottom: "1px solid #ddd", padding: "20px" }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#1e40af" }}
                      >
                        {scholarship.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          variant="body2"
                          sx={{ color: "#334155", mt: 1 }}
                        >
                          <strong>Coverage:</strong> {scholarship.coverage}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#334155", mt: 1 }}
                        >
                          <strong>Eligibility:</strong>{" "}
                          {scholarship.eligibility}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#334155", mt: 1 }}
                        >
                          <strong>Application:</strong>{" "}
                          {scholarship.application}
                        </Typography>
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#1e40af",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      Apply Now
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
