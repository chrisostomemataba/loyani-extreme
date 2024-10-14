import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../../styles/contactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.contentWrapper}
      >
        <Typography variant="h2" className={styles.sectionTitle}>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" className={styles.sectionSubtitle}>
          We would love to hear from you and help plan your next adventure!
        </Typography>

        <div className={styles.contactContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.formWrapper}
          >
            <TextField
              label="Your Name"
              fullWidth
              variant="outlined"
              className={styles.inputField}
            />
            <TextField
              label="Your Email"
              fullWidth
              variant="outlined"
              className={styles.inputField}
            />
            <TextField
              label="Your Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              className={styles.inputField}
            />
            <Button
              variant="contained"
              className={styles.submitButton}
              fullWidth
            >
              Send Message
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div>
                <Typography variant="h6">Email Us</Typography>
                <Typography>info@loyanisafaris.com</Typography>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <Typography variant="h6">Call Us</Typography>
                <Typography>+255 123 456 789</Typography>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <Typography variant="h6">Visit Us</Typography>
                <Typography>Arusha, Kilimanjaro, Tanzania</Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
