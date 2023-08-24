import React from "react";
import styles from "./Start.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

const Start = () => {
  return (
    <>
      <Header />
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card
        id="1"
        title="number One"
        banner="https://thecatapi.com/api/images/get?format-src&type=png"
      />
      <Footer />
    </>
  );
};

export default Start;
