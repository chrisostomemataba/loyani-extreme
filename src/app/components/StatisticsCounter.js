import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/statisticsCounter.module.css";

const StatisticsCounter = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.statsSection}>
      <div className="container mx-auto px-6 py-12">
        <div className={styles.statsGrid} ref={ref}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statCard} ${inView ? styles.animate : ""}`}
            >
              <h3 className={styles.statValue}>
                {inView && <CountUp end={stat.value} duration={3} />}
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
