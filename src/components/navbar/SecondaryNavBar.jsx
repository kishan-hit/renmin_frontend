import React from "react";
import {
  Box,
  Collapse,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { EmailOutlined, Call } from "@mui/icons-material";

const SecondaryNavBar = ({ showSecondary }) => {
  return (
    <Collapse in={showSecondary} unmountOnExit>
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center" },
          backgroundColor: "#fff",
          color: "#333",
          px: { xs: 2, sm: 3 },
          py: 0,
          minHeight: "32px !important",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        {/* Left side: Email & Phone */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { sm: 0.5, md: 2 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EmailOutlined sx={{ fontSize: 16, color: "#bf1d1d" }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              renmineducation@gmail.com
            </Typography>
          </Box>
          {/* Vertical divider only visible on larger screens */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { sm: "block", xs: "none" },
              borderColor: "#ccc",
              mx: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Call sx={{ fontSize: 16, color: "#bf1d1d" }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              +91-7033919405
            </Typography>
          </Box>
        </Box>

        {/* center divider for mobile only */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { md: "none", xs: "block" },
            borderColor: "#ccc",
            transform: "rotate(30deg)",
            mx: 1,
          }}
        />

        {/* Right side: Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: { xs: 1, sm: 0 },
            justifyContent: "flex-end",
          }}
        >
          <IconButton sx={{ color: "green", p: 0.5 }} aria-label="WhatsApp">
            <FaWhatsapp />
          </IconButton>
          <IconButton sx={{ color: "#bf1d1d", p: 0.5 }} aria-label="Instagram">
            <FaInstagram />
          </IconButton>
          <IconButton sx={{ p: 0.5 }} aria-label="Facebook">
            <FaFacebook style={{ color: "blue" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </Collapse>
  );
};

export default SecondaryNavBar;
