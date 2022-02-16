import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemons, fetchSearch } from "../store/actions/";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector(
    (store) => store.homeReducer
  );

  const { pokemon, searchError } = useSelector((s) => s.searchReducer);

  useEffect(() => {
    pokemons.length || dispatch(fetchAllPokemons());
  }, [dispatch, pokemons.length]);

  const handleSearch = (name) => {
    dispatch(fetchSearch(name));
  };

  if (error.length) {
    return <div>{error}</div>;
  }
  if (searchError.length) {
    return <PokemonList back={"volver"} error={searchError} />;
  }

  return (
    <>
      <h1>Pokemons</h1>
      <div>
        <Link to="/home/create">Create</Link>
        <Search search={handleSearch} />
      </div>

      {pokemon.length ? (
        <PokemonList pokemons={pokemon} back={"valver"} />
      ) : loading ? (
        <div>Cargando...</div>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
};

export default Home;
