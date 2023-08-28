import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Favorite from "./pages/Favorite";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import PageBasic from "./pages/PageBasic";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBasic />}>
          <Route index element={<Start />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
