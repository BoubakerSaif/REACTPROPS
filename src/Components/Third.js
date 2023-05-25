import React from "react";
import myImage from "../photo.jpg";
import "./photo.css";
const Third = ({ tap }) => {
  return (
    <div>
      <button onClick={tap} id="btn">
        CLICK ME
      </button>
    </div>
  );
};

export default Third;
