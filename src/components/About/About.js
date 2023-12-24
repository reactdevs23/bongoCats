import React from "react";
import styles from "./About.module.css";

import Wanted from "../../images/wanted";

const About = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading} data-aos="fade-right">
            About
            <div className={styles.img}>
              <Wanted />
            </div>
          </h2>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              BURRRD had enough of the never-ending sh¡tcoin circus, with all
              those ridiculous dog derivatives and even that green thing. They
              had their moment to shine, but now it is BURRRD's turn to spread
              his wings!
            </p>
            <p className={styles.info}>
              With a determined glint in his beady eyes, BURRRD holds his blade
              above, leading his flock to slay all the wretched sh!tcoins that
              dare cross his path
            </p>
          </div>
          <div className={styles.viewMoreContainer}>
            {" "}
            <button className={styles.viewMore}> View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
