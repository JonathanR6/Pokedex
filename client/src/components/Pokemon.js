import React from "react";
import Types from "./Types";
import { Link } from "react-router-dom";

const Pokemon = ({ name, sprites, types }) => {
  return (
    <Link to={`/home/${name}`}>
      <div>
        <img src={sprites.front_default} alt={name} />
        <h3>{name}</h3>
        {types.map(({ type }) => (
          <Types key={type.name} type={type.name} />
        ))}
      </div>
    </Link>
  );
};

export default Pokemon;
