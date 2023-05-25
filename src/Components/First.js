import React from "react";
import "./styles.css";

const First = ({ text, num }) => {
  return (
    <div className="first">
      {text} {num}
    </div>
  );
};

export default First;
