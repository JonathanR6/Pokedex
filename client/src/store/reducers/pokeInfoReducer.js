import {
  POKEINFO_ERROR,
  POKEINFO_LOADING,
  POKEINFO_RESULT,
} from "../actions/pokeInfoAction";

const initialState = {
  loading: false,
  pokemon: {},
  error: "",
};

const pokeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEINFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POKEINFO_RESULT:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case POKEINFO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default pokeInfoReducer;
