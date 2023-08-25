import React from "react";
import styles from "./Favorite.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { useFavoriteContext } from "../../hooks/useFavorite";

const Favorite = () => {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default Favorite;
