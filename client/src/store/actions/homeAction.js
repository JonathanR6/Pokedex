export const POKEMONS_LOADINGS = "POKEMONS_LOADINGS";
export const POKEMONS_RESULTS = "POKEMONS_RESULTS";
export const POKEMONS_ERRORS = "POKEMONS_ERRORS";
export const POKEMONS_PAGES = "POKEMONS_PAGES";
export const ADD_LATEST = "ADD_LATEST";

const {REACT_APP_API_URL} = process.env

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

const pages = (value) => {
  return {
    type: POKEMONS_PAGES,
    payload: value,
  };
};

export const addLatest = () => (dispatch) => {
  fetch(`${REACT_APP_API_URL}/db`)
    .then((r) => r.json())
    .then((r) =>
      dispatch({
        type: ADD_LATEST,
        payload: r,
      })
    );
};

export const fetchAllPokemons =
  (value = 0) =>
  (dispatch) => {
    dispatch(pokemonsLoadings());

    Promise.all([
      fetch(`${REACT_APP_API_URL}/pokemons?pag=${value}`)
        .then((r) => r.json())
        .then((r) => dispatch(pokemonsResults(r))),
      fetch(`${REACT_APP_API_URL}/pages`)
        .then((r) => r.json())
        .then((r) => dispatch(pages(r))),
    ]).catch((err) => {
      dispatch(pokemonsErrors("Hubo un error al cargar los pokemons"));
    });
  };
