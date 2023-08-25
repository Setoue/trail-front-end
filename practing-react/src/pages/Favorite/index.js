import React from "react";
import styles from "./Favorite.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

const Favorite = () => {
  return (
    <>
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        <Card titulo="teste" key="2313" />
      </section>
    </>
  );
};

export default Favorite;
