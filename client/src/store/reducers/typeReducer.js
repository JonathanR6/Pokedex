import { GET_TYPES } from "../actions/typeAction";

const initialState = {
  types: [],
  errorType: "",
};

const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    default:
      return { ...state };
  }
};

export default typesReducer;
