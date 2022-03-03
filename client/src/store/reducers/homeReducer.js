import {
  POKEMONS_ERRORS,
  POKEMONS_LOADINGS,
  POKEMONS_RESULTS,
  POKEMONS_PAGES,
} from "../actions/homeAction";

const homeState = {
  pag: 0,
  pages: 0,
  loading: false,
  pokemons: [],
  error: "",
};

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case POKEMONS_LOADINGS:
      return {
        ...state,
        loading: true,
      };
    case POKEMONS_RESULTS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        loading: false,
      };
    case POKEMONS_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    case POKEMONS_PAGES:
      return {
        ...state,
        pages: action.payload,
      };

    default:
      return { ...state };
  }
};

export default homeReducer;
