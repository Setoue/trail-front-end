import { useContext } from "react";
import { FavoriteContext } from "../context/Favorite.js";

export const useFavoriteContext = () => {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const addFavorite = (fav) => {
    const prevFavorite = favorite.some((item) => item.id === fav.id);

    let newFavorite = [...favorite];

    if (!prevFavorite) {
      newFavorite.push(fav);
      return setFavorite(newFavorite);
    }
    console.log("funcionou");

    newFavorite.slice(newFavorite.indexOf(fav), 1);
    return setFavorite(favorite);
  };

  return { favorite, addFavorite };
};
