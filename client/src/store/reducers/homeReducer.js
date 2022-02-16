import {
  POKEMONS_ERRORS,
  POKEMONS_LOADINGS,
  POKEMONS_RESULTS,
} from "../actions/homeAction";

const homeState = {
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
        pokemons: [...action.payload],
        loading: false,
      };
    case POKEMONS_ERRORS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default homeReducer;

// const reducerOne = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ALL_POKEMONS:
//       return {
//         ...state,
//         pokemons: action.payload,
//       };
//     case GET_POKEMON:
//       return {
//         ...state,
//         pokemon: action.payload,
//       };
//     case GET_TYPES:
//       return {
//         ...state,
//         types: action.payload,
//       };

//     default:
//       return { ...state };
//   }
// };
