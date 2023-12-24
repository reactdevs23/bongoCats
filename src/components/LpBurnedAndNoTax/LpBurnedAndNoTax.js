import React from "react";
import styles from "./LpBurnedAndNoTax.module.css";
import Burned from "../../images/Burned";

const LpBurnedAndNoTax = () => {
  return (
    <section className={styles.wrapper}>
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.lpBurnedContainer} data-aos="fade-up">
          {" "}
          <h4 className={styles.lpBurned}>LP Burned</h4>
          <div className={styles.burned}>
            <Burned />
          </div>{" "}
          <div className={[styles.rightBurned].join(" ")}>
            <Burned />
          </div>
        </div>
        <div className={styles.noTaxContainer}>
          <h4 className={styles.noTax}>
            No Taxes, <br />
            No Sh¡tcoin Bullsh¡t
          </h4>
        </div>
      </div>
    </section>
  );
};

export default LpBurnedAndNoTax;
