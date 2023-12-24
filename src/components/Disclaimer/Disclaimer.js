import React from "react";

import styles from "./Disclaimer.module.css";
import GoingToZero from "../../images/GoingToZero";
import Warning from "../../images/Warning";

const Disclaimer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.disclaimerBox} data-aos="fade-right">
          <h4 className={styles.title}>Disclaimer</h4>
          <p className={styles.info}>
            BURRRD is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. The coin is
            completely useless and for entertainment purposes only.
          </p>
          <div className={styles.warning}>
            <Warning />
          </div>
        </div>
        <div className={styles.boxWrapper} data-aos="fade-left">
          <div className={styles.box}>
            <div className={styles.img}>
              <GoingToZero />
            </div>
          </div>{" "}
          <h3 className={styles.goingToZero}>We Are Going to Zero!</h3>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
