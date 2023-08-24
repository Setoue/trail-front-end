import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./Logo-cinetag-branco 1.png";
import HeaderLink from "../HeaderLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="log"></img>
        <nav>
          <HeaderLink url="./">Home</HeaderLink>
          <HeaderLink url="./Favorite">Favorite</HeaderLink>
        </nav>
      </Link>
    </header>
  );
};

export default Header;
