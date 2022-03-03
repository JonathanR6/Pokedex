import React, { useEffect } from "react";
import "../styles/pokemonInfo.css";

import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokeInfo, empryPokeinfo } from "../store/actions";
import { nameSpaces } from "../utils/utilsPokemon";

import Types from "../components/Types";
import Stats from "../components/Stats";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Caracteristicas from "../components/Caracteristicas";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemon, loading, error } = useSelector((r) => r.pokeInfoReducer);

  useEffect(() => {
    dispatch(fetchPokeInfo(id));
  }, [dispatch, id]);

  const { name, sprites, stats, types, weight, height } = pokemon;

  if (error.length) {
    return <Error error={error} />;
  }

  if (pokemon) {
    return (
      <div>
        <div className="pokeinfolink">
          <Link to="/home" onClick={() => dispatch(empryPokeinfo())}>
            back
          </Link>
        </div>

        <div className="infocontainer">
          {loading ? (
            <Loading pokemon={true} />
          ) : (
            name && (
              <>
                <div className="infoheader">
                  <h1>{nameSpaces(name)}</h1>
                  <div className="imgstats">
                    <img
                      className="infoimg"
                      src={
                        sprites.other ? sprites.other : sprites.front_default
                      }
                      alt={name}
                    />

                    <Stats stats={stats} />
                  </div>
                </div>
                {types.map(({ type }) => (
                  <Types key={type.name} type={type.name} />
                ))}
                <div className="caracteristicas">
                  <Caracteristicas weight={weight + ""} height={height + ""} />
                </div>
              </>
            )
          )}
        </div>
      </div>
    );
  }
};

export default PokemonInfo;
