import {
  POKEMON_ERROR,
  POKEMON_RESULT,
  EMPTY_POKEMON,
} from "../actions/searchAction";

const initialState = {
  searchLoading: false,
  pokemon: [],
  searchError: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_POKEMON:
      return {
        ...state,
        pokemon: [],
        searchError: "",
      };
    case POKEMON_RESULT:
      return {
        ...state,
        pokemon: [action.payload],
        searchLoading: false,
      };
    case POKEMON_ERROR:
      return {
        ...state,
        searchError: action.payload,
      };

    default:
      return { ...state };
  }
};

export default searchReducer;
