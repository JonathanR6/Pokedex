export const POKEINFO_LOADING = "POKEINFO_LOADING";
export const POKEINFO_RESULT = "POKEINFO_RESULT";
export const POKEINFO_ERROR = "POKEINFO_EROR";
export const EMPTY_POKEINFO = "EMPTY_POKEINFO";

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

export const empryPokeinfo = () => {
  return {
    type: EMPTY_POKEINFO,
  };
};

export const fetchPokeInfo = (id) => (dispatch) => {
  dispatch(pokeInfoLoading());
  fetch(`http://localhost:3001/pokemons/${id}`)
    .then((r) => r.json())
    .then((r) => dispatch(pokeInfoResult(r)))
    .catch((err) => {
      dispatch(pokeInfoError(`El pokemon no fue encontrado`));
    });
};
