import React from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyPokemon } from "../store/actions";

const PokemonList = ({ pokemons, back, error }) => {
  const dispatch = useDispatch();

  return (
    <>
      {back && (
        <Link to="#" onClick={() => dispatch(emptyPokemon())}>
          {back}
        </Link>
      )}

      {error && <div>{error}</div>}

      {pokemons &&
        pokemons.map(({ name, sprites, types }) => {
          return (
            <Pokemon key={name} name={name} sprites={sprites} types={types} />
          );
        })}
    </>
  );
};

export default PokemonList;
