import React, { useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokeInfo } from "../store/actions/pokeInfoAction";

import Types from "../components/Types";
import Stats from "../components/Stats";
import Caracteristicas from "../components/Caracteristicas";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const { name: names } = useParams();
  const { pokemon, loading, error } = useSelector((r) => r.pokeInfoReducer);

  useEffect(() => {
    dispatch(fetchPokeInfo(names));
  }, [dispatch, names]);

  const { name, sprites, stats, types, weight, height } = pokemon;

  // console.log(pokemon);
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error.length) {
    return <div>{error}</div>;
  }

  if (pokemon) {
    return (
      <div>
        <h1>Pokemon</h1>
        <div>
          <Link to="/home">Volver</Link>
        </div>
        {!Array.isArray(pokemon) && name === names && (
          <>
            <img
              src={sprites.other ? sprites.other : sprites.front_default}
              alt={name}
            />
            <h1>{name}</h1>
            {types.map(({ type }) => (
              <Types key={type.name} type={type.name} />
            ))}
            <Stats stats={stats} />
            <Caracteristicas weight={weight + ""} height={height + ""} />
          </>
        )}
      </div>
    );
  }
};

export default PokemonInfo;
