import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material"; // We'll use Button to toggle top row
import { FaChevronDown } from "react-icons/fa";

import SecondaryNavBar from "./SecondaryNavBar";
import logo from "../../assets/images/logo.jpeg";

const DesktopNav = ({
  menuItems1,
  menuItems2,
  countriesItems,
  coursesItems,
}) => {
  const navigate = useNavigate();

  // Dropdown states
  const [anchorElCountries, setAnchorElCountries] = useState(null);
  const [anchorElCourses, setAnchorElCourses] = useState(null);

  // Toggles the top "secondary" row
  const [showSecondary, setShowSecondary] = useState(true);

  // Hide secondary nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, hide secondary nav, otherwise show it
      if (window.scrollY > 50) {
        setShowSecondary(false);
      } else {
        setShowSecondary(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown handlers
  const handleCountriesMenuOpen = (event) => {
    setAnchorElCountries(event.currentTarget);
  };
  const handleCountriesMenuClose = () => {
    setAnchorElCountries(null);
  };

  const handleCoursesMenuOpen = (event) => {
    setAnchorElCourses(event.currentTarget);
  };
  const handleCoursesMenuClose = () => {
    setAnchorElCourses(null);
  };

  // Toggle the secondary navbar
  const handleToggleSecondary = () => {
    setShowSecondary((prev) => !prev);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#bf1d1d", boxShadow: 3 }}>
      {/* TOP ROW (SECONDARY NAV) */}
      <SecondaryNavBar showSecondary={showSecondary} />

      {/* MAIN NAV ROW */}
      <Toolbar>
        {/* Logo & Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 40, md: 48 },
              width: { xs: 40, md: 48 },
              backgroundColor: "white",
              borderRadius: "50%",
              p: 0.1,
              border: "1px solid #e0e0e0",
              boxShadow: 3,
              cursor: "pointer",
              position: "absolute",
              left: 0,
            }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h5"
            sx={{
              ml: 8,
              color: "white",
              fontFamily: "serif",
              fontWeight: "bold",
              fontStyle: "italic",
              textTransform: "uppercase",
            }}
          >
            Renmin Education
          </Typography>
        </Box>

        {/* Navigation Links & Toggle Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Main Menu Items1 */}
          {menuItems1.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              onClick={() => navigate(item.path)}
              sx={{
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&:hover": { color: "grey.300" },
              }}
            >
              {item.label}
            </Typography>
          ))}

          {/* Countries Dropdown */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            onMouseEnter={handleCountriesMenuOpen}
            onMouseLeave={handleCountriesMenuClose}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", "&:hover": { color: "grey.300" } }}
            >
              Countries
            </Typography>
            <FaChevronDown style={{ marginLeft: 4, fontSize: 12 }} />
            <Menu
              anchorEl={anchorElCountries}
              open={Boolean(anchorElCountries)}
              onClose={handleCountriesMenuClose}
              MenuListProps={{ onMouseLeave: handleCountriesMenuClose }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              {countriesItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    handleCountriesMenuClose();
                  }}
                  sx={{ textTransform: "uppercase" }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Courses Dropdown */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            onMouseEnter={handleCoursesMenuOpen}
            onMouseLeave={handleCoursesMenuClose}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", "&:hover": { color: "grey.300" } }}
            >
              Courses
            </Typography>
            <FaChevronDown style={{ marginLeft: 4, fontSize: 12 }} />
            <Menu
              anchorEl={anchorElCourses}
              open={Boolean(anchorElCourses)}
              onClose={handleCoursesMenuClose}
              MenuListProps={{ onMouseLeave: handleCoursesMenuClose }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              {coursesItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    handleCoursesMenuClose();
                  }}
                  sx={{ textTransform: "uppercase" }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Main Menu Items2 */}
          {menuItems2.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              onClick={() => navigate(item.path)}
              sx={{
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&:hover": { color: "grey.300" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
