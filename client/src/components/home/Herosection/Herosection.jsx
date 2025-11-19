import React from "react";
import styles from "./Herosection.module.scss";

function Herosection() {
  return (
    <main
      className={`${styles.heroGradient} flex items-center justify-center py-32 px-6 text-center`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className={`${styles.heroTitle} text-3xl md:text-5xl  mb-6`}>
          {/* Your Outsourcing <br /> */}
          <span className={styles.gradientText}>
            Build Your Global Accounting Team With Confidence
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className={`${styles.heroSubtitle} text-lg leading-relaxed mb-12`}>
          Empowering US-based firms with dedicated offshore, outsourced, and
          GCC-enabled accounting teams that deliver accuracy, scalability, and
          cost efficiency.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center mt-5 gap-4">
          <button className={styles.btnDark}> Book a Consultation</button>
          <button className={styles.btnLight}>Explore Products</button>
        </div>
      </div>
    </main>
  );
}

export default Herosection;
