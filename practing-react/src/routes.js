import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Favorite from "./pages/Favorite";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
