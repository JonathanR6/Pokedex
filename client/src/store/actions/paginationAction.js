export const NEXT_PAG = "NEXT_PAG";
export const PREV_PAG = "PREV_PAG";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const SET_PAGE = "SET_PAGE";

export const nexPag = () => {
  return {
    type: NEXT_PAG,
    payload: 1,
  };
};

export const prevPag = () => {
  return {
    type: PREV_PAG,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const setPage = () => {
  return {
    type: SET_PAGE,
  };
};
