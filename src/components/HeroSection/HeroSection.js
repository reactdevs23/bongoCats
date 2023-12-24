import React from "react";
import styles from "./HeroSection.module.css";
import { hero, solana } from "../../images";

const HeroSection = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.textContainer} data-aos="fade-right">
          <button className={styles.buyButton}>
            Built on solana{" "}
            <img src={solana} alt="#" className={styles.solana} />
          </button>
          <h2 className={styles.heading}>Solana's Cuttest MEME Coin</h2>
          <button className={styles.comingSoonButton}>Coming Soon</button>
        </div>
        <div className={styles.imageContainer} data-aos="fade-up">
          <img src={hero} alt="#" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
