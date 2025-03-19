import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const menuItems1 = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
  ];

  const menuItems2 = [
    { label: "Scholarship", path: "/scholarship" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const countriesItems = [
    { label: "China", path: "/countries/china" },
    { label: "Russia", path: "/countries/russia" },
    { label: "Kyrgyzstan", path: "/countries/kyrgyzstan" },
    { label: "Bangladesh", path: "/countries/bangladesh" },
    { label: "Uzbekistan", path: "/countries/uzbekistan" },
  ];

  const coursesItems = [
    { label: "Chinese Language", path: "/courses/chinese" },
    { label: "Masters", path: "/courses/masters" },
    { label: "Bachelors", path: "/courses/bachelors" },
    { label: "PhD", path: "/courses/phd" },
    { label: "MBBS", path: "/courses/mbbs" },
  ];

  return (
    <Box>
      {isMobile ? (
        <MobileNav
          menuItems1={menuItems1}
          menuItems2={menuItems2}
          countriesItems={countriesItems}
          coursesItems={coursesItems}
        />
      ) : (
        <DesktopNav
          menuItems1={menuItems1}
          menuItems2={menuItems2}
          countriesItems={countriesItems}
          coursesItems={coursesItems}
        />
      )}
    </Box>
  );
};

export default NavBar;
