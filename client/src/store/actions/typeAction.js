export const GET_TYPES = "GET_TYPES";

const typesResults = (value) => {
  return {
    type: GET_TYPES,
    payload: value,
  };
};

export const allTypes = () => (dispatch) => {
  fetch(`http://localhost:3001/types`)
    .then((r) => r.json())
    .then((r) => dispatch(typesResults(r)))
    .catch((err) => {
      console.log(err);
    });
};
