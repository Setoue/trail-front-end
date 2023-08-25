import React from "react";
import styles from "./Card.module.css";
import favorite from "./favorite.png";

const Card = ({ titulo, capa }) => {
  return (
    <div className={styles.card}>
      <img src={capa} alt={titulo} className={styles.banner} />
      <h2>{titulo}</h2>
      <img src={favorite} alt="FavoriteMovie" className={styles.favorite} />
    </div>
  );
};

export default Card;
