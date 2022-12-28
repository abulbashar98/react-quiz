import React from "react";
import classes from "../../styles/Videos.module.css";
import Video from "../Videos";

const Home = () => {
  return (
    <div className={classes.videos}>
      <Video />
    </div>
  );
};

export default Home;
