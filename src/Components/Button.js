import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ buttonText }) => {
  return (
    <div className={classes.button}>
      <span>{buttonText}</span>
    </div>
  );
};

export default Button;
