import {
  NEXT_PAGE,
  PREV_PAGE,
  NEXT_PAG,
  PREV_PAG,
  SET_PAGE,
} from "../actions/paginationAction";

const inirialState = {
  pag: 1,
  page: 0,
  numPag: 1,
};

const paginationReducer = (state = inirialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 12,
        numPag: state.numPag + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 12,
        numPag: state.numPag - 1,
      };
    case NEXT_PAG:
      return {
        ...state,
        pag: state.pag + action.payload,
      };
    case PREV_PAG:
      return {
        ...state,
        pag: state.pag - 1,
      };
    case SET_PAGE:
      return {
        ...state,
        numPag: 1,
        page: 0,
      };

    default:
      return { ...state };
  }
};

export default paginationReducer;
