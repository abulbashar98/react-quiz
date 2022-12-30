import React from "react";

const Checkbox = ({ text, ...rest }) => {
  return (
    <div>
      <label>
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
