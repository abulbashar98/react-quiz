import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  // const [page, setPage] = useState(1);
  const { loading, error, videos } = useVideoList();

  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) =>
          video.noq > 0 ? (
            <Link
              to={`/quiz/${video.youtubeID}`}
              state={{ videoTitle: video.title }}
            >
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            </Link>
          ) : (
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          )
        )}

      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading.....</div>}
    </div>
  );
};

export default Videos;
