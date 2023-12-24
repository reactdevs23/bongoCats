import React from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";

import styles from "./FollowMe.module.css";
import Logo from "../../images/Logo";
import Follow from "../../images/Follow";

const FollowMe = () => {
  const socials = [
    {
      icon: <FaTelegramPlane className={styles.socialIcon} />,
      name: "Telegram",
      to: "#",
    },
    {
      icon: <FaDiscord className={styles.socialIcon} />,
      name: "Discord",
      to: "#",
    },
    {
      icon: <FaTwitter className={styles.socialIcon} />,
      name: "Twitter",
      to: "#",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.imageContainer} data-aos="fade-down">
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.followContainer}>
            <div className={styles.follow}>
              <Follow />
              <p className={styles.tagline}>Follow Me</p>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.heading} data-aos="fade-left">
            Follow Us
          </h3>
          <p className={styles.text}>
            Stay tuned for our latest updates and announcements. Follow us on
            socials.
          </p>
          <div className={styles.socials}>
            {socials.map((el, i) => (
              <a href={el.to} key={i} className={styles.iconContainer}>
                <span>{el.icon}</span>
                <span className={styles.name}>{el.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
