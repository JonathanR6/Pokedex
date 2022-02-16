import React from "react";

const Caracteristicas = ({ height, weight }) => {
  const altura =
    height.length > 1 ? `${height[0]},${height[1]} mtrs` : `${height}0 cm`;
  const peso =
    weight.length > 2
      ? `${weight[0]}${weight[1]},${weight[2]} kg`
      : `${weight} kg`;
  return (
    <>
      <h4>altura: {altura}</h4>
      <h4>peso: {peso}</h4>
    </>
  );
};

export default Caracteristicas;
