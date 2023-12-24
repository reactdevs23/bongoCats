import React from "react";
import styles from "./Tokenomics.module.css";
import Logo from "../../images/Logo";
import Counter from "./Counter/Counter";

const Tokenomics = () => {
  return (
    <div className={styles.wrapper} id="tokenomics">
      <div className={styles.container}>
        <div className={styles.logoAndHeading}>
          <div className={styles.img} data-aos="fade-right">
            <Logo />
          </div>
          <h2 className={styles.heading} data-aos="fade-left">
            TOKENOMICS
          </h2>
        </div>
        <div className={styles.counterWrapper}>
          <p className={styles.count}>
            {" "}
            <Counter start={0} end={694200000} durationTime={10} />
          </p>
          <p
            className={styles.joints}
            data-aos-delay="100"
            data-aos="fade-left"
          >
            Joints
          </p>
        </div>{" "}
        <div className={styles.progressContainer}>
          <div className={styles.box} data-aos="fade-down">
            <h3 className={[styles.percentage, styles.item1].join(" ")}>
              <Counter percentage start={0} end={10} durationTime={20} />
            </h3>
            <p className={styles.text}>Airdrop</p>
          </div>{" "}
          <div className={styles.box} data-aos="fade-down">
            <h3 className={[styles.percentage, styles.item2].join(" ")}>
              <Counter percentage start={0} end={5} durationTime={20} />
            </h3>
            <p className={styles.text}>DAO</p>
          </div>{" "}
          <div className={styles.box} data-aos="fade-down">
            <h3 className={[styles.percentage, styles.item3].join(" ")}>
              <Counter percentage start={0} end={15} durationTime={20} />
            </h3>
            <p className={styles.text}>Early Contributors</p>
          </div>{" "}
          <div className={styles.box} data-aos="fade-down">
            <h3 className={[styles.percentage, styles.item4].join(" ")}>
              <Counter percentage start={0} end={75} durationTime={20} />
            </h3>
            <p className={styles.text}>Initial Liquidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
