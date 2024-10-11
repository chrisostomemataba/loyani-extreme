import React from "react";
import styles from "../../styles/aboutHero.module.css"; // Correct path for CSS module
import Button from "@mui/material/Button"; // Material UI Button component

const AboutHero = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className={styles.heroContainer}>
      <video autoPlay loop muted className={styles.heroVideo}>
        <source src="/videos/zebras.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        {/* Button with Tailwind + Material UI */}
        <Button
          variant="contained"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#ff7f00", // Loyani Orange
            "&:hover": {
              backgroundColor: "#e66c00", // Darker Orange on hover
            },
            padding: "0.75rem 2rem",
            fontSize: "1.25rem",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AboutHero;
