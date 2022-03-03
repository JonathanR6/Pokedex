import React from "react";
import "../styles/pokemonInfo.css";

const Stats = ({ stats }) => {
  return (
    <div className="statscontainer">
      <div>
        <h4>health: {stats[0].base_stat}</h4>
      </div>

      <div>
        <h4>attack: {stats[1].base_stat}</h4>
      </div>

      <div>
        <h4>defense: {stats[2].base_stat}</h4>
      </div>

      <div>
        <h4>speed: {stats[3].base_stat}</h4>
      </div>
    </div>
  );
};

export default Stats;
