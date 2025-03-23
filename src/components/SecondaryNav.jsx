import {
  Login,
  // Phone,
  PhoneForwarded,
  // PhonelinkLockOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const SecondaryNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `linear-gradient(135deg, ${theme.palette.gray.main} 60%, ${theme.palette.red.main} 30%)`,
          backgroundSize: "100% 100%",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", minHeight: 30 }}>
            {/* Left Side (Takes More Space) */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  px: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.yellow.main,
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  India’s No. 1 Online Admission Portal
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.yellow.main,
                    color: theme.palette.yellow.contrastText,
                    fontWeight: "bold",
                    ml: 2,
                    "&:hover": { backgroundColor: theme.palette.yellow.dark },
                  }}
                >
                  APPLY NOW
                </Button>
              </Box>
            )}

            {/* Right Side */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: { xs: 2, md: 4 },
                flex: isMobile ? 1 : "unset",
              }}
            >
              {/* item 1*/}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <IconButton sx={{ color: theme.palette.red.contrastText }}>
                  <PhoneForwarded />
                </IconButton>
                <Typography
                  sx={{
                    color: theme.palette.red.contrastText,
                    fontSize: isMobile ? ".75rem" : "1rem",
                    fontWeight: 500,
                    mr: 2,
                  }}
                >
                  Request a call back
                </Typography>
              </Box>

              {/* item 1*/}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <IconButton sx={{ color: theme.palette.red.contrastText }}>
                  <Login />
                </IconButton>
                <Typography
                  sx={{
                    color: theme.palette.red.contrastText,
                    fontSize: isMobile ? ".75rem" : "1rem",
                    fontWeight: 500,
                  }}
                >
                  Login
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default SecondaryNav;
