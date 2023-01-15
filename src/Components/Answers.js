import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          value={index}
          text={option.title}
          onChange={(e) => handleChange(e, index)}
          checked={option.checked}
          key={index}
        />
      ))}
    </div>
  );
};

export default Answers;
