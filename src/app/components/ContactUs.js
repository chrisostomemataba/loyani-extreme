import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import dynamic from "next/dynamic";
import styles from "../../styles/contactUs.module.css";

// Dynamically import the map component to avoid SSR issues
const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <Box
        sx={{
          padding: { xs: "2rem 1rem", md: "4rem 2rem" },
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#ce6510",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Get in Touch with Loyani Safaris
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ce6510" } }}
                sx={{ input: { color: "#050403" } }}
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ce6510" } }}
                sx={{ input: { color: "#050403" } }}
              />
              <TextField
                label="Your Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ style: { color: "#ce6510" } }}
                sx={{ textarea: { color: "#050403" } }}
              />
              <Button
                variant="contained"
                sx={{
                  padding: "0.75rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#ce6510",
                  color: "#fff",
                  ":hover": { backgroundColor: "#ff8c42" },
                }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: { xs: "0", md: "1rem" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#050403",
                }}
              >
                Contact Details
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", color: "#050403" }}
              >
                <strong>Email:</strong> info@loyanisafaris.com
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", color: "#050403" }}
              >
                <strong>Phone:</strong> +255 123 456 789
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", color: "#050403" }}
              >
                <strong>Location:</strong> Arusha, Kilimanjaro, Tanzania
              </Typography>
              <Box sx={{ marginTop: "2.5rem" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "#050403",
                  }}
                >
                  Visit Us
                </Typography>

                {/* Interactive Map */}
                <Box className={styles.mapWrapper}>
                  <MapWithNoSSR />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default ContactUs;
