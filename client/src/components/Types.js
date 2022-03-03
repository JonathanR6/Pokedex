import React from "react";
import "../styles/types.css";

const Types = ({ type }) => {
  return (
    <div className={`${type} divtype`}>
      <p className="typep">{type}</p>
    </div>
  );
};

export default Types;
