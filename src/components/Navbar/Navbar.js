import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import styles from "./Navbar.module.css";
import Logo from "../../images/Logo";
import { Link } from "react-scroll";
import { logo } from "../../images";

const Navbar = () => {
  const navItems = [
    { navItem: "About", to: "about" },
    { navItem: "Tokenomics", to: "tokenomics" },
    { navItem: "Roadmap", to: "roadmap" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={[styles.wrapper, isScrolled && styles.wrapperBg].join(" ")}
    >
      <div className={["container", styles.navbar].join(" ")}>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={styles.logoContainer}
        >
          <img
            src={logo}
            alt="#"
            className={styles.img}
            data-aos-delay="500"
            data-aos="fade-right"
          />

          <h3 className={styles.logoText} data-aos="fade-right">
            BongoCats
          </h3>
        </Link>
        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <Link
              key={i}
              className={styles.navItem}
              to={el.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeStyle={{ fontWeight: "700" }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}
        </div>

        {sidebar ? (
          <IoMdClose
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <AiOutlineAlignRight
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
