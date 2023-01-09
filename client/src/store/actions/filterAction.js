export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_FORCE_MAX = "ORDER_FORCE_MAX";
export const ORDER_FORCE_MIN = "ORDER_FORCE_MIN";
export const ORDER_TYPE = "ORDER_TYPE";
export const ORDER_MY_POKEMONS = "ORDER_MY_POKEMONS";
export const EMPTY_FILTER = "EMPTY_FILTER";
export const FILTER_VALUE = "FILTER_VALUE";

const {APP_URL} = process.env

export const filterAz = (target, value) => (dispatch) => {
  dispatch(filterValue(target));
  dispatch({
    type: ORDER_AZ,
    payload: [...value],
  });
};

export const filterZa = (target, value) => (dispatch) => {
  dispatch(filterValue(target));
  dispatch({
    type: ORDER_ZA,
    payload: [...value],
  });
};

export const filterForceMax = (target, value) => (dispatch) => {
  dispatch(filterValue(target));
  dispatch({
    type: ORDER_FORCE_MAX,
    payload: [...value],
  });
};

export const filterForceMin = (target, value) => (dispatch) => {
  dispatch(filterValue(target));
  dispatch({
    type: ORDER_FORCE_MIN,
    payload: [...value],
  });
};

export const filterType = (value, type) => (dispatch) => {
  dispatch(filterValue(type));
  dispatch({
    type: ORDER_TYPE,
    payload: { value: [...value], type },
  });
};

export const filterMyPokemons = (value) => (dispatch) => {
  dispatch(filterValue(value));
  fetch(`${APP_URL}/filter`)
    .then((r) => r.json())
    .then((r) =>
      dispatch({
        type: ORDER_MY_POKEMONS,
        payload: r,
      })
    );
};

export const emptyFilter = () => {
  return {
    type: EMPTY_FILTER,
  };
};

export const filterValue = (value) => {
  return {
    type: FILTER_VALUE,
    payload: value,
  };
};
