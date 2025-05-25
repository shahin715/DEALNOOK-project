import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import img1 from "../../../assets/hero2.png";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        imgSrc={img1}
        altText="A Custom Hero Image"
        link="/notfound" // Pass a relative or absolute link here
      />
    </div>
  );
};

export default HomePage;
