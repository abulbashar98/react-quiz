import React from "react";

const Checkbox = ({ text, className, ...rest }) => {
  return (
    <div>
      <label className={className}>
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
