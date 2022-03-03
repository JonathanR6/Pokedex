import React from "react";
import Types from "./Types";
import { Link } from "react-router-dom";
import { nameFormat } from "../utils/utilsPokemon";
import "../styles/pokemon.css";

const Pokemon = ({ id, name, sprites, types }) => {
  name = nameFormat(name);
  return (
    <Link className="pokemonlink" to={`/home/${id}`}>
      <div className="pokemondiv">
        <div className="pokeimgcontainer">
          <img className="pokemonimg" src={sprites.front_default} alt={name} />
        </div>

        <div className="pokemoninfodiv">
          <h3 className="pokemonname">{name}</h3>

          <div className="pokemontype">
            {types.map(({ type }) => (
              <Types key={type.name} type={type.name} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
