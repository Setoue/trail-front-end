import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ img }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/imgs/banner-${img}.png')` }}
    ></div>
  );
};

export default Banner;
