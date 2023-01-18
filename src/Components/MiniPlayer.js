import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = ({ id, title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      setStatus(true);
      buttonRef.current.classList.add(classes.floatingBtn);
    } else {
      setStatus(false);
      buttonRef.current.classList.remove(classes.floatingBtn);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        playing={!status}
        controls={status}
        width="300px"
        height="168px"
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
