import Header from "../../components/Header/index";
import FavoriteProvider from "../../context/Favorite";
import Containuer from "../../components/Containuer/index";
import Footer from "../../components/Footer/index";
import { Outlet } from "react-router-dom";

const PageBasic = () => {
  return (
    <main>
      <Header />
      <FavoriteProvider>
        <Containuer>
          <Outlet />
        </Containuer>
      </FavoriteProvider>
      <Footer />
    </main>
  );
};

export default PageBasic;
