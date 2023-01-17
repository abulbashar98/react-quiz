import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ next, prev, submit, progress }) => {
  const tooltipRef = useRef();
  const [tooltip, setToolTip] = useState(false);

  const toggleTooltip = () => {
    if (tooltip) {
      setToolTip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setToolTip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  };

  return (
    <div className={classes.progressBar}>
      <div className={classes.blackButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOut={toggleTooltip}
            onMouseOver={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
