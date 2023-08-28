import styles from "./Play.module.css";
import Banner from "../../components/Banner/index";
import Title from "../../components/Title/index";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import useFetchVideos from "../../hooks/useFetchVideos";
import { useEffect } from "react";

const Player = () => {
  const { videos, getVideoId } = useFetchVideos();
  const parameters = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parameters.id);
  });

  useEffect(() => {
    getVideoId(parameters);
  }, [getVideoId, parameters]);

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
