import React, { useState } from "react";
import {
  Modal,
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, handleClose }) => {
  const countries = ["India", "USA", "UK", "Canada"];
  const states = ["State 1", "State 2", "State 3"];
  const cities = ["City 1", "City 2", "City 3"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "90vw", // Responsive width
          width: "400px",
          boxShadow: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centering modal
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close Button */}
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" align="center" fontWeight="bold" mb={2}>
          Apply for MBBS in Abroad
        </Typography>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          select
          label="Select Your Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          fullWidth
          margin="dense"
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Your State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          fullWidth
          margin="dense"
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Your City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          margin="dense"
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#1e3a8a",
            color: "white",
            mt: 2,
            "&:hover": { backgroundColor: "#172554" }, // Darker on hover
          }}
        >
          SUBMIT NOW
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
