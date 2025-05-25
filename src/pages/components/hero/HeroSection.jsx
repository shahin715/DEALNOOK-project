import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ imgSrc, altText, link = "/" }) => {
  

  const isAbsoluteLink =
    link.startsWith("http") || link.startsWith("www") || link.startsWith("/");

  const finalLink = isAbsoluteLink ? link : `/${link}`;

  return (
    <Link to={finalLink}>
      <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <img
          src={imgSrc}
          alt={altText || "Hero Section"}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
};

export default HeroSection;


