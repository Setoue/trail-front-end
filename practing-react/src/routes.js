import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Favorite from "./pages/Favorite";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Containuer from "./components/Containuer";
import FavoriteProvider from "./context/Favorite.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Containuer>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </FavoriteProvider>
      </Containuer>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
