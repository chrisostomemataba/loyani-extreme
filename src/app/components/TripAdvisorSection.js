import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import styles from "./../../styles/TripAdvisorSection.module.css";

export default function TripAdvisorSection({ hotels }) {
  return (
    <section className={styles.tripAdvisorSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <FaStar className={styles.starIcon} />
          Check on TripAdvisor
          <FaStar className={styles.starIcon} />
        </h2>
        <div className={styles.cardGrid}>
          {hotels.map((hotel) => (
            <Card key={hotel.id} className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Typography variant="h6" className={styles.hotelTitle}>
                  {hotel.title}
                </Typography>
                <Button
                  variant="contained"
                  href={hotel.tripAdvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tripAdvisorButton}
                >
                  View on TripAdvisor
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
