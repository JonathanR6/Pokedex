import React from "react";
import "../styles/filter.css";

const Options = ({ name, selectable, dropdown, drop, select }) => {
  return (
    <div className="option">
      <button id={name} onClick={drop}>
        {name}
      </button>

      <div className="optionone">
        {dropdown[name] &&
          selectable &&
          selectable.map((r) => {
            return (
              <p id={r} onClick={select} key={r + Math.random()}>
                {r}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Options;
