import { useContext } from "react";
import { FavoriteContext } from "../context/Favorite.js";

export const useFavoriteContext = () => {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const addFavorite = (favorite) => {
    const prevFavorite = favorite.some((item) => item.id === favorite.id);

    let newFavorite = [...favorite];

    if (!prevFavorite) {
      newFavorite.push(favorite);
      return setFavorite(newFavorite);
    }
    console.log("funcionou");

    newFavorite.slice(newFavorite.indexOf(favorite), 1);
    return setFavorite(favorite);
  };

  return { favorite, addFavorite };
};
