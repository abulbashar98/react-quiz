import React from "react";
import signUpImage from "../Assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signUpImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
