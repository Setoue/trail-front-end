import "./Banner.css";
import React from "react";

interface BannerProps {
  src: string;
  alt?: string;
}

const Banner = ({ src, alt }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      <img src={src} alt={alt} />
    </header>
  );
};

export default Banner;
