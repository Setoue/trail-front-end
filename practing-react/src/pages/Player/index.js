import React from "react";
import styles from "./Play.module.css";
import Banner from "../../components/Banner/index";
import Title from "../../components/Title/index";
import { useParams } from "react-router-dom";
import videos from "../../json/db.json";
import NotFound from "../NotFound";

const Player = () => {
  const parameters = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parameters.id);
  });

  console.log(video);

  if (!video) {
    return <NotFound />;
  }
  return (
    <>
      <Banner img="player" />
      <Title>
        <h1>{video.titulo}</h1>
      </Title>
      <section className={styles.conatiner}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
