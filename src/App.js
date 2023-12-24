import React, { useEffect } from "react";
import About from "./components/About/About";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import FollowMe from "./components/FollowMe/FollowMe";
import HeroSection from "./components/HeroSection/HeroSection";
import LpBurnedAndNoTax from "./components/LpBurnedAndNoTax/LpBurnedAndNoTax";
import Navbar from "./components/Navbar/Navbar";
import RoadMap from "./components/RoadMap/RoadMap";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease",
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Tokenomics />
      <LpBurnedAndNoTax />
      <RoadMap />
      <Disclaimer />
      <FollowMe />
    </>
  );
}

export default App;
