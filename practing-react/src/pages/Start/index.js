import styles from "./Start.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import useFetchVideos from "../../hooks/useFetchVideos";
import { useEffect } from "react";

const Start = () => {
  const { videos, getVideo } = useFetchVideos();

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  return (
    <>
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Start;
