import React from "react";
import styles from "./RoadMap.module.css";
import Line from "../../images/Line.jsx";

import { gif } from "../../images/index.js";

const RoadMap = () => {
  const data = [
    { title: "Sharp", img: gif, bg: "#ffc701" },
    { title: "Stab!", img: gif, bg: "#F24E1E" },
    { title: "Stab", img: gif, bg: "#ffc701" },
    { title: "Clean Evidence", img: gif, bg: "#F24E1E" },
    { title: "Thanks For Cleaning Evidence", img: gif, bg: "#ffc701" },
  ];
  return (
    <div className={styles.wrapper} id="roadmap">
      {" "}
      <h2 className={styles.heading}>RoadMap</h2>
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.lineImg}>
          <Line />
        </div>
        {data.map((el, i) => (
          <div
            data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
            key={i}
            className={[styles.cardWrapper, i % 2 !== 0 && styles.right].join(
              " "
            )}
          >
            <div className={styles.card}>
              <h4 className={styles.step} style={{ background: el.bg }}>
                {i + 1}
              </h4>
              <h3 className={styles.title}>{el.title}</h3>
              <img src={el.img} alt="#" className={styles.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
