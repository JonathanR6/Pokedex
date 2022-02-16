import React from "react";

const Stats = ({ stats }) => {
  return (
    <>
      <h4>vida: {stats[0].base_stat}</h4>
      <h4>ataque: {stats[1].base_stat}</h4>
      <h4>defensa: {stats[2].base_stat}</h4>
      <h4>velocidad: {stats[3].base_stat}</h4>
    </>
  );
};

export default Stats;
