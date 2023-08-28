import { useState } from "react";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = () => {
    fetch(`https://my-json-server.typicode.com/setoue/api-server-json/videos`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  };

  const getVideoId = (parameter) => {
    fetch(
      `https://my-json-server.typicode.com/setoue/api-server-json/videos?id=${parameter?.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  };

  return { videos, getVideo, getVideoId };
};

export default useFetchVideos;
