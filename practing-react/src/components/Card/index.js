import React from "react";
import styles from "./Card.module.css";
import favorite from "./favorite.png";

const Card = ({ id, title, banner }) => {
  return (
    <div className={styles.card}>
      <img src={banner} alt={title} className={styles.banner} />
      <h2>{title}</h2>
      <img src={favorite} alt="FavoriteMovie" className={styles.favorite} />
    </div>
  );
};

export default Card;
