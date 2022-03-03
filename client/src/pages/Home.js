import React, { useEffect } from "react";
import "../styles/home.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemons } from "../store/actions/";
import { Link } from "react-router-dom";

import PokemonList from "../components/PokemonList";
import Filters from "../components/Filters";
import Search from "../components/Search";
import Error from "../components/Error";

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, pages, error } = useSelector((s) => s.homeReducer);

  const { pokemon, searchError } = useSelector((s) => s.searchReducer);

  const { filter } = useSelector((s) => s.filterReducer);

  useEffect(() => {
    pokemons.length || dispatch(fetchAllPokemons());
  }, [dispatch, pokemons.length, pokemon]);

  if (error) {
    return <Error error={error} />;
  }

  const limit = filter.length ? filter.length / 12 : Math.ceil(pages / 12);

  return (
    <div className="homecontainer">
      <Link className="imgcontainer" to="/">
        <img className="logo" src={"../img/logo.png"} alt="logo" />
      </Link>
      <div className="nav">
        <Link to="/home/create">Create</Link>
        <Search />
        <Filters values={pokemons} />
      </div>

      {searchError && <Error error={searchError} backP={true} />}

      {pokemon.length ? (
        <PokemonList
          pokemons={pokemon}
          pepe={pokemon}
          load={false}
          backP={true}
          pagination={1}
        />
      ) : filter.length ? (
        <PokemonList
          pokemons={filter}
          load={false}
          backF={true}
          pagination={Math.ceil(limit)}
        />
      ) : (
        <PokemonList pokemons={pokemons} load={loading} pagination={limit} />
      )}
    </div>
  );
};

export default Home;
