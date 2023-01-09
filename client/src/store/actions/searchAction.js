export const POKEMON_LOADING = "POKEMON_LOADING";
export const EMPTY_POKEMON = "EMPTY_POKEMON";
export const POKEMON_RESULT = "POKEMON_RESULT";
export const POKEMON_ERROR = "POKEMON_ERROR";

const {API_URL} = process.env

export const pokemonLoading = () => {
  return {
    type: POKEMON_LOADING,
  };
};

export const emptyPokemon = () => {
  return {
    type: EMPTY_POKEMON,
  };
};

const pokemonResult = (value) => {
  return {
    type: POKEMON_RESULT,
    payload: value,
  };
};

const pokemonError = (value) => {
  return {
    type: POKEMON_ERROR,
    payload: value,
  };
};

export const fetchSearch = (name) => (dispatch) => {
  dispatch(pokemonLoading());
  fetch(`${API_URL}/pokemons?name=${name}`)
    .then((r) => r.json())
    .then((r) => dispatch(pokemonResult(r)))
    .catch((err) => {
      dispatch(pokemonError("jaja no se sabe los nombre de los 1118 pokemons"));
    });
};
