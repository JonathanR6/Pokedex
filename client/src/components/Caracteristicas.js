import React from "react";

import { heightFormat, weightFormat } from "../utils/weightAndHeight";

const Caracteristicas = ({ height, weight }) => {
  const altura = heightFormat(height);

  const peso = weightFormat(weight);

  return (
    <>
      <h4>height: {altura}</h4>
      <h4>weight: {peso} kg</h4>
    </>
  );
};

export default Caracteristicas;
