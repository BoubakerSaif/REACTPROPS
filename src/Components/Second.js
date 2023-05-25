import React from "react";
import "./styles.css";

const Second = ({ userInfo }) => {
  const { name, age } = userInfo;

  return (
    <div className="second">
      My name is {name} <br />
      I'm {age}
    </div>
  );
};

export default Second;
