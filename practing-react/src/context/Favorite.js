import React, { createContext, useState } from "react";
// import FavoriteContext from "../context/Favorite.js";

export const FavoriteContext = createContext();

FavoriteContext.displayName = "Favoritos";

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
