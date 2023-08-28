import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import disfavorIcon from "./disfavor.png";
import { useFavoriteContext } from "../../hooks/useFavorite";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? disfavorIcon : favoriteIcon;

  return (
    <div className={styles.card}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.banner} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icon}
        alt="to Favorite Movie"
        className={styles.favorite}
        onClick={() => addFavorite({ id, titulo, capa })}
      />
    </div>
  );
};

export default Card;
