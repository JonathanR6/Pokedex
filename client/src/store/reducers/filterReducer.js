import {
  ORDER_AZ,
  ORDER_ZA,
  ORDER_FORCE_MAX,
  ORDER_FORCE_MIN,
  ORDER_TYPE,
  ORDER_MY_POKEMONS,
  EMPTY_FILTER,
  FILTER_VALUE,
} from "../actions/filterAction";

//

const initialState = {
  filter: [],
  value: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_AZ:
      return {
        ...state,
        filter: action.payload.sort((a, b) => (a.name < b.name ? -1 : null)),
      };
    case ORDER_ZA:
      return {
        ...state,
        filter: action.payload.sort((a, b) => (a.name > b.name ? -1 : null)),
      };
    case ORDER_FORCE_MAX:
      return {
        ...state,
        filter: action.payload.sort((a, b) => {
          let A = a.stats[1].base_stat;
          let B = b.stats[1].base_stat;
          return A > B ? -1 : null;
        }),
      };
    case ORDER_FORCE_MIN:
      return {
        ...state,
        filter: action.payload.sort((a, b) => {
          let A = a.stats[1].base_stat;
          let B = b.stats[1].base_stat;
          return A < B ? -1 : null;
        }),
      };
    case ORDER_TYPE:
      return {
        ...state,
        filter: action.payload.value.filter((r) =>
          r.types.map((r) => r.type.name).includes(action.payload.type)
        ),
      };
    case ORDER_MY_POKEMONS:
      return {
        ...state,
        filter: action.payload,
      };
    case EMPTY_FILTER:
      return {
        ...state,
        filter: [],
        value: "",
      };
    case FILTER_VALUE:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return { ...state };
  }
};

export default filterReducer;
