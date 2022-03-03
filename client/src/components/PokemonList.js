import React from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyPokemon, emptyFilter } from "../store/actions";
import Pagination from "./Pagination";
import Loading from "./Loading";
import "../styles/pokemonList.css";

const PokemonList = ({ pokemons = [], backP, backF, load, pagination }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((s) => s.paginationReducer);

  const next = pokemons.slice(page + 12, page + 24).length;

  return (
    <>
      <div className="pagcontainer visible">
        <Pagination next={next} offset={pagination} />

        {backP && (
          <Link to="#" onClick={() => dispatch(emptyPokemon())}>
            back
          </Link>
        )}

        {backF && (
          <Link to="#" onClick={() => dispatch(emptyFilter())}>
            back
          </Link>
        )}
      </div>

      {load ? (
        <Loading pokemons={true} />
      ) : (
        <div className="pokemonscontainer">
          {pokemons.length === 1
            ? pokemons.map(({ id, name, sprites, types }) => (
                <Pokemon
                  key={id}
                  id={id}
                  name={name}
                  sprites={sprites}
                  types={types}
                />
              ))
            : pokemons
                ?.slice(page, page + 12)
                .map(({ id, name, sprites, types }) => {
                  return (
                    <Pokemon
                      key={id}
                      id={id}
                      name={name}
                      sprites={sprites}
                      types={types}
                    />
                  );
                })}
        </div>
      )}
    </>
  );
};

export default PokemonList;
// export default React.memo(PokemonList);
