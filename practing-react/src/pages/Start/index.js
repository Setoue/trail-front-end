import React from "react";
import styles from "./Start.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

const Start = () => {
  return (
    <>
      <Header />
      <Banner img="home" />
      <Footer />
    </>
  );
};

export default Start;
