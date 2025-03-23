import React, { useState } from "react";
import {
  Modal,
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import emailjs from "emailjs-com";

const CustomModal = ({ open, handleClose }) => {
  const states = [
    "Arunachal Pradesh", "Andhra Pradesh", "Assam", "Bihar", "Jharkhand",
    "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Meghalaya", "Nagaland", "Orisha",
    "Punjab", "Rajasthan", "Tamilnadu", "Uttar Pradesh", "Chhattisgarh",
    "Manipur", "Tripura", "Sikkim", "Mizoram", "Goa", "Delhi",
    "Uttarakhand", "West Bengal",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    phone: "",
  });

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "state") {
      fetchCities(e.target.value);
    }
  };

  const fetchCities = async (stateName) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        { country: "India", state: stateName }
      );
      setCities(response.data.data || []);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    }
    setLoading(false);
  };

  const sendEmail = () => {
    setSending(true);
    emailjs
      .send(
        "service_eu3aq98",
        "template_6s28dam",
        {
          name: formData.name,
          email: formData.email,
          state: formData.state,
          city: formData.city,
          phone: formData.phone,
        },
        "HtVy_Lq5EuCMY4Awd"
      )
      .then(() => {
        console.log("Data received");
        alert("Your data has been successfully received!");
        setFormData({ name: "", email: "", state: "", city: "", phone: "" });
      })
      .catch((err) => {
        console.log("Data send failed", err);
        alert("Failed to send email: " + err.text)
      })
      .finally(() => setSending(false));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "90vw",
          width: "400px",
          boxShadow: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" align="center" fontWeight="bold" mb={2}>
          Apply for Study Abroad
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
          disabled={loading || cities.length === 0}
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={20} sx={{ marginRight: 1 }} />
              Loading cities...
            </MenuItem>
          ) : cities.length > 0 ? (
            cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No cities available</MenuItem>
          )}
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
            "&:hover": { backgroundColor: "#172554" },
          }}
          onClick={sendEmail}
          disabled={sending}
        >
          {sending ? <CircularProgress size={20} color="inherit" /> : "SUBMIT NOW"}
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
