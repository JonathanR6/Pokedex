export const POKEINFO_LOADING = "POKEINFO_LOADING";
export const POKEINFO_RESULT = "POKEINFO_RESULT";
export const POKEINFO_ERROR = "POKEINFO_EROR";

const pokeInfoLoading = () => {
  return {
    type: POKEINFO_LOADING,
  };
};

const pokeInfoResult = (value) => {
  return {
    type: POKEINFO_RESULT,
    payload: value,
  };
};

const pokeInfoError = (value) => {
  return {
    type: POKEINFO_ERROR,
    payload: value,
  };
};

export const fetchPokeInfo = (name) => (dispatch) => {
  dispatch(pokeInfoLoading());
  fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then((r) => r.json())
    .then((r) => dispatch(pokeInfoResult(r)))
    .catch((err) => {
      dispatch(pokeInfoError(`El pokemon ${name} no existe`));
    });
};
