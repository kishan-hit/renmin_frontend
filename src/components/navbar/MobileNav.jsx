import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SecondaryNavBar from "./SecondaryNavBar";
import logo from "../../assets/images/logo.jpeg";

const MobileNav = ({
  menuItems1,
  menuItems2,
  countriesItems,
  coursesItems,
}) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [showSecondary, setShowSecondary] = useState(true);

  // Hide secondary nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSecondary(false);
      } else {
        setShowSecondary(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle drawer open/close
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigate and then close drawer
  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems1.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
          >
            <ListItemText primary={item.label.toUpperCase()} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={() => setMobileCountriesOpen((prev) => !prev)}
        >
          <ListItemText primary="COUNTRIES" />
        </ListItem>
        {mobileCountriesOpen &&
          countriesItems.map((item) => (
            <ListItem
              button
              key={item.label}
              sx={{ pl: 4 }}
              onClick={() => handleNavigate(item.path)}
            >
              <ListItemText primary={item.label.toUpperCase()} />
            </ListItem>
          ))}
        <ListItem button onClick={() => setMobileCoursesOpen((prev) => !prev)}>
          <ListItemText primary="COURSES" />
        </ListItem>
        {mobileCoursesOpen &&
          coursesItems.map((item) => (
            <ListItem
              button
              key={item.label}
              sx={{ pl: 4 }}
              onClick={() => handleNavigate(item.path)}
            >
              <ListItemText primary={item.label.toUpperCase()} />
            </ListItem>
          ))}
        {menuItems2.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
          >
            <ListItemText primary={item.label.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#bf1d1d", boxShadow: 3 }}
      >
        {/* Secondary Nav for Mobile */}
        <SecondaryNavBar showSecondary={showSecondary} />
        <Toolbar>
          {/* Left: Logo & Brand */}
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
              onClick={() => handleNavigate("/")}
            />
            <Typography
              variant="h6"
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
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: "#bf1d1d",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MobileNav;
