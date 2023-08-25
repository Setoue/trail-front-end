import React from "react";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import disfavorIcon from "./disfavor.png";
import { useFavoriteContext } from "../../hooks/useFavorite";

const Card = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = isFavorite ? disfavorIcon : favoriteIcon;

  return (
    <div className={styles.card}>
      <img src={capa} alt={titulo} className={styles.banner} />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="to Favorite Movie"
        className={styles.favorite}
        onClick={() => addFavorite({ id, titulo, capa })}
      />
    </div>
  );
};

export default Card;
