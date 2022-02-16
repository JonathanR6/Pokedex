export const POKEMONS_LOADINGS = "POKEMONS_LOADINGS";
export const POKEMONS_RESULTS = "POKEMONS_RESULTS";
export const POKEMONS_ERRORS = "POKEMONS_ERRORS";

const pokemonsLoadings = () => {
  return {
    type: POKEMONS_LOADINGS,
  };
};

const pokemonsResults = (value) => {
  return {
    type: POKEMONS_RESULTS,
    payload: value,
  };
};

const pokemonsErrors = (value) => {
  return {
    type: POKEMONS_ERRORS,
    payload: value,
  };
};

export const fetchAllPokemons = () => (dispatch) => {
  dispatch(pokemonsLoadings());
  fetch(`http://localhost:3001/pokemons`)
    .then((r) => r.json())
    .then((r) => dispatch(pokemonsResults(r)))
    .catch((err) => {
      dispatch(pokemonsErrors("Hubo un error al cargar los pokemons"));
    });
};
